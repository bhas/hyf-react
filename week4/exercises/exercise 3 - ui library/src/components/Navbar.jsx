export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar__logo">Lum<span>é</span></a>
      <ul className="navbar__links">
        <li><a href="#" className="navbar__link">Shop</a></li>
        <li><a href="#" className="navbar__link">About</a></li>
        <li><a href="#" className="navbar__link">Blog</a></li>
        <li><a href="#" className="navbar__cta">Cart (0)</a></li>
      </ul>
    </nav>
  );
}
