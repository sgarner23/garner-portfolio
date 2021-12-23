import React from "react";
import { aboutMe } from "../data";
import stephen1 from "../assets/stephen1.jpg";
import "./AboutMe.css";

import Description from "./Description";

function AboutMe() {
  return (
    <section id="about-me-scroll" className="about-me-section">
      <div className="portfolio-pic-wrapper">
        <img className="portfolio-pic" src={stephen1} alt="Stephen Garner" />
      </div>
      <Description
        title={aboutMe.title}
        description={aboutMe.description}
        buttonText={aboutMe.buttonText}
        navigation={"portfolio"}
      />
    </section>
  );
}

export default AboutMe;
