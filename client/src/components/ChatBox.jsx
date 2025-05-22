//대화창
import React, { useEffect, useRef } from 'react';
import '../styles/chat.css';

export default function ChatBox({ messages }) {

    const boxRef = useRef();

  useEffect(() => {
    boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-box" ref={boxRef}>
      {messages.length === 0 ? (
        <p style={{ color: '#888' }}>Let's start talk!</p>
      ) : (
        messages.map((msg, index) => (
          <div
            key={index}
            className={`msg-container ${msg.role === 'user' ? 'user' : 'bot'}`}
          >
            <div className="avatar">
            {msg.role === 'user' ? '🙋‍♂️' : '🐥'}
            </div>

            <div className="bubble">
            {msg.text}
            </div>

          </div>
        ))
      )}
    </div>
  );
}
