const values = [
  { title: 'Openness',    description: 'We share our work, our knowledge, and our mistakes.' },
  { title: 'Simplicity',  description: 'We favour clear, readable solutions over clever ones.' },
  { title: 'Craft',       description: 'We care about the details and take pride in what we ship.' },
  { title: 'People',      description: 'We build for real users and treat colleagues with respect.' },
];

export default function Mission() {
  return (
    <div className="subpage">
      <h2 className="subpage__title">Our Mission</h2>
      <p className="subpage__body">
        We exist to make the web a better place — one component at a time.
      </p>
      <ul className="mission__values">
        {values.map(({ title, description }) => (
          <li key={title} className="mission__value">
            <strong>{title}</strong>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
