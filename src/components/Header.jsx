import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container container-flex">
        <Link to="/">
          <span className="logo-name">
            pictobook <i className="ri-polaroid-2-line camera-icon"></i>
          </span>
        </Link>
        <nav className="nav">
          <Link to="/artists">
            <span className="nav-link">Artists</span>
          </Link>
          <Link to="/cart">
            <i className="ri-shopping-cart-line ri-fw ri-2x cart-icon"></i>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
