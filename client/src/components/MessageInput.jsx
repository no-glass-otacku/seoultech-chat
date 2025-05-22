//사용자 입력창 + 전송 버튼
import React, { useState } from 'react';

export default function MessageInput({ onSend }) {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.trim() === '') return; //앞뒤 공백 제거 & 입력값 없을때 그냥 종료료

    onSend(text);         // 부모(ChatPage)로 메시지 전달
    setText('');          // 입력창 초기화
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="write a message..."
        style={{
          flex: 1,
          padding: '0.5rem',
          borderRadius: '4px 0 0 4px',
          border: '1px solid #ccc'
        }}
      />

      <button
        type="submit"
        style={{
          padding: '0.5rem 1rem',
          border: 'none',
          backgroundColor: '#ffa500',
          color: 'white',
          borderRadius: '0 4px 4px 0'
        }}
      >
        ⬇️
      </button>
    </form>
  );
}
