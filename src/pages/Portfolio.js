import React from "react";
import Description from "../components/Description";
import { projects } from "../data";
import iouMac from "../assets/iouMac.png";
import iouMobile from "../assets/iouMobile.png";
import "./Portfolio.css";
import Footer from "../components/Footer";

function Portfolio() {
  return (
    <div className="iou-container">
      <div className="project-image-wrapper">
        <img className="mac-image" src={iouMac} alt="iou tracker" />
        <img className="mobile-image" src={iouMobile} alt="iou mobile" />
      </div>

      <Description
        title={projects[0].projectName}
        description={projects[0].projectDescription}
        buttonText={projects[0].buttonText}
      />
    </div>
  );
}

export default Portfolio;
