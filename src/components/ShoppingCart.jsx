import React, { useState } from "react";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import AddProductForm from "./AddProductForm";
import "./ShoppingCart.css";

function ShoppingCart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "HP Laptop",
      price: 59999,
      quantity: 1,
      image: "https://m.media-amazon.com/images/I/71S8U9VzLTL._SX679_.jpg",
    },
    {
      id: 2,
      name: "Sony Headphones",
      price: 2999,
      quantity: 2,
      image: "https://m.media-amazon.com/images/I/61IHi-F2N-L._SX522_.jpg",
    },
  ]);

  const updateQuantity = (id, delta) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity + delta > 0
          ? { ...item, quantity: item.quantity + delta }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const addProduct = (name, price, image) => {
    setCart([
      ...cart,
      { id: Date.now(), name, price: parseFloat(price), quantity: 1, image },
    ]);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
          <AddProductForm addProduct={addProduct} />
        </div>
        <OrderSummary subtotal={subtotal} />
      </div>
    </div>
  );
}

export default ShoppingCart;
