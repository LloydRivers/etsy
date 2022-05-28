import React from "react";
import NavBar from "./NavLinks";
import HeaderSearch from "./HeaderSearch";
function Header() {
  return (
    <>
      <header>
        <HeaderSearch />
        <NavBar />
      </header>
    </>
  );
}

export default Header;
