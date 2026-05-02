export default function ArticleCard({ article, isDark }) {
  const accent = isDark ? '#e94560' : '#4f46e5';

  return (
    <div
      className="card"
      style={{
        background: isDark ? '#16213e' : '#ffffff',
        color: isDark ? '#e0e0e0' : '#333333',
        boxShadow: isDark ? '0 4px 12px rgba(0,0,0,0.4)' : '0 2px 8px rgba(0,0,0,0.08)',
        borderLeft: `4px solid ${accent}`,
      }}
    >
      <div className="card__header">
        <h3 className="card__title" style={{ color: isDark ? '#ffffff' : '#111111' }}>
          {article.title}
        </h3>
        <span className="card__tag" style={{ background: accent }}>{article.tag}</span>
      </div>
      <p className="card__summary">{article.summary}</p>
      <small className="card__meta" style={{ color: isDark ? '#aaaaaa' : '#777777' }}>
        By {article.author} &middot; {article.date}
      </small>
    </div>
  );
}
