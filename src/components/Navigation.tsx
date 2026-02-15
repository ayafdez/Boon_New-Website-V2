import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navigation.css'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-wide nav-container">
        <Link to="/" className="logo">
          <span className="logo-text">BOON</span>
        </Link>
        
        <div className="nav-links">
          <Link 
            to="/solutions" 
            className={isActive('/solutions') ? 'active' : ''}
          >
            Solutions
          </Link>
          <Link 
            to="/for-coaches" 
            className={isActive('/for-coaches') ? 'active' : ''}
          >
            For Coaches
          </Link>
          <Link 
            to="/for-individuals" 
            className={isActive('/for-individuals') ? 'active' : ''}
          >
            For Individuals
          </Link>
          <Link 
            to="/resources" 
            className={isActive('/resources') ? 'active' : ''}
          >
            Resources
          </Link>
        </div>

        <div className="nav-actions">
          <button className="btn-text">Sign In</button>
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
