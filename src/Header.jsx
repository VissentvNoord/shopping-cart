import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cart }) => {

  return (
    <header>
      <div>

      </div>

      <div className="header-logo">
        <Link to="/">
          <h1>Shop</h1>
        </Link>
      </div>

      <div className="header-actions">
        <div className="cart-info">
          <Link to="/cart">
            <div className="shopping-cart">
            </div>
          </Link>
          <CartCount cart={cart} />
        </div>
      </div>
    </header>
  );
};

function CartCount({ cart }) {
  const cartCount = Object.keys(cart).length;
  if (cartCount <= 0)
    return;

  return (
    <div className="cart-count">
    <p>{cartCount}</p>
  </div>
  );
}

export default Header;