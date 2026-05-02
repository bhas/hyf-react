import { useState } from 'react';

// Exercise 4
// TODO: Replace the review form with MUI components:
// - the star buttons → <Rating>
// - <textarea>       → <TextField multiline rows={4}>
// - <button>         → <Button variant="contained">
// - success message  → <Snackbar> + <Alert>
export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="exercise">
      <h2>Exercise 4 — Rating, TextField, Snackbar</h2>
      <p>
        Convert this review form to use MUI{' '}
        <code>Rating</code>, <code>TextField</code> (multiline), and <code>Snackbar</code>.
      </p>
      <hr />

      <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
        <div className="field">
          <label>Your rating</label>
          <div>
            {[1, 2, 3, 4, 5].map(n => (
              <span
                key={n}
                onClick={() => setRating(n)}
                style={{ cursor: 'pointer', fontSize: '1.6rem' }}
              >
                {n <= rating ? '★' : '☆'}
              </span>
            ))}
          </div>
        </div>
        <div className="field">
          <label htmlFor="review">Your review</label>
          <textarea id="review" rows={4} placeholder="Share your experience..." />
        </div>
        <button type="submit">Submit review</button>
      </form>

      {submitted && (
        <div className="feedback-success" style={{ marginTop: '12px' }}>
          ✅ Review submitted! Thank you.
        </div>
      )}
    </div>
  );
}
