import React, { useEffect } from "react";
import Description from "../components/Description";
import { projects } from "../data";
import ProjectContainer from "../components/UI/ProjectContainer";
import LaptopMobile from "../components/UI/LaptopMobile";

function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              navigation={data.URL}
            />
          </ProjectContainer>
        );
      })}
    </>
  );
}

export default Portfolio;
