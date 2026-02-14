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

// Async thunk for signup API call
export const signUpUser = createAsyncThunk(
  'auth/signUpUser',
  async (formData: SignupFormData, { rejectWithValue }) => {
    try {
      const formDataObj = new FormData()
      formDataObj.append('firstName', formData.firstName)
      formDataObj.append('lastName', formData.lastName)
      formDataObj.append('email', formData.email)
      formDataObj.append('password', formData.password)
      formDataObj.append('confirmPassword', formData.confirmPassword)
      formDataObj.append('businessName', formData.businessName)
      formDataObj.append('businessSize', formData.businessSize)

      const response = await fetch('https://seemli.mytutorpod.org/mtpsaas/public/api/v1/app/sign-up', {
        method: 'POST',
        body: formDataObj
      })

      if (!response.ok) {
        const errorData = await response.json()
        return rejectWithValue(errorData.message || 'Sign up failed')
      }

      const data = await response.json()
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
      state.formData = {
        ...state.formData,
        [name]: value
      }
    },
    resetForm: () => initialState,
    clearError: (state) => {
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
      })
      .addCase(signUpUser.fulfilled, (state) => {
        state.loading = false
        state.success = true
        state.successMessage = 'Account created successfully!'
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
