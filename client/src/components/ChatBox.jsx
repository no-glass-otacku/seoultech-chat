import { useEffect, useRef } from 'react';

import ChatBox from '../components/ChatBox';
import MessageInput from '../components/MessageInput';
import { useState } from 'react';

export default function ChatPage() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="chat-page">
      <ChatBox messages={messages} />
      <MessageInput onSend={(msg) => {
        const newMessage = { role: 'user', text: msg };
        setMessages((prev) => [...prev, newMessage]);
      }} />
    </div>
  );
}

