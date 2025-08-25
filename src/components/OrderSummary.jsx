import React from "react";

function OrderSummary({ subtotal }) {
  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <p>Subtotal: ₹{subtotal.toLocaleString()}</p>
      <p>Shipping: <span className="free">Free</span></p>
      <h4>Total: ₹{subtotal.toLocaleString()}</h4>
      <button className="checkout-btn">Proceed to Buy</button>
    </div>
  );
}

export default OrderSummary;
