import React, { useState } from 'react';
import ChatBox from '../components/ChatBox';
import MessageInput from '../components/MessageInput';

export default function ChatPage() {
  const [messages, setMessages] = useState([]);

  // ✅ Only one clean definition
  const handleSendMessage = async (text) => {
    const userMessage = { role: 'user', text };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await fetch("http://localhost:3001/chat/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text })
      });

      const botReply = await res.json();  // { role: 'bot', text: '...' }
      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: '⚠️ GPT 응답 실패' }
      ]);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>🐤 Chatbot Page</h2>
      <ChatBox messages={messages} />
      <MessageInput onSend={handleSendMessage} />
    </div>
  );
}
