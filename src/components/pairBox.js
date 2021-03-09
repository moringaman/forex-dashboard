import React, { useState, useEffect, useRef } from "react";
import { Card, Button } from "semantic-ui-react";
import usePrevious from "../hooks/usePrevious";

const PairBox = ({ title, data }) => {
  const previousRate = usePrevious(data.rate) || 0.0;
  const previous = useRef(data.rate);

  const [prevRate, setPrevRate] = useState(0);
  const [bias, setBias] = useState(null);
  const [change, setChange] = useState(null);

  useEffect(() => {
    console.log(previous.current);
    setPrevRate(previous.current);
    const percChange = ((prevRate - data.rate) / prevRate) * 100;
    setChange(percChange);
    if (previous.current > data.rate) {
      setBias("negative");
    } else if (previous.current === data.rate) {
      setBias("neutral");
    } else {
      setBias("positive");
    }
  });

  console.log("COMP ", title, data);
  return (
    <Card color={bias === "negative" ? "red" : "green"} fluid>
      <Card.Content header={title} />
      <Card.Content extra>
        <div className="ui two buttons">
          <Button color={bias === "negative" ? "red" : "green"}>
            {`Previous: ${prevRate} - Last: ${data.rate}`}
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default PairBox;
