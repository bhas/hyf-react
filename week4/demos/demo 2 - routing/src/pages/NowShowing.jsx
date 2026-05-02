const films = [
  { emoji: '🚀', title: 'Stellar Drift',     genre: 'Sci-Fi · 2h 14m',  rating: '8.4' },
  { emoji: '🗡️', title: 'The Last Kingdom',  genre: 'Action · 2h 02m',  rating: '7.9' },
  { emoji: '👻', title: 'Hollow House',       genre: 'Horror · 1h 48m',  rating: '7.2' },
  { emoji: '💃', title: 'Rhythm & Soul',      genre: 'Drama · 1h 55m',   rating: '8.1' },
  { emoji: '🤣', title: 'Family Chaos',       genre: 'Comedy · 1h 38m',  rating: '6.8' },
];

export default function NowShowing({ onAddTicket }) {
  return (
    <div className="page">
      <p className="page__eyebrow">Movies</p>
      <h1 className="page__title">Now Showing</h1>
      <p className="page__lead">Playing in our theatres right now. Book your seats before they sell out.</p>
      <div className="movie-grid">
        {films.map(film => (
          <div key={film.title} className="movie-card">
            <div className="movie-card__poster" style={{ background: '#1e1e1e' }}>{film.emoji}</div>
            <div className="movie-card__body">
              <p className="movie-card__title">{film.title}</p>
              <p className="movie-card__meta">{film.genre}</p>
              <span className="movie-card__rating">★ {film.rating}</span>              <button className="movie-card__buy" onClick={onAddTicket}>+ Buy ticket</button>            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
