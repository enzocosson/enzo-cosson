import { NavLink } from 'react-router-dom'
import './Header.css'

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/work', label: 'Work' },
]

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header__avatar" aria-label="Home">
        <img
          src="/images/photo-de-profile.PNG"
          alt="Alex"
          width="40"
          height="40"
        />
      </NavLink>

      <nav className="header__nav" aria-label="Primary">
        {links.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `header__link${isActive ? ' header__link--active' : ''}`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <NavLink to="/contact" className="header__contact">
        Contact
      </NavLink>
    </header>
  )
}
