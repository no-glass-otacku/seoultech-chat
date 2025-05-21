// Chatbot logic integrating with ChatGPT API
// server/services/chatbotEngine.js

const { askChatGPT } = require("./openaiClient");
const { extractClauseInfo } = require("./regulationParser");

async function handleUserQuestion(question, userContext = {}) {
  const prompt = buildPrompt(question, userContext);
  const rawAnswer = await askChatGPT(prompt);
  const clauseInfo = extractClauseInfo(rawAnswer);

  return {
    answer: rawAnswer,
    clauseInfo,
  };
}
