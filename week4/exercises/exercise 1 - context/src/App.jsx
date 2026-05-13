import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Page from './components/Page.jsx';
import { ThemeContext } from './contexts/ThemeContext.jsx';
import './index.css';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    setIsDark(prev => !prev);
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div
        className="app"
        style={{ background: isDark ? '#1a1a2e' : '#f0f2f5', color: isDark ? '#e0e0e0' : '#333333' }}
      >
        <Navbar />
        <Page />
      </div>
    </ThemeContext.Provider>
  );
}
