const points = [
  { icon: '⚡', text: 'Designed for busy professionals and families' },
  { icon: '🎯', text: 'Single accountable lifestyle manager per task' },
  { icon: '🔐', text: 'Trusted, verified vendor network' },
  { icon: '📸', text: 'Standardized processes with proof of completion' },
  { icon: '🧘', text: 'Reduces the mental load of daily life' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-container about__layout">
        <div className="about__visual">
          <div className="about__visual-card">
            <div className="visual-card__top">
              <div className="vc-stat">
                <div className="vc-stat__num">98%</div>
                <div className="vc-stat__label">Satisfaction Rate</div>
              </div>
              <div className="vc-divider" />
              <div className="vc-stat">
                <div className="vc-stat__num">2hr</div>
                <div className="vc-stat__label">Avg Response Time</div>
              </div>
            </div>
            <div className="visual-card__mission">
              <span className="mission-quote">"</span>
              <p>
                Padosi Pro aims to become the <strong>life infrastructure layer for urban households</strong>,
                simplifying everyday responsibilities through trusted coordination and intelligent service management.
              </p>
            </div>
            <div className="visual-card__trust">
              <span className="trust-badge">🏆 Premium Service</span>
              <span className="trust-badge">✓ Proof-Based</span>
              <span className="trust-badge">🔒 Verified Vendors</span>
            </div>
          </div>
          <div className="about__visual-blob" />
        </div>

        <div className="about__content">
          <span className="section-tag">Why Padosi Pro</span>
          <h2 className="section-title about__title">Built for Modern<br />Urban Families</h2>
          <p className="about__intro">
            Life is complex. Between work, family, and personal commitments, managing daily tasks
            drains your most valuable resource — time. Padosi Pro exists to give it back.
          </p>
          <div className="about__points">
            {points.map((p) => (
              <div key={p.text} className="about-point">
                <div className="about-point__icon">{p.icon}</div>
                <p className="about-point__text">{p.text}</p>
              </div>
            ))}
          </div>
          <button
            className="btn-primary btn-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  )
}