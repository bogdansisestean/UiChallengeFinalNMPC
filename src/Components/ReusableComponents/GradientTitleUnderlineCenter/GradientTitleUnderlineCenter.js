import React from "react";
import "./GradientTitleUnderlineCenter.css";

function GradientTitleUnderlineCenter(props) {
  return (
    <h2 className="gradient-text gradient-underline-center d-flex justify-content-center">{props.title}</h2>
  );
}

export default GradientTitleUnderlineCenter;
