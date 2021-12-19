import React, { useState, useEffect } from "react";
import "./LaptopMobile.css";

function LaptopMobile({ title, mac, mobile }) {
  const [borderColor, setBorderColor] = useState("");

  useEffect(() => {
    if (title === "Dev Finder") {
      setBorderColor("dev-finder-color");
    }
  }, []);

  return (
    <div className="project-image-wrapper">
      <div className={`mac-image-wrapper-2 ${borderColor}`}>
        <img className="mac-image" src={mac} alt="iou tracker" />
      </div>
      <img className="mobile-image" src={mobile} alt="iou mobile" />
    </div>
  );
}

export default LaptopMobile;
