import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className="page">
      <Navigation />
      <main>
        <section className="hero">
          <div className="hero-bg"></div>
          <div className="container hero-grid">
            <div className="hero-text">
              <h1>The leadership development system <em>you won't outgrow.</em></h1>
              <p>One cohesive system for coaching, development, and workshops—built around your competencies with visibility you can actually use, not through a...</p>
              <div className="cta-group">
                <button className="btn-primary-lg">Book a Strategy Call</button>
                <button className="btn-secondary-lg">See How It Works</button>
              </div>
            </div>
            <div className="hero-img"><div className="img-placeholder"></div></div>
          </div>
        </section>

        <section className="logos-section">
          <div className="container">
            <p className="overline">TRUSTED BY 3 REPLICERS IN TECH</p>
            <div className="logos">
              {['LOVESAC', 'ATHENIAN', 'canopy', 'consensus', 'Circle', 'Make A-Wish', 'M', 'NCINO'].map((logo, i) => (
                <span key={i}>{logo}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-section">
          <div className="container">
            <p className="overline light">THE PROBLEM</p>
            <h2 className="light">Leadership development fails <em>for three predictable reasons.</em></h2>
            <div className="cards-3">
              {[
                {title: "You're managing four vendors, but it's one job", desc: "Fragmented support is no support at all. When coaching, cohorts, workshops, and exec support don't talk to each other, context gets lost. Adoption drops. And you can't show what's actually working."},
                {title: "Executives get support. Everyone else gets a workshop and a prayer.", desc: "The middle layer carries the load. First-time managers, directors stepping into VP roles, ICs ready to lead—they're scaling the business but getting no real development support."},
                {title: "Your CEO asks what's changing. You don't have an answer.", desc: "Most L&D programs track participation. That's not enough. You need to see competency growth, behavior change, and impact—without compromising confidentiality."}
              ].map((card, i) => (
                <div key={i} className="card-dark">
                  <div className="num">0{i+1}</div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                  <a href="#">See what works →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="system-section">
          <div className="container grid-2">
            <div>
              <p className="overline">BOON SYSTEM DIFFERENCE</p>
              <h2>What if leadership development worked <em>like a cohesive, customized system?</em></h2>
              <p className="lead">Most companies patch together 3-4 vendors for coaching, manager training, exec support, and workshops. Nothing connects. Context gets lost. Adoption drops. Impact becomes guesswork.</p>
              <ul className="check-list">
                <li>The system evolves as your leadership's needs change</li>
                <li>Create a culture where peers adopt based on a strong mandate</li>
                <li>Leaders are more willing to move on and continue confidential work</li>
              </ul>
            </div>
            <div className="diagram-box">
              <div className="diagram-header">
                <span>THE BOON APPROACH</span>
                <div className="tabs"><button className="active">Diagram View</button><button>List View</button></div>
              </div>
              <div className="diagram"></div>
            </div>
          </div>
        </section>

        <section className="products-section">
          <div className="container">
            <p className="overline">THE COMPLETE ECOSYSTEM</p>
            <h2>One leadership system. <em>Not four disconnected programs.</em></h2>
            <p className="lead">Most companies start with one program, often Grow or Scale, and add others as they see results. Every configuration is different. This is just one example.</p>
            <div className="cards-4">
              {[
                {name: 'Boon SCALE', tag: '1:1 coaching for everyone, not just execs', desc: 'Employees book sessions when they need them, with coaches matched to their role and context.'},
                {name: 'Boon GROW', tag: 'When your managers are underwater', desc: 'Cohort-based development for new and rising managers. The skills most first-time managers never learned.'},
                {name: 'Boon EXEC', tag: 'When the stakes are highest', desc: 'Confidential coaching for your senior leaders. A thinking partner for the decisions that ripple across the org.'},
                {name: 'Boon TOGETHER', tag: 'When the team needs to get on the same page', desc: 'Facilitated sessions for teams: offsites, kickoffs, moments of change. Builds shared language and momentum.'}
              ].map((p, i) => (
                <div key={i} className="card-product">
                  <div className="icon">🚀</div>
                  <h3>{p.name}</h3>
                  <p className="tag-line">{p.tag}</p>
                  <p>{p.desc}</p>
                  <a href="#">See Details →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="coaches-section">
          <div className="container">
            <p className="overline">BOON'S EXECUTIVE BENCH</p>
            <h2>Coaches who've <em>done the job before.</em></h2>
            <p className="lead">Former execs, functional leaders, and operators matched to the specific decisions your people are actually facing.</p>
            <div className="cards-3">
              {[
                {name: 'Anna Dutta', role: 'Former COO at Grow Therapy', bio: 'I help operators build the muscle to stop carrying decisions they shouldn't have to make alone.', tags: ['OPERATIONS', 'SCALING']},
                {name: 'Colin Cowherd', role: 'Former Head of Product at Knotel', bio: 'I coach GTM leaders learning to scale revenue without losing their human edge.', tags: ['PRODUCT', 'GTM']},
                {name: 'Meg Reuland', role: 'Former VP Engineering at Lumosity', bio: 'I coach leaders promoted for results who were never taught how to lead people.', tags: ['ENGINEERING', 'LEADERSHIP']}
              ].map((c, i) => (
                <div key={i} className="card-coach">
                  <div className="photo"></div>
                  <h3>{c.name}</h3>
                  <p className="role">{c.role}</p>
                  <p className="bio">{c.bio}</p>
                  <div className="tags">{c.tags.map((t,j) => <span key={j}>{t}</span>)}</div>
                </div>
              ))}
            </div>
            <p className="note">Match your team with coaches who've done the work. Over 500 vetted coaches filtered by industry, functional experience, and the challenges your team is facing.</p>
          </div>
        </section>

        <section className="data-section">
          <div className="container grid-2">
            <div className="dashboard-mockup">
              <div className="mock-header">IMPACT DASHBOARD</div>
              <div className="mock-chart">
                <div className="bar" style={{height:'60%'}}></div>
                <div className="bar" style={{height:'75%'}}></div>
                <div className="bar" style={{height:'85%'}}></div>
                <div className="bar" style={{height:'95%'}}></div>
              </div>
              <div className="mock-stats">
                <div><strong>89%</strong><span>Engagement</span></div>
                <div><strong>+42%</strong><span>Growth</span></div>
              </div>
            </div>
            <div>
              <p className="overline">BEFORE DATA AND IMPACTS</p>
              <h2>See what's actually <em>changing.</em></h2>
              <p className="lead">Track participation, progress, and competency growth across your leadership population—without compromising confidentiality. Most L&D teams can't answer "What's working?"</p>
              <ul className="check-list">
                <li>See adoption and engagement across cohorts and programs</li>
                <li>Track verified competency improvement over time</li>
                <li>Monitor session quality and coach effectiveness</li>
                <li>Get the data your exec team needs without surveillance</li>
              </ul>
              <a href="#" className="link-arrow">See the full dashboard →</a>
            </div>
          </div>
        </section>

        <section className="cta-final">
          <div className="cta-bg"></div>
          <div className="container center">
            <h2>Built to help people and teams <em>actually grow.</em></h2>
            <p>Start by fixing what's broken today, then adapt to solve new problems tomorrow. Your people grow. Their coaching grows with them.</p>
            <div className="cta-group">
              <button className="btn-primary-lg">Book a Strategy Call</button>
              <button className="btn-ghost-lg">See How It Works</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Homepage
