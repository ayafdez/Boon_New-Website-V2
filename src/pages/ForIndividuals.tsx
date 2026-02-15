import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import './Shared.css'

const ForIndividuals = () => {
  return (
    <div className="page">
      <Navigation />
      <main>
        <section className="hero-page hero-individuals">
          <div className="container hero-grid">
            <div>
              <p className="overline">PROFESSIONAL BUILDERS</p>
              <h1>Accelerate your growth <em>as a leader.</em></h1>
              <p className="hero-p">Boon is 1:1 coaching for leaders who are serious about growth. Not scripted advice. Not generic frameworks. Real coaching from someone who's done the job before.</p>
              <div className="cta-group">
                <button className="btn-primary-lg">Start Building Sessions</button>
                <button className="btn-secondary-lg">See Coaching Approach</button>
              </div>
            </div>
            <div className="hero-img"><div className="img-placeholder"></div></div>
          </div>
        </section>

        <section className="blue-section">
          <div className="container center-content">
            <p className="overline light">THE REALITY</p>
            <h2 className="light">Leadership doesn't come <em>with a manual.</em></h2>
            <p className="lead center light">You've been promoted for results. But leading people? Managing up? Navigating ambiguity? Nobody taught you that. And most "leadership training" is a checkbox, not real support.</p>
            <div className="reality-grid">
              {[
                'You don't have a roadmap for what you're doing next.',
                'Your manager is maxed out and can't help.',
                'Every situation feels unique. You're improvising.',
                'Networking and workshops give ideas, but not real coaching.'
              ].map((r, i) => (
                <div key={i} className="reality-box">{r}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="simple-section">
          <div className="container">
            <p className="overline">THE DIFFERENCE</p>
            <h2>A dedicated partner for the <em>moments that matter.</em></h2>
            <div className="partner-grid">
              {[
                {title: 'When you need support', desc: 'Book sessions as you need them. Not monthly check-ins. Real-time help.'},
                {title: 'Build Frameworks', desc: 'Not generic. Specific to you, your role, and the decisions you're facing.'},
                {title: 'Continuous, not episodic', desc: 'When you get promoted or switch roles, your coach comes with you.'}
              ].map((p, i) => (
                <div key={i} className="partner-card">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section">
          <div className="container">
            <p className="overline light">HOW BOON COACHING WORKS</p>
            <h2 className="light">Coaching that continues <em>between sessions.</em></h2>
            <div className="how-grid">
              {[
                {step: 'On-demand bookings', desc: 'Book sessions when you need them. Not forced cadence.'},
                {step: 'Contextual thinking', desc: 'Coaches see company competencies and your goals.'},
                {step: 'In-between support', desc: 'Message between sessions. Get unstuck in real-time.'},
                {step: 'Clear progression', desc: 'Track themes, patterns, growth over time.'}
              ].map((h, i) => (
                <div key={i} className="how-box">
                  <div className="how-num">{i+1}</div>
                  <h4>{h.step}</h4>
                  <p>{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="competencies-section">
          <div className="container grid-2">
            <div className="comp-img"><div className="img-placeholder"></div></div>
            <div>
              <p className="overline">REAL DEVELOPMENT</p>
              <h2>Competencies that drive <em>leadership effectiveness.</em></h2>
              <p className="lead">Work on what actually matters: delegation, feedback, managing up, building influence, navigating change.</p>
              <ul className="comp-list">
                <li>Emotional & Social Intelligence</li>
                <li>Different Communication</li>
                <li>Adaptable Thinking</li>
                <li>Ownership Dynamics</li>
                <li>Change Strategy</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="structure-section">
          <div className="container center-content">
            <p className="overline">BUILT TO SCALE</p>
            <h2>A structured path <em>designed for results.</em></h2>
            <div className="structure-grid">
              {[
                {title: 'Focus on Action', desc: 'Book a session. Work on what matters. Get unstuck.'},
                {title: 'Deliberate Practice', desc: 'Apply frameworks. Get feedback. Iterate.'},
                {title: 'Visible Progress', desc: 'See competency growth over time. Not just session counts.'}
              ].map((s, i) => (
                <div key={i} className="struct-box">
                  <div className="struct-icon">⚙️</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="confidential-section">
          <div className="container grid-2">
            <div>
              <p className="overline">SPACE TO BREATHE</p>
              <h2>Confidential by default. <em>Growth focused by design.</em></h2>
              <p className="lead">Your sessions are private. Your growth is tracked at a competency level—never surveillance.</p>
              <ul className="bullet-list">
                <li>Your manager doesn't see session notes.</li>
                <li>Competency data is anonymized and aggregated.</li>
                <li>You control what you share.</li>
                <li>Coaches adhere to strict confidentiality standards.</li>
              </ul>
            </div>
            <div className="conf-visual"><div className="img-placeholder"></div></div>
          </div>
        </section>

        <section className="start-section">
          <div className="container">
            <p className="overline">HABIT LOOPS</p>
            <h2>Start in <em>five minutes.</em></h2>
            <div className="start-grid">
              {[
                {title: 'Access the Portal', desc: 'Your company has Boon. Log in with your work email.'},
                {title: 'Match with a Coach', desc: 'Answer a few questions. We match you with someone who gets it.'},
                {title: 'Book Your First Session', desc: 'Pick a time. Show up. Start building.'}
              ].map((st, i) => (
                <div key={i} className="start-card">
                  <div className="start-badge">{i+1}</div>
                  <h3>{st.title}</h3>
                  <p>{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-final">
          <div className="cta-bg"></div>
          <div className="container center">
            <h2>Built for how people <em>actually grow.</em></h2>
            <p>Real coaching. Real impact. No scripts.</p>
            <button className="btn-primary-lg">Start Your First Session</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ForIndividuals
