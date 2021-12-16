import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="header-links">
        <Link to="/home" className="link">
          HOME
        </Link>
        <Link to="/portfolio" className="link">
          PORTFOLIO
        </Link>
        <Link to="/connect" className="link">
          CONNECT
        </Link>
      </div>
    </div>
  );
}

export default Header;
