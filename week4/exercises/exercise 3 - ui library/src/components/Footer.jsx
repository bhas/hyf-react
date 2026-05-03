import { useState } from 'react';

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

      <p>🛒 <strong>{cart.length}</strong> item{cart.length !== 1 ? 's' : ''} in cart</p>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.emoji} {item.name}</td>
              <td>€{item.price.toFixed(2)}</td>
              <td>
                <button onClick={() => updateQty(item.id, -1)}>−</button>
                {' '}{item.qty}{' '}
                <button onClick={() => updateQty(item.id, +1)}>+</button>
              </td>
              <td>€{(item.price * item.qty).toFixed(2)}</td>
              <td><button onClick={() => remove(item.id)}>✕</button></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}><strong>Total</strong></td>
            <td colSpan={2}><strong>€{total.toFixed(2)}</strong></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
