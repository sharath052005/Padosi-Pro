import { useState } from 'react'
import logo from '../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login:', form)
  }

  return (
    <div className="login-page">
      <div className="login-card">

        {/* Logo */}
        <div className="login-card__logo">
          <img src={logo} alt="Padosi Pro" className="login-logo-img" />
        </div>

        {/* Heading */}
        <div className="login-card__header">
          <h1 className="login-card__title">Welcome back</h1>
          <p className="login-card__subtitle">Sign in to your account to continue</p>
        </div>

        {/* Google SSO */}
        <button className="login-sso-btn">
          <svg width="20" height="20" viewBox="0 0 48 48">
            <path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.84l6.1-6.1C34.36 3.07 29.43 1 24 1 14.82 1 7.07 6.48 3.64 14.22l7.1 5.52C12.4 13.61 17.73 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.52 24.5c0-1.64-.15-3.22-.42-4.74H24v8.98h12.68c-.55 2.94-2.2 5.43-4.68 7.1l7.18 5.58C43.36 37.27 46.52 31.36 46.52 24.5z"/>
            <path fill="#FBBC05" d="M10.74 28.26A14.54 14.54 0 0 1 9.5 24c0-1.48.25-2.91.7-4.26l-7.1-5.52A23.93 23.93 0 0 0 0 24c0 3.86.92 7.51 2.56 10.74l8.18-6.48z"/>
            <path fill="#34A853" d="M24 47c5.43 0 9.99-1.8 13.32-4.88l-7.18-5.58c-1.8 1.2-4.1 1.96-6.14 1.96-6.27 0-11.6-4.11-13.26-9.74l-8.18 6.48C7.07 41.52 14.82 47 24 47z"/>
          </svg>
          Continue with Google
        </button>

        {/* Divider */}
        <div className="login-divider">
          <span>or sign in with email</span>
        </div>

        {/* Form */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form__group">
            <label className="login-form__label">Email address</label>
            <input
              name="email"
              type="email"
              className="login-form__input"
              placeholder="you@company.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="login-form__group">
            <div className="login-form__label-row">
              <label className="login-form__label">Password</label>
              <button type="button" className="login-forgot">Forgot password?</button>
            </div>
            <div className="login-form__input-wrap">
              <input
                name="password"
                type={showPassword ? 'text' : 'password'}
                className="login-form__input"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <button
              type="button"
              className="login-form__eye"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password"
            >
              {showPassword ? (
                // Eye with strike-through (hide password)
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              ) : (
                // Normal eye (show password)
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              )}
            </button>
            </div>
          </div>

          <button type="submit" className="login-submit">
            Login →
          </button>
        </form>

        {/* Footer */}
        <p className="login-card__footer">
          Don't have an account?{' '}
          <button className="login-card__signup" onClick={() => navigate('/signup')}>Create Account</button>
        </p>

      </div>
    </div>
  )
}