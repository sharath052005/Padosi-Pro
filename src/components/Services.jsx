const services = [
  { icon: '🛒', title: 'Errands & Daily Tasks', desc: 'Grocery pickups, courier handling, queue standing, document work, and more.', color: '#e8f5e9' },
  { icon: '🔧', title: 'Home Services', desc: 'Repairs, cleaning, plumbing, electrical, and ongoing home maintenance.', color: '#e3f2fd' },
  { icon: '✈️', title: 'Travel & Relocation Support', desc: 'Travel planning, logistics coordination, and end-to-end relocation assistance.', color: '#fce4ec' },
  { icon: '🩺', title: 'Senior Care Assistance', desc: 'Doctor appointment coordination, medicine reminders, and mobility support.', color: '#fff8e1' },
  { icon: '🎉', title: 'Event & Lifestyle Management', desc: 'Event coordination, guest logistics, and full vendor management.', color: '#f3e5f5' },
  { icon: '💻', title: 'Digital & Tech Assistance', desc: 'Device setup, Wi-Fi installation, software help, and online account setup.', color: '#e8eaf6' },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Everything Your Household Needs</h2>
          <p className="section-subtitle">
            150+ everyday tasks across 14 service categories — all managed through one dedicated coordinator.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <div key={s.title} className="service-card" style={{ '--card-bg': s.color }}>
              <div className="service-card__icon-wrap">
                <span className="service-card__icon">{s.icon}</span>
              </div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <div className="service-card__arrow">→</div>
            </div>
          ))}
        </div>

        <div className="services__stat-row">
          <div className="stat-pill"><strong>150+</strong> Tasks</div>
          <div className="stat-pill"><strong>14</strong> Categories</div>
          <div className="stat-pill"><strong>1</strong> Dedicated Manager</div>
          <div className="stat-pill"><strong>100%</strong> Proof-Based</div>
        </div>
      </div>
    </section>
  )
}