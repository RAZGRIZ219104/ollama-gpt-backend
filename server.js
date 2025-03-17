const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    console.log(req.body);
    const response = await axios.post("http://127.0.0.1:11434/api/generate", { model: "llama3.2:latest", prompt: req.body.prompt, stream: false });
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
