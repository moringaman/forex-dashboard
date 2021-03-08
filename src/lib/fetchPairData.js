const fetch = require("node-fetch");
const makeRequest = async (pair) => {
  console.log("MAKE RESPONSE");
  const options = {
    method: "GET",
    url: `https://www.freeforexapi.com/api/live?pairs=${pair}`,
    headers: {
      "Conent-Type": "application/json",
    },
  };

  try {
    const response = await fetch(options.url);
    console.log("CONTROLLER ", response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    return err;
  }
};

export default makeRequest;
