import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.jsx';

const colors = {
  light: { color: '#111111' },
  dark:  { color: '#ffffff' },
};

export default function Heading({ level = 2, children }) {
  const { isDark } = useContext(ThemeContext);
  const Tag = `h${level}`;
  return (
    <Tag style={isDark ? colors.dark : colors.light}>
      {children}
    </Tag>
  );
}
