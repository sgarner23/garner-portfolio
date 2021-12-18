import React from "react";
import "./LaptopMobile.css";

function LaptopMobile({ mac, mobile }) {
  return (
    <div className="project-image-wrapper">
      <div className="mac-image-wrapper-2">
        <img className="mac-image" src={mac} alt="iou tracker" />
      </div>
      <img className="mobile-image" src={mobile} alt="iou mobile" />
    </div>
  );
}

export default LaptopMobile;
