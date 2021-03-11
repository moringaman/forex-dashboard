import React, { useEffect, useState } from "react";
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

const Chart = ({ symbol }) => {
  console.log("COMPONENTS ", symbol);
  return (
    <>
      <TradingViewEmbed
        widgetType={widgetType.ADVANCED_CHART}
        widgetConfig={{
          colorTheme: "dark",
          symbol: symbol,
          width: "50vw",
          height: "200%",
          // autoSize: true,
          interval: "60",
        }}
      />
    </>
  );
};

export default Chart;
