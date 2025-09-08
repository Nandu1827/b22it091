const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/shorten", async (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ error: "Missing url parameter" });
  }
  try {
    const response = await axios.get(
      `https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(url)}`
    );
    res.json(response.data);
  } catch (error) {
    console.error(error.response ? error.response.data : error.message); 
    res.status(500).json({ error: "Failed to shorten URL" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
