import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface SignupFormData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  businessName: string
  businessSize: string
}

interface AuthState {
  formData: SignupFormData
  loading: boolean
  error: string | null
  success: boolean
  successMessage: string | null
}

const initialState: AuthState = {
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    businessSize: ''
  },
  loading: false,
  error: null,
  success: false,
  successMessage: null
}

// ✅ Updated async thunk to send JSON
export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (formData: SignupFormData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://seemli.mytutorpod.org/mtpsaas/public/api/v1/app/sign-up',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        }
      )

      const data = await response.json()
      if (!response.ok || !data.success) {
        // Catch backend validation errors
        return rejectWithValue(data.message || 'Sign up failed')
      }

      return data
    } catch (error) {
      return rejectWithValue((error as Error).message || 'Network error')
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateFormField: (state, action) => {
      const { name, value } = action.payload
      state.formData = { ...state.formData, [name]: value }
    },
    resetForm: () => initialState,
    clearError: (state) => {
      state.error = null
      state.successMessage = null
      state.success = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.successMessage = action.payload.message || 'Account created successfully!'
        state.formData = initialState.formData
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
        state.success = false
      })
  }
})

export const { updateFormField, resetForm, clearError } = authSlice.actions
export default authSlice.reducer
