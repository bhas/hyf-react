const upcoming = [
  { emoji: '🌊', title: 'Deep Blue',        genre: 'Thriller',    date: 'June 6'  },
  { emoji: '🤖', title: 'Iron Protocol',    genre: 'Sci-Fi',      date: 'June 13' },
  { emoji: '🏔️', title: 'Summit',           genre: 'Adventure',   date: 'June 20' },
  { emoji: '🎻', title: 'The Composer',     genre: 'Drama',       date: 'July 4'  },
];

export default function ComingSoon() {
  return (
    <div className="page">
      <p className="page__eyebrow">Movies</p>
      <h1 className="page__title">Coming Soon</h1>
      <p className="page__lead">Mark your calendar — these films are heading to CineMax soon.</p>
      <div className="movie-grid">
        {upcoming.map(film => (
          <div key={film.title} className="movie-card">
            <div className="movie-card__poster" style={{ background: '#1e1e1e' }}>{film.emoji}</div>
            <div className="movie-card__body">
              <p className="movie-card__title">{film.title}</p>
              <p className="movie-card__meta">{film.genre}</p>
              <span className="movie-card__rating">📅 {film.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
