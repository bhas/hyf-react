import { NavLink } from 'react-router-dom';

const links = [
  { label: 'Home',    to: '/'        },
  { label: 'About',   to: '/about'   },
  { label: 'Contact', to: '/contact' },
];

function navLinkClass({ isActive }) {
  // isActive is a boolean from NavLink that tells us if the link is active.
  // we use it to conditionally apply the 'active' class to the link, which will style it differently when it's active.
  return isActive ? 'navbar__link active' : 'navbar__link';
}

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar__logo">🌐 My Site</span>
      <ul className="navbar__links">
        {links.map(({ label, to }) => (
          <li key={label}>
            <NavLink
              to={to}
              end
              className={navLinkClass}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
