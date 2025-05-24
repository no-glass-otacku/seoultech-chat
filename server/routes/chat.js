const express = require("express");
const router = express.Router();
const { askChatGPT } = require("../services/chatbotEngine");

router.post("/ask", async (req, res) => {
  const { question } = req.body;
  try {
    const answer = await askChatGPT(question);
    res.json({ role: 'bot', text: answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ role: 'bot', text: "Error occurred while talking to GPT." });
  }
});

module.exports = router;
