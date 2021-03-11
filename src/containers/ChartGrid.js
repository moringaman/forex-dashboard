import React, { useEffect, useState } from "react";
import {
  TradingViewEmbed,
  tradingViewEmbed,
  widgetType,
} from "react-tradingview-embed";
import Chart from "../components/Chart";

const ChartGrid = () => {
  const [chartArray, setChartArray] = useState([]);

  const addChart = () => {
    setChartArray([...chartArray, chartArray.length + 1]);
  };

  const newChart = (e) => {
    console.log(e.target.value);
    const { value } = e.target;
    if (value !== "msg") {
      setChartArray([...chartArray, value]);
    }
  };

  useEffect(() => {
    console.log(chartArray);
  }, [chartArray]);

  return (
    <>
      <div
        style={{
          display: "Flex",
          flexFlow: "row wrap",
          flexGrow: 2,
          background: "rgba(0,0,0 )",
          minWidth: "100vw",
          minHeight: "60vh",
        }}
      >
        {/* <button */}
        {/*   onClick={() => addChart()} */}
        {/*   style={{ position: "absolute", zIndex: 3000 }} */}
        {/* > */}
        {/*   Add Chart */}
        {/* </button> */}
        <div style={{ position: "absolute", zIndex: 3000 }}>
          <select onChange={(e) => newChart(e)}>
            <option value="msg">Select Chart</option>
            <option value="USDCAD">USDCAD</option>
            <option value="EURJPY">EURJPY</option>
            <option value="GBPUSD">GBPUSD</option>
            <option value="EURGBP">EURGBP</option>
            <option value="EURUSD">EURUSD</option>
          </select>
        </div>

        {chartArray.length &&
          chartArray.map((chart, i) => (
            <div>
              <Chart symbol={chart} key={i} />
            </div>
          ))}
      </div>
    </>
  );
};

export default ChartGrid;
