import React from "react";
import Description from "../components/Description";
import { projects } from "../data";
// import iouMac from "../assets/iouMac.png";
// import iouMobile from "../assets/iouMobile.png";
import "./Portfolio.css";
import ProjectContainer from "../components/UI/ProjectContainer";
import LaptopMobile from "../components/UI/LaptopMobile";

function Portfolio() {
  return (
    <>
      {projects.map((data, i) => {
        return (
          <ProjectContainer key={i}>
            <LaptopMobile mac={data.macImage} mobile={data.mobileImage} />
            <Description
              title={data.projectName}
              description={data.projectDescription}
              buttonText={data.buttonText}
            />
          </ProjectContainer>
        );
      })}
    </>
  );
}

export default Portfolio;
