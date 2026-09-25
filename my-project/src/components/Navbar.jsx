import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          ⚡ MyReactApp
        </Link>
        <ul className="nav-links">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/skills" 
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              Skills
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar