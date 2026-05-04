import { useState } from 'react';
import {
  RadioGroup, FormControlLabel, Radio,
  Checkbox,
  Select, MenuItem, FormControl, InputLabel,
  FormGroup, FormLabel, Stack,
} from '@mui/material';

// Exercise 2
// MUI components used:
// - <RadioGroup> + <FormControlLabel> + <Radio>  replace radio inputs
// - <Checkbox> + <FormControlLabel>             replaces the checkbox
// - <Select> + <MenuItem> inside <FormControl>  replaces <select>
export default function ProductFilters() {
  const [category, setCategory] = useState('all');
  const [inStock, setInStock] = useState(false);
  const [sortBy, setSortBy] = useState('low-high');

  return (
    <div className="exercise">
      <h2>Exercise 2 — RadioGroup, Checkbox, Select</h2>
      <p>
        Convert these product filters to use MUI{' '}
        <code>RadioGroup</code>, <code>Checkbox</code>, and <code>Select</code>.
      </p>
      <hr />

      <Stack direction="row" spacing={4} flexWrap="wrap">
        <FormControl>
          <FormLabel>Category</FormLabel>
          <RadioGroup value={category} onChange={e => setCategory(e.target.value)}>
            {['All', 'Plants', 'Candles', 'Vases', 'Baskets'].map(cat => (
              <FormControlLabel
                key={cat}
                value={cat.toLowerCase()}
                control={<Radio />}
                label={cat}
              />
            ))}
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel>Availability</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={inStock}
                  onChange={e => setInStock(e.target.checked)}
                />
              }
              label="In stock only"
            />
          </FormGroup>
        </FormControl>

        <FormControl sx={{ minWidth: 180 }}>
          <InputLabel>Sort by</InputLabel>
          <Select value={sortBy} label="Sort by" onChange={e => setSortBy(e.target.value)}>
            <MenuItem value="low-high">Price: low to high</MenuItem>
            <MenuItem value="high-low">Price: high to low</MenuItem>
            <MenuItem value="newest">Newest</MenuItem>
            <MenuItem value="best-rated">Best rated</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </div>
  );
}
