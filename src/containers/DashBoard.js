import React, { useEffect, useState } from "react";
import api from "../lib/api";
import { Container, Card, Grid } from "semantic-ui-react";
import PairBox from "../components/pairBox";

const DashBoard = () => {
  const [data, setData] = useState({});
  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("DASHBOARD  DATA ", data.rates);
    if (data["rates"] !== undefined) {
      let myPairs = Object.keys(data.rates);
      setPairs([...myPairs]);
      console.log(pairs);
    }
  }, [data]);

  const getData = async () => {
    let interval = 10000;
    const myData = await api.send("/pairs", "GET", null);
    // console.log("Fetching pair data...");
    setData(myData);
    setInterval(async () => {
      const myData = await api.send("/pairs", "GET", null);
      // console.log("Fetching pair data...");
      setData(myData);
    }, interval);
  };

  return (
    <>
      <Container fluid>
        <h1>Welcome to the Forex DashBoard</h1>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {pairs.length > 0 &&
            pairs.map((pair, i) => (
              <PairBox title={pair} data={data.rates[pair]} key={i} />
            ))}
        </div>
      </Container>
    </>
  );
};

export default DashBoard;
