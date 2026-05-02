export default function Home({ onAddTicket }) {
  return (
    <>
      <div className="hero">
        <p className="hero__title">Cine<span>Max</span></p>
        <p className="hero__subtitle">Your premier destination for movies, screenings &amp; more</p>
        <div className="hero__actions">
          <a href="#" className="btn btn--primary">Now Showing</a>
          <a href="#" className="btn btn--outline">Coming Soon</a>
        </div>
      </div>
      <div className="page">
        <p className="page__eyebrow">This week</p>
        <h2 className="page__title">Featured Films</h2>
        <p className="page__lead">
          Discover the best movies playing at CineMax this week. From action blockbusters to
          indie gems, there is something for everyone.
        </p>
        <div className="movie-grid">
          {[
            { emoji: '🚀', title: 'Stellar Drift', genre: 'Sci-Fi', rating: '8.4' },
            { emoji: '🗡️', title: 'The Last Kingdom', genre: 'Action', rating: '7.9' },
            { emoji: '👻', title: 'Hollow House', genre: 'Horror', rating: '7.2' },
          ].map(film => (
            <div key={film.title} className="movie-card">
              <div className="movie-card__poster" style={{ background: '#1e1e1e' }}>{film.emoji}</div>
              <div className="movie-card__body">
                <p className="movie-card__title">{film.title}</p>
                <p className="movie-card__meta">{film.genre}</p>
                <span className="movie-card__rating">★ {film.rating}</span>
                <button className="movie-card__buy" onClick={onAddTicket}>+ Buy ticket</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
