import React from "react";
import LatestExchanges from "./LatestExchanges/LatestExchanges";
import "./Table.css";
import * as tableData from "./TableData";
import * as trades from "../../../../Constants/Trades/Trades";

function Table() {
  console.log(trades.default);
  return (
    <div className="tableWrapper boxed-content-small">
      <div className="talbeHeadingS row d-flex justify-content-center gradient-text">
        <div className="col-4">
          <h4>OUR RATES</h4>
        </div>
        <div className="col-4 ">
          <h4 className="d-flex justify-content-center">OUR RESERVES</h4>
        </div>
        <div className="col-4">
          <h4 className="d-flex justify-content-end">LATEST EXCHANGES</h4>
        </div>
      </div>
      <div className="row table-content">
        <div className="col-4">
          <div className="row">
            <div className="col-4">
              <div className="row">
                <div className="col-4">
                  <img src={tableData.default[0].ourRates.btc.icon.btcIcon} />
                </div>
                <div className="col-4">
                  <p>BTC</p>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-6">
                  <p>We Buy @</p>
                  <p>We Sell @</p>
                </div>
                <div className="col-6">
                  <p>
                    <bold>{tableData.default[0].ourRates.btc.weBuy}</bold>
                  </p>
                  <p>
                    <bold>{tableData.default[0].ourRates.btc.weSell}</bold>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="row">
                <div className="col-2">
                  <img src={tableData.default[0].ourRates.eth.icon.ethIcon} />
                </div>
                <div className="col-2">
                  <p>ETH</p>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-6">
                  <p>We Buy @</p>
                  <p>We Sell @</p>
                </div>
                <div className="col-6">
                  <p>{tableData.default[0].ourRates.eth.weBuy}</p>
                  <p>{tableData.default[0].ourRates.eth.weSell}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-4">
              <div className="row">
                <div className="col-4">
                  <img
                    src={
                      tableData.default[0].ourReserves.bankTransfer.icon
                        .bankIcon
                    }
                  />
                </div>
                <div className="col-4">
                  <p>Bank Transfer</p>
                </div>
              </div>
            </div>
            <div className="col-8">
              <p className="d-flex justify-content-end">NGN</p>
              <p className="d-flex justify-content-end">
                {tableData.default[0].ourReserves.bankTransfer.ngn}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="row">
                <div className="col-2">
                  <img src={tableData.default[0].ourRates.btc.icon.btcIcon} />
                </div>
                <div className="col-2">
                  <p>Bitcoin</p>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="row">
                <p className="d-flex justify-content-end">
                  {tableData.default[0].ourReserves.btc.quant}
                </p>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-2">
                  <img src={tableData.default[0].ourRates.eth.icon.ethIcon} />
                </div>
                <div className="col-2">
                  <p>Ethereum</p>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="row">
                <p className="d-flex justify-content-end">
                  {tableData.default[0].ourReserves.eth.quant}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 table-column">
          {trades.default.map((exchange) => (
            <LatestExchanges
              time={exchange.tradeTime}
              tradeFrom={exchange.tradeFrom}
              tradeTo={exchange.tradeTo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Table;
