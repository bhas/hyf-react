import { createContext } from 'react';

// We provide the toggleTheme function that components can call to change the theme, but we don't implement it here. 
// It is provided by the App
export const ThemeContext = createContext({ isDark: false, toggleTheme: () => {} });