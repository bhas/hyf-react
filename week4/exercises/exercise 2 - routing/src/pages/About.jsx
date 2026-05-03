export default function About() {
  return (
    <main className="page">
      <h1 className="page__title">About Us</h1>
      <p className="page__body">
        We are a small team of developers passionate about building great web experiences with React.
      </p>
      <ul className="about__list">
        <li>Founded in 2024</li>
        <li>Fully remote team</li>
        <li>Open source contributors</li>
        <li>Lovers of clean, simple code</li>
      </ul>

      <nav className="about__subnav">
        <a href="#" className="about__sublink">Our Team</a>
        <a href="#" className="about__sublink">Our Mission</a>
      </nav>

      {/* Render the active nested page here */}
    </main>
  );
}
