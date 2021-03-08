import makeRequest from "../lib/fetchPairData";

export default async (req, res) => {
  try {
    const result = await makeRequest("USDJPY, USDCAD,EURUSD, GBPUSD,EURGBP");
    res.status(200).json(result);
  } catch (err) {
    res.status(201).json({ error: err });
  }
};
