import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>
          {item.name} - ₹{item.price}
        </div>
      ))}
      <hr />
      <strong>Total: ₹{total}</strong>
    </div>
  );
}

export default Cart;
