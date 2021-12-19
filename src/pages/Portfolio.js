import React from "react";
import Description from "../components/Description";
import { projects } from "../data";
import "./Portfolio.css";
import ProjectContainer from "../components/UI/ProjectContainer";
import LaptopMobile from "../components/UI/LaptopMobile";

function Portfolio() {
  return (
    <>
      {projects.map((data, i) => {
        return (
          <ProjectContainer key={i} index={i}>
            <LaptopMobile
              title={data.projectName}
              mac={data.macImage}
              mobile={data.mobileImage}
            />
            <Description
              title={data.projectName}
              description={data.projectDescription}
              buttonText={data.buttonText}
              index={i}
            />
          </ProjectContainer>
        );
      })}
    </>
  );
}

export default Portfolio;
