import React from "react";
import "./PicTextSection.css";

function PicTextSection(props) {
  return (
    <div>
      {props.isLeftPic ? (
        <div className="row boxed-content-small align-items-center">
          <div className="col-6 d-flex justify-content-center">
            <img src={props.image} />
          </div>
          <div className="col-6 ">
            <h2 className="gradient-text gradient-underline">{props.title}</h2>
            <p className="black-thin-p-lh">{props.description}</p>
            {props.isButton ? (
              <a className="default-btn" src={props.buttonSrc}>
                <span>{props.buttonText}</span>
              </a>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      ) : (
        <div className="row boxed-content-small align-items-center">
          <div className="col-6 ">
            <h2 className="gradient-text gradient-underline">{props.title}</h2>
            <p className="black-thin-p-lh">{props.description}</p>
            {props.isButton ? (
              <a className="default-btn" src={props.buttonSrc}>
                <span>{props.buttonText}</span>
              </a>
            ) : (
              <span></span>
            )}
          </div>
          <div className="col-6 d-flex justify-content-center">
            <img src={props.image} />
          </div>
        </div>
      )}
    </div>
  );
}

export default PicTextSection;
