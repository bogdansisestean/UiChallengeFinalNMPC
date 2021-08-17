import React from "react";
import trade from "../../../../../Images/icons/Transfer.png";
import tradeImgTowSided from "../../../../../Images/icons/Double transfer.png"
import GradientSmallButton from "../../../../ReusableComponents/GradientSmallButton/GradientSmallButton";

function LatestExchanges(props) {
  return (
    <div className="single-exchange">
      <GradientSmallButton time={props.time}/>
      <p>
        {props.tradeFrom}
        <img src={trade} />
        {props.tradeTo}
      </p>
      <p className="border-bottom">1.16 BTC{" "} <img src={tradeImgTowSided} /> {" "}696152299929.23 NGN</p>
    </div>
  );
}

export default LatestExchanges;
