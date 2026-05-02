export default function Tickets() {
  return (
    <div className="page">
      <p className="page__eyebrow">Book</p>
      <h1 className="page__title">Buy Tickets</h1>
      <p className="page__lead">Reserve your seats online and skip the queue at the door.</p>
      <form className="ticket-form">
        <label className="ticket-form__label">
          Movie
          <select className="ticket-form__select">
            <option>Stellar Drift</option>
            <option>The Last Kingdom</option>
            <option>Hollow House</option>
            <option>Rhythm &amp; Soul</option>
            <option>Family Chaos</option>
          </select>
        </label>
        <label className="ticket-form__label">
          Date
          <input className="ticket-form__input" type="date" />
        </label>
        <label className="ticket-form__label">
          Showtime
          <select className="ticket-form__select">
            <option>14:00</option>
            <option>16:30</option>
            <option>19:00</option>
            <option>21:30</option>
          </select>
        </label>
        <label className="ticket-form__label">
          Number of seats
          <input className="ticket-form__input" type="number" min="1" max="10" defaultValue="2" />
        </label>
        <button type="submit" className="btn btn--primary" style={{ marginTop: '0.5rem' }}>
          Reserve seats
        </button>
      </form>
    </div>
  );
}
