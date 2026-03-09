const icons = [
  { icon: '🛒', label: 'Errands' },
  { icon: '🔧', label: 'Home Services' },
  { icon: '✈️', label: 'Travel' },
  { icon: '🩺', label: 'Senior Care' },
]

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="hero">

      {/* Background Video */}
      <div className="hero__video-wrap">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/hero.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero__video-overlay" />
      </div>

      {/* Centered Content */}
      <div className="hero__content">
        <div className="hero__badge">
          <span className="badge-dot" />
          Lifestyle Management Platform
        </div>

        <h1 className="hero__headline">
          Your Personal <span className="headline-accent">Lifestyle Manager </span>
          for Everyday Life.
        </h1>

        <p className="hero__description">
          Padosi Pro provides a <strong>dedicated lifestyle manager</strong> who coordinates tasks,
          trusted service providers, and proof-based completion so families no longer deal with
          follow-ups, vendor problems, or time-consuming coordination.
        </p>

        <div className="hero__ctas">
          <button className="btn-primary btn-lg" onClick={() => scrollTo('services')}>
            Explore Services
          </button>
          <button className="btn-outline btn-lg" onClick={() => scrollTo('contact')}>
            Get Started <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>

    </section>
  )
}