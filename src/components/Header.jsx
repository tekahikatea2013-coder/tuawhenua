import { NavLink } from 'react-router-dom'
import './Header.css'
import NavKowhaiwhai from "../assets/img/nav-kowhaiwhai-prototype.png"

function Header() {
  return (
    <header className="site-header">
      <div className="header-title">Tuawhenua</div>

      {/*<div
            className="nav-divider"
            style={{ backgroundImage: `url(${NavKowhaiwhai})` }}
            aria-hidden="true"
        />*/}

      <div className="nav-divider-2" aria-hidden="true" /> 

      <nav className="header-nav">
        <div className="nav-group">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/tangaroa">Tangaroa</NavLink>
          <NavLink to="/tane-mahuta">Tāne Mahuta</NavLink>
        </div>

    
    
        <div className="nav-group">
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/events">Events</NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header;