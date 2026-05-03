import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.jsx';

export default function Navbar() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className="navbar"
      style={{ background: isDark ? '#0f3460' : '#ffffff', color: isDark ? '#e0e0e0' : '#333333' }}
    >
      <span className="navbar__logo">📰 My Blog</span>
      <button
        className="navbar__toggle"
        onClick={toggleTheme}
        style={{ background: isDark ? '#e94560' : '#4f46e5' }}
      >
        {isDark ? '☀️ Light mode' : '🌙 Dark mode'}
      </button>
    </nav>
  );
}
