import React from "react";
import logo from "../assets/logo.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import "./Footer.css";
import NavLinks from "./NavLinks";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-links-left">
          <img src={logo} alt="logo" className="footer-logo" />
          <NavLinks classes={"footer-l"} />
        </div>
        <div className="footer-links-right">
          <a
            href="https://github.com/sgarner23"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github" className="social-footer" />
          </a>
          <a
            href="https://www.linkedin.com/in/stephen-garner-682357b7/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="github" className="social-footer" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
