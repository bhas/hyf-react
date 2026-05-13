import { useState } from 'react';
import { Rating, TextField, Button, Snackbar, Alert, Stack, Typography } from '@mui/material';

// Exercise 4
// MUI components used:
// - <Rating>                   replaces the hand-built star buttons
// - <TextField multiline>      replaces <textarea>
// - <Button variant="contained"> replaces <button>
// - <Snackbar> + <Alert>       replace the success div
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
        <Stack spacing={2}>
          <div>
            <Typography component="legend">Your rating</Typography>
            <Rating value={rating} onChange={(_, newValue) => setRating(newValue)} />
          </div>
          <TextField
            id="review"
            label="Your review"
            placeholder="Share your experience..."
            multiline
            rows={4}
            fullWidth
          />
          <Button type="submit" variant="contained">Submit review</Button>
        </Stack>
      </form>

      <Snackbar
        open={submitted}
        autoHideDuration={4000}
        onClose={() => setSubmitted(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" onClose={() => setSubmitted(false)}>
          Review submitted! Thank you.
        </Alert>
      </Snackbar>
    </div>
  );
}
