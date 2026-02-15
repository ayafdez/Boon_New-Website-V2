import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import './Shared.css'

const ForCoaches = () => {
  return (
    <div className="page">
      <Navigation />
      <main>
        <section className="hero-page">
          <div className="container hero-grid">
            <div>
              <p className="overline">FOR PRACTITIONERS</p>
              <h1>For coaches who've <em>done the work.</em></h1>
              <p className="hero-p">Boon is built by practitioners, for practitioners. We're looking for former operators, functional leaders, and execs who've been in the room when it matters.</p>
              <div className="cta-group">
                <button className="btn-primary-lg">Explore Boon Coaching</button>
                <button className="btn-secondary-lg">See Founding Standards</button>
              </div>
            </div>
            <div className="hero-img"><div className="img-placeholder"></div></div>
          </div>
        </section>

        <section className="simple-section">
          <div className="container">
            <p className="overline">COACH PROPOSITION</p>
            <h2>Your coaching, <em>amplified.</em></h2>
            <div className="feature-grid">
              {[
                {title: 'NO CHASING INVOICES', desc: 'All admin handled. Coaching is tracked, scheduled, paid automatically.'},
                {title: 'REAL-WORLD CONTEXT', desc: 'Get briefed on company-specific competencies. You coach the person and their context.'},
                {title: 'HIGH-LEVERAGE ENGAGEMENTS', desc: 'Work with leaders who are serious. Boon clients invest in real development.'}
              ].map((f, i) => (
                <div key={i} className="feature-box">
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section">
          <div className="container">
            <p className="overline light">COACHES AND REACH</p>
            <h2 className="light">Tools that extend <em>your reach.</em></h2>
            <div className="tool-grid">
              {[
                {name: 'Automated Scheduling', desc: 'Clients book directly. Calendar syncs. No back-and-forth.'},
                {name: 'Intake and Check-ins', desc: 'Pre-session context and post-session reflections built in.'},
                {name: 'Quality feedback onside', desc: 'See how your sessions land. Anonymous, aggregated feedback.'},
                {name: 'Continuous Quality', desc: 'Ongoing calibration with other coaches. Shared standards.'}
              ].map((tool, i) => (
                <div key={i} className="tool-card">
                  <h4>{tool.name}</h4>
                  <p>{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="simple-section">
          <div className="container center-content">
            <p className="overline">THE BENCH</p>
            <h2>One platform. <em>Many paths to impact.</em></h2>
            <p className="lead center">Boon supports multiple coaching modalities: 1:1 sessions, cohort facilitation, exec sparring, and team offsites.</p>
            <div className="icon-grid">
              {['SCALE', 'GROW', 'EXEC', 'TOGETHER'].map((item, i) => (
                <div key={i} className="icon-box">
                  <div className="big-icon">🎯</div>
                  <h4>Boon {item}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="image-section">
          <div className="container grid-2">
            <div className="section-img"><div className="img-placeholder"></div></div>
            <div>
              <p className="overline">THE VISION</p>
              <h2>Rigor meets real-world <em>experience.</em></h2>
              <ul className="bullet-list">
                <li>You've operated at scale</li>
                <li>You've made the hard calls</li>
                <li>You understand nuance</li>
                <li>You've led through ambiguity</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="alignment-section">
          <div className="container">
            <p className="overline">CLEAR ALIGNMENT</p>
            <h2><em>No games.</em></h2>
            <div className="align-grid">
              {[
                {label: 'Pay structure', val: 'Transparent. Competitive. Consistent.'},
                {label: 'Time commitment', val: 'Flexible. You decide your load.'},
                {label: 'Quality bar', val: 'High. Ongoing calibration.'},
                {label: 'Support model', val: 'You're not alone. Peer network included.'}
              ].map((a, i) => (
                <div key={i} className="align-row">
                  <span className="align-label">{a.label}</span>
                  <span className="align-val">{a.val}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="practitioners-section">
          <div className="container center-content">
            <p className="overline">BUILT BY PRACTITIONERS</p>
            <h2>Built by practitioners, <em>for practitioners.</em></h2>
            <p className="lead center">Boon was started by former operators who've seen both sides: the struggle to find real development support, and the challenge of delivering it at scale.</p>
          </div>
        </section>

        <section className="support-section">
          <div className="container">
            <p className="overline">SUPPORT</p>
            <h2>Get the support you need <em>to do your best work.</em></h2>
            <div className="support-grid">
              {[
                {name: 'Lauren Serota', role: 'COACH SUCCESS', note: 'Former Product Leader turned coach. Helps you navigate the platform.'},
                {name: 'Pia Juanita Kim', role: 'PAIRING AND MATCHING', note: 'Matches coaches to clients based on experience and context.'},
                {name: 'Garrett Gilbert', role: 'QUALITY OPERATIONS', note: 'Leads ongoing calibration and coach development.'},
                {name: 'Georgianna Rivera', role: 'COMMUNITY AND PRACTICE', note: 'Facilitates peer learning and case consultation.'}
              ].map((s, i) => (
                <div key={i} className="support-card">
                  <div className="support-avatar"></div>
                  <h4>{s.name}</h4>
                  <p className="support-role">{s.role}</p>
                  <p>{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-final">
          <div className="cta-bg"></div>
          <div className="container center">
            <h2>Do your best work, <em>supported.</em></h2>
            <p>Join a network of 500+ vetted coaches delivering real impact.</p>
            <button className="btn-primary-lg">Apply to Coach with Boon</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ForCoaches
