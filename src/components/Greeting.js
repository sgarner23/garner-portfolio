import React from "react";

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
          <img src={downArrow} alt="down arrow" className="down-arrow-about" />
          <p className="about-me-text">About Me</p>
        </div>
      </div>
    </section>
  );
}

export default Greeting;
