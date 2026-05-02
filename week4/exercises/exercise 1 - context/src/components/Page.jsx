import ArticleCard from './ArticleCard.jsx';

const articles = [
  {
    id: 1,
    title: 'Getting Started with React',
    summary:
      'Learn the basics of React and build your first component. We cover JSX, props, and how the virtual DOM works.',
    author: 'Alice',
    date: 'April 10, 2025',
    tag: 'Beginner',
  },
  {
    id: 2,
    title: 'Understanding React Hooks',
    summary:
      'Hooks let you use state and other React features inside function components. Say goodbye to class components!',
    author: 'Bob',
    date: 'April 18, 2025',
    tag: 'Intermediate',
  },
  {
    id: 3,
    title: 'React Context Explained',
    summary:
      'Context provides a way to share values across the component tree without passing props at every level.',
    author: 'Carol',
    date: 'April 25, 2025',
    tag: 'Intermediate',
  },
];

export default function Page({ isDark }) {
  const accent = isDark ? '#e94560' : '#4f46e5';

  return (
    <main className="page">
      <h2
        className="page__heading"
        style={{ color: isDark ? '#e0e0e0' : '#333333', borderBottom: `2px solid ${accent}` }}
      >
        Latest Articles
      </h2>
      <div className="page__grid">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} isDark={isDark} />
        ))}
      </div>
    </main>
  );
}
