// Exercise 3
// TODO: Replace the profile UI with MUI components:
// - the avatar div  → <Avatar>
// - each tag span   → <Chip>
// - wrap a Chip     → <Tooltip title="Click to filter">
// - the outer div   → <Card> + <CardContent>
export default function ProfileCard() {
  return (
    <div className="exercise">
      <h2>Exercise 3 — Card, Avatar, Chip, Tooltip</h2>
      <p>
        Convert this profile to use MUI{' '}
        <code>Card</code>, <code>Avatar</code>, <code>Chip</code>, and <code>Tooltip</code>.
      </p>
      <hr />

      <div className="profile-card">
        <div className="avatar">SV</div>
        <div>
          <h3 style={{ margin: '0 0 4px' }}>Sophie van der Berg</h3>
          <p style={{ margin: '0 0 8px', color: '#666' }}>Interior designer · Amsterdam</p>
          <p style={{ margin: '0 0 12px' }}>
            Passionate about sustainable living and modern Scandinavian design.
          </p>
          <div className="tags">
            {['Sustainability', 'Minimalism', 'Plants', 'Ceramics'].map(tag => (
              <span key={tag} className="tag" title="Click to filter">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
