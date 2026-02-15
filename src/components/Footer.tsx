import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <h3 className="footer-logo">BOON</h3>
            <p className="footer-tagline">
              Coaching that scales with your people.
            </p>
            <div className="footer-social">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                in
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                𝕏
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">SOLUTIONS</h4>
              <Link to="/solutions">Overview</Link>
              <a href="#scale">Boon SCALE</a>
              <a href="#grow">Boon GROW</a>
              <a href="#exec">Boon EXEC</a>
              <a href="#together">Boon TOGETHER</a>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">WHY BOON</h4>
              <a href="#story">Our Story</a>
              <Link to="/for-coaches">For Coaches</Link>
              <Link to="/for-individuals">For Individuals</Link>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">LEARN HUB</h4>
              <Link to="/resources">Boon Blog</Link>
              <a href="#live">Boon Live</a>
              <a href="#podcast">Boon Podcast</a>
              <a href="#case-studies">Case Studies</a>
              <a href="#resources">Resources</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Boon. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
