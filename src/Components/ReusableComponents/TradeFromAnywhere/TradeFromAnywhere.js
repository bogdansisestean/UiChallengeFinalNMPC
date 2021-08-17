import React from "react";
import GradientTitleUnderlineCenter from "../GradientTitleUnderlineCenter/GradientTitleUnderlineCenter";
import TradeTypeBox from "../TradeTypeBox/TradeTypeBox";
import "./TradeFromAnywhere.css";
import btcIcon from "../../../Images/icons/bitcoin.svg";
import giftCards from "../../../Images/icons/Gift cards.svg";

function TradeFromAnywhere(props) {
  return (
    <div className="trade-from-anywhere-wrapper boxed-content-small">
      <GradientTitleUnderlineCenter title={props.title} />
      <div className="row ">
        <div className="col-6 d-flex justify-content-center">
          <TradeTypeBox title={"Bitcoin"} iconSrc={btcIcon} />
        </div>
        <div className="col-6 d-flex justify-content-center">
          <TradeTypeBox title={"Gift Cards"} iconSrc={giftCards} />
        </div>
      </div>
    </div>
  );
}

export default TradeFromAnywhere;
