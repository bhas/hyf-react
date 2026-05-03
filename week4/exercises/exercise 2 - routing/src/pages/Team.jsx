const members = [
  { name: 'Alice Chen',    role: 'Frontend Engineer',  joined: '2024' },
  { name: 'Bob Martens',   role: 'Backend Engineer',   joined: '2024' },
  { name: 'Carol Nduka',   role: 'UX Designer',        joined: '2025' },
  { name: 'David Larsen',  role: 'DevOps Engineer',    joined: '2025' },
];

export default function Team() {
  return (
    <div className="subpage">
      <h2 className="subpage__title">Our Team</h2>
      <ul className="team__list">
        {members.map(({ name, role, joined }) => (
          <li key={name} className="team__member">
            <strong>{name}</strong>
            <span>{role}</span>
            <span className="team__joined">Since {joined}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
