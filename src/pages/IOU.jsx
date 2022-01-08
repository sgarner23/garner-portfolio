import React from "react";
import Description from "../components/Description";
import { projects } from "../data";
import ProjectDescriptionContainer from "../components/UI/ProjectDescriptionContainer";
import "./IOU.css";
import ProjectBackground from "../components/ProjectBackground";

function IOU() {
  console.log(projects[0]);
  return (
    <>
      <div className="iou-hero">
        <div className="hero-image-container">
          <div className="left-iou-hero"></div>
          <div className="right-iou-hero"></div>
        </div>
      </div>
      <ProjectDescriptionContainer>
        <Description
          title={projects[0].projectName}
          description={projects[0].projectDescription}
          techUsed={projects[0].techUsed}
          buttonText={"WATCH DEMO"}
        />
        <ProjectBackground description={projects[0].backgroundDescription} />
      </ProjectDescriptionContainer>
    </>
  );
}

export default IOU;
