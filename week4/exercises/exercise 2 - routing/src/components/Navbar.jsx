const links = [
  { label: 'Home'    },
  { label: 'About'   },
  { label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar__logo">🌐 My Site</span>
      <ul className="navbar__links">
        {links.map(({ label }) => (
          <li key={label}>
            <a href="#" className="navbar__link">{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
