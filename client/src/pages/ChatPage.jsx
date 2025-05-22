import React, { useState } from 'react';
import ChatBox from '../components/ChatBox';
import MessageInput from '../components/MessageInput';

export default function ChatPage() {
  // ---
  const [messages, setMessages] = useState([]);

  const handleSend = (inputText) => {
    // 간단한 로컬 메시지 추가 (백엔드 연동 전)
    const newUserMessage = { role: 'user', text: inputText };
    const newBotMessage = { role: 'bot', text: '이건 봇의 응답입니다 (임시).' };

    setMessages((prev) => [...prev, newUserMessage, newBotMessage]);
  };
  // ---
  return (
    <div className="chat-page" style={{ border: '3px solid red' }}>
      <h1>Chat Page</h1>
      <ChatBox messages={messages} />
      <MessageInput onSend={handleSend} />
    </div>
  );
}
