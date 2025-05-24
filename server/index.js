// server/index.js
const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config(); // Load your .env file with OpenAI key

app.use(cors());
app.use(express.json());

const chatRouter = require("./routes/chat");
app.use("/chat", chatRouter);

app.listen(3001, () => {
  console.log("✅ Backend running at http://localhost:3001");
});
