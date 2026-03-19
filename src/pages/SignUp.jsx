import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/SignUp.css'

const roles = [
  {
    id: 'customer',
    icon: '🏠',
    title: 'Customer',
    desc: 'I want help managing my household tasks and errands',
  },
  {
    id: 'vendor',
    icon: '🔧',
    title: 'Vendor',
    desc: 'I provide services like repairs, cleaning, delivery etc.',
  },
  {
    id: 'lifestyle_manager',
    icon: '🎯',
    title: 'Lifestyle Manager',
    desc: 'I want to coordinate and manage tasks for families',
  },
]

export default function Signup() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [selectedRole, setSelectedRole] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    city: '',
    householdType: '',
    serviceCategory: '',
    experience: '',
    availability: '',
    languages: '',
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleRoleSelect = (role) => {
    setSelectedRole(role)
    setStep(2)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStep(3)
  }

  return (
    <div className="signup-page">
      <div className="signup-card">

        {/* Logo */}
        <div className="signup-card__logo">
          <img src={logo} alt="Padosi Pro" className="signup-logo-img" />
        </div>

        {/* ── STEP 1: Role Selection ── */}
        {step === 1 && (
          <div className="signup-section">
            <div className="signup-card__header">
              <h1 className="signup-card__title">Sign Up as</h1>
              <p className="signup-card__subtitle">Choose how you want to use Padosi Pro</p>
            </div>

            <div className="signup-roles">
              {roles.map((role) => (
                <button
                  key={role.id}
                  className={`role-card ${selectedRole === role.id ? 'role-card--selected' : ''}`}
                  onClick={() => handleRoleSelect(role.id)}
                >
                  <span className="role-card__icon">{role.icon}</span>
                  <div className="role-card__content">
                    <div className="role-card__title">{role.title}</div>
                    <div className="role-card__desc">{role.desc}</div>
                  </div>
                </button>
              ))}
            </div>

            <p className="signup-card__footer">
              Already have an account?{' '}
              <Link to="/login" className="signup-link">Log in</Link>
            </p>
          </div>
        )}

        {/* ── STEP 2: Details Form ── */}
        {step === 2 && (
          <div className="signup-section">
            <div className="signup-card__header">
              <div className="signup-role-badge">
                {roles.find(r => r.id === selectedRole)?.icon}{' '}
                {roles.find(r => r.id === selectedRole)?.title}
              </div>
              <h1 className="signup-card__title">Create your account</h1>
              <p className="signup-card__subtitle">Fill in your details to get started</p>
            </div>

            <div className="signup-form-card">

              {/* Google SSO */}
              <button type="button" className="signup-sso-btn">
                <svg width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.84l6.1-6.1C34.36 3.07 29.43 1 24 1 14.82 1 7.07 6.48 3.64 14.22l7.1 5.52C12.4 13.61 17.73 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.52 24.5c0-1.64-.15-3.22-.42-4.74H24v8.98h12.68c-.55 2.94-2.2 5.43-4.68 7.1l7.18 5.58C43.36 37.27 46.52 31.36 46.52 24.5z"/>
                  <path fill="#FBBC05" d="M10.74 28.26A14.54 14.54 0 0 1 9.5 24c0-1.48.25-2.91.7-4.26l-7.1-5.52A23.93 23.93 0 0 0 0 24c0 3.86.92 7.51 2.56 10.74l8.18-6.48z"/>
                  <path fill="#34A853" d="M24 47c5.43 0 9.99-1.8 13.32-4.88l-7.18-5.58c-1.8 1.2-4.1 1.96-6.14 1.96-6.27 0-11.6-4.11-13.26-9.74l-8.18 6.48C7.07 41.52 14.82 47 24 47z"/>
                </svg>
                Continue with Google
              </button>

              <div className="signup-divider"><span>or sign up with email</span></div>

              <form className="signup-form" onSubmit={handleSubmit}>

                {/* Common Fields */}
                <div className="form-row">
                  <div className="signup-form__group">
                    <label className="signup-form__label">Full Name</label>
                    <input
                      name="fullName"
                      type="text"
                      className="signup-form__input"
                      placeholder="Your full name"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="signup-form__group">
                    <label className="signup-form__label">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      className="signup-form__input"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="signup-form__group">
                  <label className="signup-form__label">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    className="signup-form__input"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="signup-form__group">
                  <label className="signup-form__label">Password</label>
                  <div className="signup-form__input-wrap">
                    <input
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      className="signup-form__input"
                      placeholder="Create a password"
                      value={form.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className="signup-form__eye"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                          <line x1="1" y1="1" x2="23" y2="23"/>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Customer-specific Fields */}
                {selectedRole === 'customer' && (
                  <div className="form-row">
                    <div className="signup-form__group">
                      <label className="signup-form__label">City</label>
                      <select
                        name="city"
                        className="signup-form__input signup-form__select"
                        value={form.city}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select city</option>
                        <option>Hyderabad</option>
                        <option>Bengaluru</option>
                        <option>Mumbai</option>
                        <option>Delhi NCR</option>
                        <option>Chennai</option>
                        <option>Pune</option>
                        <option>Jaipur</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="signup-form__group">
                      <label className="signup-form__label">Household Type</label>
                      <select
                        name="householdType"
                        className="signup-form__input signup-form__select"
                        value={form.householdType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select type</option>
                        <option>Nuclear Family</option>
                        <option>Joint Family</option>
                        <option>Single Professional</option>
                        <option>Senior Living Alone</option>
                        <option>NRI — Managing Parents</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Vendor-specific Fields */}
                {selectedRole === 'vendor' && (
                  <div className="form-row">
                    <div className="signup-form__group">
                      <label className="signup-form__label">Service Category</label>
                      <select
                        name="serviceCategory"
                        className="signup-form__input signup-form__select"
                        value={form.serviceCategory}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select category</option>
                        <option>Home Repairs & Maintenance</option>
                        <option>Cleaning Services</option>
                        <option>Errands & Delivery</option>
                        <option>Senior Care</option>
                        <option>Nutrition & Meals</option>
                        <option>Travel & Transport</option>
                        <option>Events & Coordination</option>
                        <option>Fashion & Tailoring</option>
                        <option>Religious & Cultural</option>
                      </select>
                    </div>
                    <div className="signup-form__group">
                      <label className="signup-form__label">Years of Experience</label>
                      <select
                        name="experience"
                        className="signup-form__input signup-form__select"
                        value={form.experience}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select</option>
                        <option>Less than 1 year</option>
                        <option>1–3 years</option>
                        <option>3–5 years</option>
                        <option>5+ years</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Lifestyle Manager-specific Fields */}
                {selectedRole === 'lifestyle_manager' && (
                  <div className="form-row">
                    <div className="signup-form__group">
                      <label className="signup-form__label">Availability</label>
                      <select
                        name="availability"
                        className="signup-form__input signup-form__select"
                        value={form.availability}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select</option>
                        <option>Full-time</option>
                        <option>Part-time (Morning)</option>
                        <option>Part-time (Evening)</option>
                        <option>Weekends Only</option>
                        <option>Flexible</option>
                      </select>
                    </div>
                    <div className="signup-form__group">
                      <label className="signup-form__label">Languages Known</label>
                      <select
                        name="languages"
                        className="signup-form__input signup-form__select"
                        value={form.languages}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select primary</option>
                        <option>English + Hindi</option>
                        <option>English + Telugu</option>
                        <option>English + Tamil</option>
                        <option>English + Kannada</option>
                        <option>English + Marathi</option>
                        <option>Multiple Languages</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className="signup-form__actions">
                  <button type="button" className="btn-back" onClick={() => setStep(1)}>
                    ← Back
                  </button>
                  <button type="submit" className="signup-submit">
                    Create Account →
                  </button>
                </div>

              </form>
            </div>

            <p className="signup-card__footer">
              Already have an account?{' '}
              <Link to="/login" className="signup-link">Log in</Link>
            </p>
          </div>
        )}

        {/* ── STEP 3: Success ── */}
        {step === 3 && (
          <div className="signup-success">
            <div className="signup-success__icon">🎉</div>
            <h2 className="signup-success__title">You're all set!</h2>
            <p className="signup-success__sub">
              Welcome to Padosi Pro. Your account has been created as a{' '}
              <strong>{roles.find(r => r.id === selectedRole)?.title}</strong>.
            </p>
            <div className="signup-success__actions">
              <button className="signup-submit" onClick={() => navigate('/login')}>
                Go to Login →
              </button>
              <button className="btn-back" onClick={() => navigate('/')}>
                Back to Home
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}