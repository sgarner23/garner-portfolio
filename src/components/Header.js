import React from "react";

import logo from "../assets/logo.svg";

import "./Header.css";
import NavLinks from "./NavLinks";

function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <NavLinks classes={"link"} />
    </div>
  );
}

export default Header;
