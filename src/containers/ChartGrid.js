import React, { useEffect, useState } from "react";
import {
  TradingViewEmbed,
  tradingViewEmbed,
  widgetType,
} from "react-tradingview-embed";

const ChartGrid = () => {
  return (
    <>
      <div
        style={{
          display: "Flex",
          flexWrap: "wrap",
          flexGrow: 2,
          background: "rgba(0,0,0,  0.85)",
          height: "200%",
        }}
      >
        <div style={{ width: "50%" }}>
          <TradingViewEmbed
            widgetType={widgetType.ADVANCED_CHART}
            widgetConfig={{
              colorTheme: "dark",
              symbol: "GBPUSD",
              width: "100%",
              height: "200%",
            }}
          />
        </div>

        <div style={{ width: "50%" }}>
          <TradingViewEmbed
            widgetType={widgetType.ADVANCED_CHART}
            widgetConfig={{
              colorTheme: "dark",
              symbol: "EURJPY",
              width: "100%",
              height: "200%",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ChartGrid;
