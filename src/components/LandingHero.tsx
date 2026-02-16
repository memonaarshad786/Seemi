import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFormField, signUpUser, clearError } from '../store/slices/authSlice'
import { RootState, AppDispatch } from '../store/index'
import './styles/LandingHero.css'
import '@fortawesome/fontawesome-free/css/all.min.css'


export default function LandingHero() {
  const dispatch = useDispatch<AppDispatch>()
  const { formData, loading, error, success, successMessage } = useSelector((state: RootState) => state.auth)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value, type, checked } = e.target

  if (type === 'checkbox') {
    setAgreed(checked)
    setErrors((prev) => ({ ...prev, terms: '' })) // clear terms error on check
  } else {
    // update form field in redux
    dispatch(updateFormField({ name, value }))

    // clear the specific field error first
    setErrors((prev) => ({ ...prev, [name]: '' }))

    // Inline validation for password length and match
    if (name === 'password') {
      // check length
      if (value && value.length < 8) {
        setErrors((prev) => ({ ...prev, password: 'Password must be at least 8 characters' }))
      } else {
        setErrors((prev) => ({ ...prev, password: '' }))
      }

      // check match against current confirmPassword in state
      const currentConfirm = formData.confirmPassword || ''
      if (currentConfirm && value !== currentConfirm) {
        setErrors((prev) => ({ ...prev, confirmPassword: 'Passwords do not match' }))
      } else {
        setErrors((prev) => ({ ...prev, confirmPassword: '' }))
      }
    }

    if (name === 'confirmPassword') {
      const currentPassword = formData.password || ''
      if (value && currentPassword && value !== currentPassword) {
        setErrors((prev) => ({ ...prev, confirmPassword: 'Passwords do not match' }))
      } else {
        setErrors((prev) => ({ ...prev, confirmPassword: '' }))
      }
    }
  }

  dispatch(clearError())
}


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const nextErrors: Record<string, string> = {}

  // ✅ Frontend validation
  if (!formData.firstName.trim()) nextErrors.firstName = 'First name is required'
  if (!formData.lastName.trim()) nextErrors.lastName = 'Last name is required'
  if (!formData.email.trim()) nextErrors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Enter a valid email'
  if (!formData.password) nextErrors.password = 'Password is required'
  if (!formData.confirmPassword) nextErrors.confirmPassword = 'Please confirm your password'
  if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) 
    nextErrors.confirmPassword = 'Passwords do not match'
  if (!agreed) nextErrors.terms = 'You must accept the Terms of Service and Privacy Policy'

  if (Object.keys(nextErrors).length > 0) {
    setErrors(nextErrors)
    return
  }

  // ✅ Clear previous errors
  setErrors({})
  dispatch(clearError())

  // ✅ Dispatch API call
  console.log('Submitting signup', formData)
  const result = await dispatch(signUpUser(formData))
  console.log('Signup result', result)

  if (result.meta.requestStatus === 'fulfilled') {
    // Reset local state
    setAgreed(false)
    setErrors({})
    // Clear success message after 3 seconds
    setTimeout(() => dispatch(clearError()), 3000)
  }
}


  return (
    <section >
      <div className="hero-wrapper">
        <div className="hero-container">
          <div className="hero-left">
            <div className="logo-section">
              <img src="/Assets/1st-comp/Seemi-Logo-05-1024x224.png 1.png" alt="Seemi Logo" className="seemi-logo" />
                              <img src="/Assets/1st-comp/Vector.png" alt="vector Icon" className="comp-1-firstimg" />

            </div>

            <p className="hero-title">
              Everything You Need<br/>
              To <span className="highlight">Manage & Grow</span><br/>
              Your Tutoring Business
            </p>

            <p className="hero-description">
              <strong>Seemi</strong> streamlines your tutoring business with real-time 
              tools for scheduling, progress tracking, and payments. 
              Focus on teaching while we handle the rest.
            </p>
            
          </div>

          <div className="hero-right">
            <div className="signup-card">
              <h2>Get <span className="days-highlight">30 days</span> free!</h2>
              
              {error && (
                <div className="alert alert-error">
                  <i className="fas fa-exclamation-circle"></i>
                  {error}
                </div>
              )}
              
              {success && successMessage && (
                <div className="alert alert-success">
                  <i className="fas fa-check-circle"></i>
                  {successMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="signup-form">
  <div className="form-row">
    <div>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        className={errors.firstName ? 'error' : ''}
      />
      {errors.firstName && <span className="field-error">{errors.firstName}</span>}
    </div>
    <div>
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        className={errors.lastName ? 'error' : ''}
      />
      {errors.lastName && <span className="field-error">{errors.lastName}</span>}
    </div>
  </div>

  <div>
    <input
      type="email"
      name="email"
      placeholder="Email Address"
      value={formData.email}
      onChange={handleChange}
      className={`full-width ${errors.email ? 'error' : ''}`}
    />
    {errors.email && <span className="field-error">{errors.email}</span>}
  </div>

  <div className="form-row">
    <div>
      <div className="password-field">
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={errors.password ? 'error' : ''}
        />
        <i 
          className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} eye-icon`}
          onClick={() => setShowPassword(!showPassword)}
        ></i>
      </div>
      {errors.password && <span className="error-text">{errors.password}</span>}
    </div>

    <div>
      <div className="password-field">
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={errors.confirmPassword ? 'error' : ''}
        />
        <i 
          className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} eye-icon`}
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        ></i>
      </div>
      {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
    </div>
  </div>

  <input
    type="text"
    name="businessName"
    placeholder="Business Name (Optional)"
    value={formData.businessName}
    onChange={handleChange}
    className="full-width"
  />

  <input
    type="text"
    name="businessSize"
    placeholder="Business Size"
    value={formData.businessSize}
    onChange={handleChange}
    className="full-width"
  />

  <div>
    <div className='terms-check'>
      <input type="checkbox" id="terms" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
      <label htmlFor="terms">
        I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>
      </label>
    </div>
    {errors.terms && <span className="field-error">{errors.terms}</span>}
  </div>

  <button type="submit" className="signup-btn" disabled={loading}>
    {loading ? (
      <>
        <i className="fas fa-spinner fa-spin"></i> Creating Account...
      </>
    ) : (
      'Create My Tutor Account'
    )}
  </button>
</form>

            </div>

            <div className="icon-building">
                              <img src="/Assets/1st-comp/Group.png" alt="Education Icon" className="comp-1-secondimg" />
            </div>
          </div>
          
        </div>
  
      </div>
                <img src="/Assets/1st-comp/Mask Group.png" alt="Building Icon" className="cloud-img" />

      

      
    </section>
  )
}
