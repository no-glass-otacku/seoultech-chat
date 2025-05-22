import React, { useState } from 'react';
import UserMenu from '../components/UserMenu';

import ChatBox from '../components/ChatBox';
import MessageInput from '../components/MessageInput';

export default function ChatPage() {
  const [messages, setMessages] = useState([]);

  //[성현]MessageInput 컴포넌트에서 받은 유저의 입력을 컨트롤하는 부분이므로 AI 구현할 때 이부분을 수정하면 됩니다!
  const handleSendMessage = (text) => {
    //사용자 메시지 추가
    const userMessage = { role: 'user', text };

    // 백엔드 챗봇 응답 API와 연결하면 됨
    const botReply = {
      role: 'bot',
      text: `이건 AI가 대답해야 할 내용이에요: "${text}"`
    };

    // 유저와 봇 메시지 추가
    setMessages((prevMessages) => [...prevMessages, userMessage, botReply]);
    
    
  }; //[성현] 여기까지

  return (
    <div className="chat-page" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <UserMenu />  {/* 오른쪽 상단 메뉴 */}
      <h2>🐤 Chatbot Page</h2>
      <ChatBox messages={messages} />
      <MessageInput onSend={handleSendMessage} />
    </div>
  );
}
