export default function Navbar({ isDark, onToggle }) {
  return (
    <nav
      className="navbar"
      style={{ background: isDark ? '#0f3460' : '#ffffff', color: isDark ? '#e0e0e0' : '#333333' }}
    >
      <span className="navbar__logo">📰 My Blog</span>
      <button
        className="navbar__toggle"
        onClick={onToggle}
        style={{ background: isDark ? '#e94560' : '#4f46e5' }}
      >
        {isDark ? '☀️ Light mode' : '🌙 Dark mode'}
      </button>
    </nav>
  );
}
