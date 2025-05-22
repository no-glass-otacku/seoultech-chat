import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [student, setID] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); 

  const handleLogin = (event) => {
    event.preventDefault(); // 새로고침 방지
    console.log('로그인 시도:', student, password);
    // 나중에 여기서 서버와 통신하면 됨

    // ✅ 로그인 성공했다고 가정하고 /chat 페이지로 이동
    navigate('/chat');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login page</h1>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '1rem' }}>
          <label>student number</label><br />
          <input
            type="student"
            value={student}
            onChange={(e) => setID(e.target.value)}
            placeholder="your student number"
            style={{ width: '100%', padding: '0.5rem' }}
            required
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>password</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter your password"
            style={{ width: '100%', padding: '0.5rem' }}
            required
          />
        </div>

        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Login
        </button>
      </form>
    </div>
  );
}
