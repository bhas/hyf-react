export default function Contact() {
  return (
    <main className="page">
      <h1 className="page__title">Contact</h1>
      <p className="page__body">Fill in the form below and we will get back to you.</p>
      <form className="contact__form">
        <label className="contact__label">
          Name
          <input className="contact__input" type="text" placeholder="Your name" />
        </label>
        <label className="contact__label">
          Email
          <input className="contact__input" type="email" placeholder="you@example.com" />
        </label>
        <label className="contact__label">
          Message
          <textarea className="contact__textarea" placeholder="Your message..." />
        </label>
        <button className="contact__button" type="submit">Send message</button>
      </form>
    </main>
  );
}
