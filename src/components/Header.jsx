import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Me' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="navbar" role="navigation" aria-label="Primary navigation">
      <ul>
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  )
}

