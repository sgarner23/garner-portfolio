import React from "react";
import Button from "./UI/Button";
import "./Description.css";

function Description({ title, description, buttonText }) {
  return (
    <div className="description-wrapper">
      <div className="border-div">
        <h3 className="description-title">{title}</h3>
        <p className="description-text-p">{description}</p>
        <Button text={buttonText} className="go-to-portfolio" />
      </div>
    </div>
  );
}

export default Description;
