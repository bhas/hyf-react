import { useState } from 'react';
import { TextField, Button, Alert, Stack } from '@mui/material';

// Exercise 1
// MUI components used:
// - <input>        → <TextField>
// - <textarea>     → <TextField multiline>
// - <button>       → <Button variant="contained">
// - the success div → <Alert severity="success">
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="exercise">
      <h2>Exercise 1 — TextField, Button, Alert</h2>
      <p>
        Convert this contact form to use MUI{' '}
        <code>TextField</code>, <code>Button</code>, and <code>Alert</code>.
      </p>
      <hr />

      {submitted && (
        <Alert severity="success" sx={{ mb: 2 }}>Thanks! We'll be in touch soon.</Alert>
      )}

      <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
        <Stack spacing={2}>
          <TextField id="name" label="Name" placeholder="Your name" fullWidth />
          <TextField id="email" label="Email" type="email" placeholder="you@example.com" fullWidth />
          <TextField id="message" label="Message" placeholder="How can we help?" multiline rows={4} fullWidth />
          <Button type="submit" variant="contained">Send message</Button>
        </Stack>
      </form>
    </div>
  );
}
