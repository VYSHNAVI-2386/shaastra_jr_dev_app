import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Shop</Link> | <Link to="/cart">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
