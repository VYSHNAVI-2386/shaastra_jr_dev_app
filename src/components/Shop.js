import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "Apple", price: 10 },
  { id: 2, name: "Banana", price: 5 }
];

function Shop() {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Shop</h2>
      {products.map(p => (
        <div key={p.id}>
          <span>{p.name} - ₹{p.price}</span>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Shop;
