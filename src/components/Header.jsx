import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <div className="header-title">Tuawhenua</div>

      <nav className="header-nav">
        <div className="nav-group">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/tangaroa">Tangaroa</NavLink>
          <NavLink to="/tane-mahuta">Tāne Mahuta</NavLink>
        </div>

        <div className="nav-divider" aria-hidden="true" />

        <div className="nav-group">
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/events">Events</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header;