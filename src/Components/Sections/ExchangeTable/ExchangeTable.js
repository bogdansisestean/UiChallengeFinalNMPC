import React from "react";
import "./ExchangeTable.css";
import Table from "./Table/Table";

function ExchangeTable() {
  return (
    <div className="gradient-background">
      <div className="background-wave2-top"></div>
      <Table />
      <div className="background-wave2-bottom"></div>
    </div>
  );
}

export default ExchangeTable;
