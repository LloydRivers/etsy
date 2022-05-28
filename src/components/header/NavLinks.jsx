import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="home-sale">Shop Home Sales</Link>
        <Link to="jewelry">Jewelry</Link>
        <Link to="Clothing">Clothing</Link>
        <Link to="home-living">Home & Living</Link>
      </ul>
    </nav>
  );
}

export default NavBar;
