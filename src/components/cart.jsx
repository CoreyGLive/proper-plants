export default function Cart({ cartItems, onUpdate }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 && <p>No plants yet!</p>}
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <span className="emoji">{item.image}</span>
          <span>{item.name}</span>
          <button onClick={() => onUpdate(item.id, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onUpdate(item.id, 1)}>+</button>
        </div>
      ))}
    </div>
  );
}
