import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

function Button({ text, navigation }) {
  const navigate = useNavigate();

  const buttonClickHandler = () => {
    navigate(`/${navigation}`);
  };

  return (
    <button onClick={buttonClickHandler} className="cta-btn">
      {text}
    </button>
  );
}

export default Button;
