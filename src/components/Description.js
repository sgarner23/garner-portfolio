import React, { useState, useEffect } from "react";
import Button from "./UI/Button";
import "./Description.css";

function Description({
  title,
  description,
  buttonText,
  index,
  navigation,
  techUsed,
}) {
  const [pad, setPad] = useState("");

  //Setting the layout pattern classes based on postion
  useEffect(() => {
    if (index % 2 !== 0) {
      setPad("right-pad");
    }
  }, []);

  return (
    <div className={`description-wrapper ${pad}`}>
      <div className="border-div">
        <h3 className="description-title">{title}</h3>
        <p className="description-text-p">{description}</p>

        {techUsed && (
          <p className=" description-text-p tech-used">{techUsed}</p>
        )}
        <Button
          navigation={navigation}
          text={buttonText}
          className="go-to-portfolio"
        />
      </div>
    </div>
  );
}

export default Description;
