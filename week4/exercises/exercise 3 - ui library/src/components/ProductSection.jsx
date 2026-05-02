import { useState } from 'react';

// Exercise 2
// TODO: Replace the filter controls with MUI components:
// - radio inputs    → <RadioGroup> + <FormControlLabel> + <Radio>
// - checkbox        → <Checkbox> + <FormControlLabel>
// - <select>        → <Select> + <MenuItem> inside a <FormControl>
export default function ProductFilters() {
  const [category, setCategory] = useState('all');
  const [inStock, setInStock] = useState(false);

  return (
    <div className="exercise">
      <h2>Exercise 2 — RadioGroup, Checkbox, Select</h2>
      <p>
        Convert these product filters to use MUI{' '}
        <code>RadioGroup</code>, <code>Checkbox</code>, and <code>Select</code>.
      </p>
      <hr />

      <div className="filters">
        <fieldset>
          <legend>Category</legend>
          {['All', 'Plants', 'Candles', 'Vases', 'Baskets'].map(cat => (
            <label key={cat} className="radio-label">
              <input
                type="radio"
                name="category"
                value={cat.toLowerCase()}
                checked={category === cat.toLowerCase()}
                onChange={() => setCategory(cat.toLowerCase())}
              />
              {cat}
            </label>
          ))}
        </fieldset>

        <fieldset>
          <legend>Availability</legend>
          <label className="radio-label">
            <input
              type="checkbox"
              checked={inStock}
              onChange={e => setInStock(e.target.checked)}
            />
            In stock only
          </label>
        </fieldset>

        <fieldset>
          <legend>Sort by</legend>
          <select>
            <option>Price: low to high</option>
            <option>Price: high to low</option>
            <option>Newest</option>
            <option>Best rated</option>
          </select>
        </fieldset>
      </div>
    </div>
  );
}
