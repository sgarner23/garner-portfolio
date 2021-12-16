import React from "react";
import Button from "./UI/Button";
import "./Connect.css";

function Connect() {
  return (
    <div className="home-connect-container">
      <p className="connect-text">Interested in connecting?</p>
      <div className="filler-div"></div>
      <div className="connect-border-line"></div>
      <Button text={"SOCIAL LINKS"} />
    </div>
  );
}

export default Connect;
