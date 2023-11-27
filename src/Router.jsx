import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import App from "./App";
import Cart from "./Cart";
import CartData from "./components/cart/CartData";

const AppRouter = () => {
  const {cart, addItem, setCount} = CartData(); 

  return (
    <Router>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<App addItem={addItem} />} />
        <Route path="cart" element={<Cart cart={cart} setCount={setCount} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;