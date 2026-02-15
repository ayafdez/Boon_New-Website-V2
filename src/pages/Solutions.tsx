import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import './Solutions.css'

const Solutions = () => {
  return (
    <div className="page">
      <Navigation />
      <main>
        <section className="hero-alt">
          <div className="hero-bg-alt"></div>
          <div className="container hero-grid">
            <div className="hero-text">
              <p className="overline">BOON DOES MORE</p>
              <h1>One system. Configured to solve <em>your problems.</em></h1>
              <p>So if you're trying to improve headcount, scale executive onboarding, or find the best leadership development program for your new managers, Boon can help—because Boon sees what you need and turns it into actionable plans.</p>
              <div className="cta-group">
                <button className="btn-primary-lg">Book a Strategy Call</button>
                <button className="btn-secondary-lg">See Pricing Breakdown</button>
              </div>
            </div>
            <div className="hero-img"><div className="img-placeholder"></div></div>
          </div>
        </section>

        <section className="configurator-section">
          <div className="container">
            <p className="overline">SYSTEM CONFIGURATION</p>
            <h2>Map the system to the right <em>pressure point.</em></h2>
            <p className="lead">Boon is shaped like a capability platform, acting as the definitive answer to your organization's leadership development needs.</p>
            
            <div className="config-grid">
              <div className="config-sidebar">
                <h3>SELECT SCENARIO</h3>
                <ul className="scenario-list">
                  <li className="active">Budget guidance</li>
                  <li>New managers</li>
                  <li>Manager support</li>
                  <li>Exec team alignment</li>
                  <li>Cultural Baseline</li>
                </ul>
              </div>
              <div className="config-display">
                <div className="config-box">Configuration visualization would go here</div>
              </div>
            </div>
          </div>
        </section>

        <section className="dark-section">
          <div className="container">
            <p className="overline light">THE PROBLEM IN PRACTICE</p>
            <h2 className="light">Fragmented support is <em>no support at all.</em></h2>
            <p className="lead light">When you're juggling 3-4 vendors, everyone offers coaching. What's changing? Maybe everything. No one owns the system. And you can't show what's actually working.</p>
            
            <div className="problem-cards">
              {[
                {title: "Fragmented Continuity", desc: "Context gets lost when vendors don't talk. No one carries information forward."},
                {title: "Metrics of Interest", desc: "You track session counts. What actually improved? Unclear."},
                {title: "Manager Turnover", desc: "Managers get stuck. Overloaded. And development programs are disconnected from real help."}
              ].map((item, i) => (
                <div key={i} className="prob-card">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ecosystem-section">
          <div className="container">
            <p className="overline">THE SYSTEM ARCHITECTURE</p>
            <h2>Growth is a utility, <em>not an event.</em></h2>
            <p className="lead">Coaching, development, and teams—together. Continuous. Configured for you.</p>
            
            <div className="eco-grid">
              {[
                {title: 'Boon SCALE', subtitle: 'Democratized 1:1 Coaching', desc: '1:1 coaching for everyone in your org, not just leadership. On-demand access with coaches matched to role and context.'},
                {title: 'Boon GROW', subtitle: 'Leadership Development', desc: 'Cohort-based development for new and rising managers. Structured programs that build skills most managers never learn.'},
                {title: 'Boon EXEC', subtitle: 'Executive Coaching', desc: 'Confidential sparring for your senior leaders. A thinking partner for decisions that ripple across the organization.'},
                {title: 'Boon TOGETHER', subtitle: 'Collective Engagement', desc: 'Facilitated sessions for teams that need to align: offsites, department kickoffs, or moments of change.'}
              ].map((eco, i) => (
                <div key={i} className="eco-card">
                  <div className="eco-icon">⚡</div>
                  <h3>{eco.title}</h3>
                  <p className="subtitle">{eco.subtitle}</p>
                  <p>{eco.desc}</p>
                  <a href="#">See how it works →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="evolution-section">
          <div className="container">
            <p className="overline">THE SYSTEM ARCHITECTURE</p>
            <h2>How the system <em>evolves over time</em></h2>
            
            <div className="timeline">
              {[
                {title: 'Start because: Major organizational shift needs broad support', icon: '⬇️'},
                {title: 'Coaching strategies are noted and guidance changes', icon: '⬇️'},
                {title: 'You add programs without scrambling people', icon: '⬇️'},
                {title: 'Growth scales without disrupting anything out', icon: ''}
              ].map((step, i) => (
                <div key={i} className="timeline-item">
                  <div className="timeline-badge">{i+1}</div>
                  <div className="timeline-content">
                    <h4>{step.title}</h4>
                    {step.icon && <span className="arrow">{step.icon}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="expectations-section">
          <div className="container">
            <p className="overline">SETTING EXPECTATIONS</p>
            <h2>What to expect <em>next.</em></h2>
            
            <div className="expect-grid">
              {[
                {title: 'Book a Demo', desc: 'Schedule time with our team. We'll ask about your challenge and pressure points.'},
                {title: 'Get a Quote', desc: 'Based on your org size and needs, we'll map the system and provide transparent pricing.'},
                {title: 'See Results', desc: 'Most programs start showing adoption and impact data within the first 90 days.'}
              ].map((exp, i) => (
                <div key={i} className="expect-card">
                  <div className="step-num">{i+1}</div>
                  <h3>{exp.title}</h3>
                  <p>{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-final">
          <div className="cta-bg"></div>
          <div className="container center">
            <h2>Built for how people <em>actually grow.</em></h2>
            <p>Start with what's broken. Add as you scale. See what's working.</p>
            <div className="cta-group">
              <button className="btn-primary-lg">Book a Walkthrough</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Solutions
