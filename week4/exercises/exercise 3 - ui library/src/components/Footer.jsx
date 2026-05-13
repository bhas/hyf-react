import { useState } from 'react';
import {
  Table, TableHead, TableBody, TableRow, TableCell,
  IconButton, Badge,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const initialCart = [
  { id: 1, emoji: '🪴', name: 'Ceramic Planter',  price: 34.00 },
  { id: 2, emoji: '🕯️', name: 'Linen Candle Set', price: 27.50 },
  { id: 3, emoji: '🥶', name: 'Wabi Vase',         price: 48.00 },
];

// Bonus exercise
// TODO: Replace the table UI with MUI components:
// - <table>            → <Table> + <TableHead> + <TableBody> + <TableRow> + <TableCell>
// - + / − <button>s     → <IconButton> with <AddIcon> / <RemoveIcon>
// - ✕ <button>          → <IconButton> with <DeleteIcon>
// - the item count     → <Badge badgeContent={count}> wrapping a <ShoppingCartIcon>
export default function CartItems() {
  const [cart, setCart] = useState(initialCart.map(i => ({ ...i, qty: 1 })));

  function updateQty(id, delta) {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  }

  function remove(id) {
    setCart(prev => prev.filter(item => item.id !== id));
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="exercise">
      <h2>Exercise 6 — Table, IconButton, Badge</h2>
      <p>
        Convert this cart to use MUI <code>Table</code>, <code>IconButton</code>, and{' '}
        <code>Badge</code> on the cart icon below.
      </p>
      <hr />

      <Badge badgeContent={cart.length} color="primary" sx={{ mb: 2 }}>
        <ShoppingCartIcon />
      </Badge>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Subtotal</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.emoji} {item.name}</TableCell>
              <TableCell>€{item.price.toFixed(2)}</TableCell>
              <TableCell>
                <IconButton size="small" onClick={() => updateQty(item.id, -1)}><RemoveIcon fontSize="small" /></IconButton>
                {item.qty}
                <IconButton size="small" onClick={() => updateQty(item.id, +1)}><AddIcon fontSize="small" /></IconButton>
              </TableCell>
              <TableCell>€{(item.price * item.qty).toFixed(2)}</TableCell>
              <TableCell>
                <IconButton size="small" onClick={() => remove(item.id)}><DeleteIcon fontSize="small" /></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableBody>
          <TableRow>
            <TableCell colSpan={3}><strong>Total</strong></TableCell>
            <TableCell colSpan={2}><strong>€{total.toFixed(2)}</strong></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
