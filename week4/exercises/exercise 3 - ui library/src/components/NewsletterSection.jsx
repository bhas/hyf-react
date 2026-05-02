import { useState } from 'react';

const prefs = [
  { id: 'orders',     label: 'Order updates',   desc: 'Shipping and delivery notifications' },
  { id: 'offers',     label: 'Special offers',   desc: 'Discounts and promotions' },
  { id: 'newsletter', label: 'Newsletter',        desc: 'Weekly inspiration and new arrivals' },
  { id: 'reminders',  label: 'Cart reminders',   desc: 'Remind me about items left in my cart' },
];

// Exercise 5
// TODO: Replace the settings list with MUI components:
// - <ul> / <li>        → <List> + <ListItem> + <ListItemText>
// - <input checkbox>   → <Switch>
// - <hr>               → <Divider>
// - wrap each row      → <FormControlLabel>
export default function NotificationSettings() {
  const [enabled, setEnabled] = useState(
    { orders: true, offers: false, newsletter: true, reminders: false }
  );

  function toggle(id) {
    setEnabled(prev => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div className="exercise">
      <h2>Exercise 5 — Switch, List, Divider</h2>
      <p>
        Convert these settings to use MUI{' '}
        <code>Switch</code>, <code>List</code> with <code>ListItem</code>, and <code>Divider</code>.
      </p>
      <hr />

      <ul className="pref-list">
        {prefs.map((pref, i) => (
          <li key={pref.id}>
            <div className="pref-item">
              <div>
                <strong>{pref.label}</strong>
                <p style={{ margin: '2px 0 0', color: '#666', fontSize: '0.875rem' }}>{pref.desc}</p>
              </div>
              <input
                type="checkbox"
                checked={enabled[pref.id]}
                onChange={() => toggle(pref.id)}
              />
            </div>
            {i < prefs.length - 1 && <hr />}
          </li>
        ))}
      </ul>
    </div>
  );
}
