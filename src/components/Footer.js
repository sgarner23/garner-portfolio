import React from "react";
import logo from "../assets/logo.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import "./Footer.css";
import NavLinks from "./NavLinks";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-links-left">
          <img src={logo} alt="logo" className="footer-logo" />
          <NavLinks classes={"footer-l"} />
        </div>
        <div className="footer-links-right">
          <img src={github} alt="github" className="social-footer" />
          <img src={linkedin} alt="github" className="social-footer" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
