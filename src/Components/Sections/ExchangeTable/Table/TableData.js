import btcIcon from "../../../../Images/icons/bitcoin.svg";
import ethIcon from "../../../../Images/icons/Eth.svg";
import bankIcon from "../../../../Images/icons/bank-building.svg";

const tableData = [
  {
    ourRates: {
      btc: {
        icon: { btcIcon },
        weBuy: "₦350/$",
        weSell: "₦370/$",
      },
      eth: {
        icon: { ethIcon },
        weBuy: "₦345/$",
        weSell: "₦370/$",
      },
    },
    ourReserves: {
      bankTransfer: {
        icon: { bankIcon },
        ngn: "#3452030300303.24/$",
      },
      btc: {
        icon: { btcIcon },
        quant: "399.98 BTC",
      },
      eth: {
        icon: { ethIcon },
        quant: "1000.00 ETH",
      },
    },
  },
];

export default tableData;
