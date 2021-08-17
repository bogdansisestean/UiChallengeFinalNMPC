import React from "react";
import "./TradeTypeBox.css";

function TradeTypeBox(props) {
  return (
    <div className="trade-box-wrapper  ">
      <img className="d-flex justify-content-center icon-trade" src={props.iconSrc} />
      <h4 className="heading-trade d-flex justify-content-center icon-trade" >{props.title}</h4>
    </div>
  );
}

export default TradeTypeBox;
