const colors = {
  light: { color: '#111111' },
  dark:  { color: '#ffffff' },
};

export default function Heading({ level = 2, isDark, children }) {
  const Tag = `h${level}`;
  return (
    <Tag style={isDark ? colors.dark : colors.light}>
      {children}
    </Tag>
  );
}
