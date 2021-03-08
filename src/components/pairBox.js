import React, { useState, useEffect, useRef } from "react";
import { Card } from "semantic-ui-react";
import usePrevious from "../hooks/usePrevious";

const PairBox = ({ title, data }) => {
  const previousRate = usePrevious(data.rate) || 0.0;
  const previous = useRef(data.rate);

  const [prevRate, setPrevRate] = useState(0);

  useEffect(() => {
    console.log(previous.current);
    setPrevRate(previous.current);
  });

  console.log("COMP ", title, data);
  return (
    <Card>
      <Card.Content header={title} />
      <Card.Content description={data.rate} />
      <Card.Content description={prevRate} />
    </Card>
  );
};

export default PairBox;
