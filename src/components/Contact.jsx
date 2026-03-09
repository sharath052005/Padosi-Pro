import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.message) {
      setSent(true)
      setTimeout(() => setSent(false), 4000)
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="section-container contact__layout">
        <div className="contact__info">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Ready to Simplify<br />Your Life?</h2>
          <p className="contact__desc">
            Reach out and a Padosi Pro coordinator will get back to you within 2 hours.
          </p>
          <div className="contact__details">
            <a href="mailto:contact@padosipro.com" className="contact-detail-item">
              <div className="contact-detail-icon">✉️</div>
              <div>
                <div className="contact-detail-label">Email Us</div>
                <div className="contact-detail-value">contact@padosipro.com</div>
              </div>
            </a>
            <div className="contact-detail-item">
              <div className="contact-detail-icon">⏱</div>
              <div>
                <div className="contact-detail-label">Response Time</div>
                <div className="contact-detail-value">Within 2 hours</div>
              </div>
            </div>
            <div className="contact-detail-item">
              <div className="contact-detail-icon">📍</div>
              <div>
                <div className="contact-detail-label">Coverage</div>
                <div className="contact-detail-value">Major Urban Areas</div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__form-wrap">
          {sent ? (
            <div className="form-success">
              <span className="success-icon">🎉</span>
              <h3>Message Sent!</h3>
              <p>We'll be in touch within 2 hours.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input id="name" name="name" type="text" className="form-input"
                  placeholder="Your name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input id="email" name="email" type="email" className="form-input"
                  placeholder="your@email.com" value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" name="message" className="form-input form-textarea"
                  placeholder="Tell us how we can help..." rows={5}
                  value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn-primary btn-lg btn-full">
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}