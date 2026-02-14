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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    dispatch(updateFormField({ name, value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    
    // Dispatch signup action
    const result = await dispatch(signUpUser(formData))
    
    if (result.meta.requestStatus === 'fulfilled') {
      // Clear success message after 3 seconds
      setTimeout(() => {
        dispatch(clearError())
      }, 3000)
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

            <h1 className="hero-title">
              Everything You Need<br/>
              To <span className="highlight">Manage & Grow</span><br/>
              Your Tutoring Business
            </h1>

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
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="full-width"
                />

                <div className="form-row">
                  <div className="password-field">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <i 
                      className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} eye-icon`}
                      onClick={() => setShowPassword(!showPassword)}
                    ></i>
                  </div>
                  <div className="password-field">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                    <i 
                      className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} eye-icon`}
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    ></i>
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

                <div className="terms-check">
                  <input type="checkbox" id="terms" required />
                  <label htmlFor="terms">
                    I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>
                  </label>
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
