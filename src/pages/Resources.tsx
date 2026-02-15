import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import './Shared.css'

const Resources = () => {
  return (
    <div className="page">
      <Navigation />
      <main>
        <section className="hero-page hero-resources">
          <div className="container hero-grid">
            <div>
              <p className="overline">LEARN HUB</p>
              <h1>Resources for <em>growing leaders.</em></h1>
              <p className="hero-p">Insights, case studies, and practical tools from the Boon team and our network of operator-coaches.</p>
            </div>
            <div className="hero-img"><div className="img-placeholder"></div></div>
          </div>
        </section>

        <section className="resources-grid-section">
          <div className="container">
            <div className="resource-categories">
              {[
                {icon: '📰', label: 'INSIGHTS AND PERSPECTIVES', title: 'Boon Blog', desc: 'Articles on leadership, management and organizational development.', link: 'EXPLORE →'},
                {icon: '📊', label: 'IMPACT STORIES', title: 'Case Studies', desc: 'Real results from organizations using the Boon system.', link: 'EXPLORE →'},
                {icon: '🎙️', label: 'PODCAST', title: 'The Human Layer', desc: 'Conversations with operators', link: 'EXPLORE →'},
                {icon: '📹', label: 'EVENTS & WEBINARS', title: 'Boon Live', desc: 'Interactive sessions and live learning experience', link: 'EXPLORE →'},
                {icon: '📚', label: 'GUIDE & TOOLKITS', title: 'Resources', desc: 'Practical frameworks and tools for leadership development.', link: 'EXPLORE →'}
              ].map((cat, i) => (
                <div key={i} className="resource-card">
                  <div className="res-icon">{cat.icon}</div>
                  <p className="res-label">{cat.label}</p>
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                  <a href="#">{cat.link}</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Resources
