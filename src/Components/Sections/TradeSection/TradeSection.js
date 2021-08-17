import React from "react";

import "./TradeSection.css";

import TradeFromAnywhere from "../../ReusableComponents/TradeFromAnywhere/TradeFromAnywhere";

function TradeSection(props) {
  return (
    <div className="trade-background">
      <TradeFromAnywhere title={props.title} />
    </div>
  );
}

export default TradeSection;
