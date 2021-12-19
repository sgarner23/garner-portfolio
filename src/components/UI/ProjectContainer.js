import React, { useState, useEffect } from "react";
import "./ProjectContainer.css";

const ProjectContainer = ({ children, index }) => {
  const [rowDirection, setRowDirection] = useState("");

  //Setting the layout pattern classes based on postion
  useEffect(() => {
    if (index % 2 !== 0) {
      setRowDirection("row-reverse");
    }
  }, []);

  return (
    <div className={`main-project-container ${rowDirection}`}>{children}</div>
  );
};

export default ProjectContainer;
