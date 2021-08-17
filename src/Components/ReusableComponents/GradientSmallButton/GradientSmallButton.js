import React from "react";
import "./GradientSmallButton.css";

function GradientSmallButton(props) {
  return (
    <div className="d-flex justify-content-center">
      <button className="gradient-small-button">{props.time}</button>
    </div>
  );
}

export default GradientSmallButton;
