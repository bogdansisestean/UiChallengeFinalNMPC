import React from "react";
import "./FirstSection.css";

function FirstSection(props) {
  return (
    <div className="gradient-background background-wave fh-section">
      <div className="row boxed-content-small align-items-center">
        <div className="col-6">
          <h2>{props.title}</h2>
          <p className="white-thin-p">{props.description}</p>
          {props.isButton ? (
            <a className="white-btn" src={props.buttonSrc}>
              <span className=" gradient-text">{props.buttonText}</span>
            </a>
          ) : (
            <span></span>
          )}
        </div>
        <div className="col-6 d-flex justify-content-center">
          <img src={props.image} />
        </div>
      </div>
      {/* <img className="bottom-align" src={wave1} /> */}
    </div>
  );
}

export default FirstSection;
