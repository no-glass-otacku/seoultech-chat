require('dotenv').config();
const OpenAI = require('openai');

// ✅ NEW USAGE for OpenAI v4
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function askChatGPT(message) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      temperature: 0.7,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('❌ OpenAI API Error:', error.message);
    return 'GPT 응답 중 오류가 발생했습니다.';
  }
}

module.exports = { askChatGPT };
