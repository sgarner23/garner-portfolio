import React from "react";
import { Link } from "react-scroll";

import downArrow from "../assets/downArrow.svg";
import "./Greeting.css";

function Greeting() {
  return (
    <section className="greeting-photo-container">
      <div className="greeting-message-container">
        <p className="greeting-message">
          Hey, I'm Stephen Garner and I love building web applications
        </p>
        <div className="about-me">
          <Link
            className="about-me-link"
            activeClass="active"
            to="about-me-scroll"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}
          >
            <img
              src={downArrow}
              alt="down arrow"
              className="down-arrow-about"
            />

            <p className="about-me-text">About Me</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Greeting;
