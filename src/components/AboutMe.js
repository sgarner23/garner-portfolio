import React from "react";
import "./AboutMe.css";

import Button from "./UI/Button";

function AboutMe() {
  return (
    <section className="about-me-section">
      <div className="portfolio-pic-container"></div>
      <div className="about-me-text-container">
        <div className="border-div">
          <h3 className="about-me-title">About Me</h3>
          <p className="about-me-text-p">
            I'm a full stack web developer looking for a new role in an exciting
            company. I'm committed to developing applications with clean modular
            code and learning as much as I can. When building applications in
            JavaScript, I mostly use React and Node, but I can adapt to whatever
            tools are required. I'm based in SLC, Utah, but I'm happy working
            remotely or relocating for the right opportunity. I have a B.S.
            degree from Weber State University and Web Development training from
            DevMountain. When I'm not coding, you'll usually find me running
            around with my three year old daughter! I'd love you to check out
            some of my work.
          </p>
          <Button text={"GO TO PORTFOLIO"} className="go-to-portfolio" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
