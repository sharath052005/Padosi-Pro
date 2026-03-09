const steps = [
  { num: '01', icon: '📋', title: 'Request a Task', desc: 'Tell us what you need help with — from a quick errand to complex coordination.' },
  { num: '02', icon: '👤', title: 'Manager Assignment', desc: 'A dedicated lifestyle coordinator takes ownership of your request immediately.' },
  { num: '03', icon: '🤝', title: 'Vendor Coordination', desc: 'Trusted, verified service providers execute the task with full accountability.' },
  { num: '04', icon: '✅', title: 'Proof & Completion', desc: 'Task completion is verified with real-time updates and documented proof.' },
]

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag section-tag--light">How It Works</span>
          <h2 className="section-title section-title--light">Simple. Accountable. Reliable.</h2>
          <p className="section-subtitle section-subtitle--light">
            A 4-step workflow designed to remove friction from your daily life.
          </p>
        </div>

        <div className="process__steps">
          {steps.map((step, idx) => (
            <div key={step.num} style={{ display: 'contents' }}>
              <div className="process-step">
                <div className="process-step__num">{step.num}</div>
                <div className="process-step__icon-wrap">
                  <span className="process-step__icon">{step.icon}</span>
                </div>
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__desc">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="process-connector">
                  <div className="connector-line" />
                  <div className="connector-arrow">›</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}