import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
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

      <div className="header__actions">
        <ThemeToggle />
        <div className="header__cv-wrapper">
          <a
            href="/cv/cv-enzo-cosson.pdf"
            download
            className="header__cv"
          >
            <span>CV</span>
            <svg
              className="header__cv-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
          <div className="header__cv-preview">
            <img
              src="/cv/cv-enzo-cosson.png"
              alt="Aperçu du CV"
              loading="lazy"
            />
          </div>
        </div>
        <NavLink to="/contact" className="header__contact">
          Contact
        </NavLink>
      </div>
    </header>
  )
}
