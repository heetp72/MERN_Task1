import React from "react";

function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-img" />
      <div className="cart-info">
        <h3>{item.name}</h3>
        <p>₹{item.price.toLocaleString()}</p>
        <p className="item-total">
          Total: <strong>₹{(item.price * item.quantity).toLocaleString()}</strong>
        </p>
        <div className="cart-actions">
          <button onClick={() => updateQuantity(item.id, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          <button className="delete-btn" onClick={() => removeItem(item.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
