import React from "react";
import { Link } from "react-router-dom";
import "./NavLinks.css";

function NavLinks({ classes }) {
  return (
    <div className="header-links ">
      <Link to="/home" className={classes}>
        HOME
      </Link>
      <Link to="/portfolio" className={classes}>
        PORTFOLIO
      </Link>
      <Link to="/connect" className={classes}>
        CONNECT
      </Link>
    </div>
  );
}

export default NavLinks;
