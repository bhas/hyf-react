import { useState } from 'react';

// Exercise 1
// TODO: Replace the form elements with MUI components:
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
        <div className="feedback-success">✅ Thanks! We’ll be in touch soon.</div>
      )}

      <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your name" />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows={4} placeholder="How can we help?" />
        </div>
        <button type="submit">Send message</button>
      </form>
    </div>
  );
}
