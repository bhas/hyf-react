export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <a href="#" className="navbar__logo">🎬 CineMax</a>
      <ul className="navbar__links">
        <li>
          <a href="#" className="navbar__link">Home</a>
        </li>
        <li className="navbar__dropdown">
          <a href="#" className="navbar__link">Movies ▾</a>
          <div className="navbar__dropdown-menu">
            <a href="#" className="navbar__dropdown-item">Now Showing</a>
            <a href="#" className="navbar__dropdown-item">Coming Soon</a>
          </div>
        </li>
        <li>
          <a href="#" className="navbar__link navbar__link--tickets">
            Tickets
            {cartCount > 0 && (
              <span className="navbar__badge">{cartCount}</span>
            )}
          </a>
        </li>
      </ul>
    </nav>
  );
}
