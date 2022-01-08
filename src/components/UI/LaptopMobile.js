import React, { useState, useEffect } from "react";
import "./LaptopMobile.css";

function LaptopMobile({ title, mac, mobile }) {
  const [borderColor, setBorderColor] = useState("");

  useEffect(() => {
    switch (title) {
      case "Dev Finder":
        setBorderColor("dev-finder-color");
        break;

      case "Webscraper":
        setBorderColor("puppeteer");
        break;

      case "JavaScript Calculator":
        setBorderColor("calculator");
        break;

      case "Random User API":
        setBorderColor("random-user-generator");
        break;
    }
  }, []);

  return (
    <div className="project-image-wrapper">
      <div className={`mac-image-wrapper-2 ${borderColor}`}>
        <img
          className={mobile ? "mac-image" : "mac-image no-mobile"}
          src={mac}
          alt="main image"
        />
      </div>
      {mobile && <img className="mobile-image" src={mobile} />}
    </div>
  );
}

export default LaptopMobile;
