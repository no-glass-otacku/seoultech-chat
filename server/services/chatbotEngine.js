// Chatbot logic integrating with ChatGPT API
const handleSendMessage = async (text) => {
  const userMessage = { role: 'user', text };
  setMessages((prev) => [...prev, userMessage]);

  try {
    const res = await fetch("http://localhost:3001/chat/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: text })
    });
    const botReply = await res.json();
    setMessages((prev) => [...prev, botReply]);
  } catch (err) {
    console.error(err);
    setMessages((prev) => [
      ...prev,
      { role: 'bot', text: '⚠️ Error fetching GPT response.' }
    ]);
  }
};
