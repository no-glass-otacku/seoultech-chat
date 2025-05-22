import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage.jsx';
import ChatPage from './pages/ChatPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chat" element={<ChatPage />} />

        {/* 기본 경로로 들어오면 챗봇 페이지로 리디렉트 */}
        <Route path="/" element={<Navigate to="/chat" replace />} />
        {/* 없는 경로는 /chat으로 리디렉트 */}
        <Route path="*" element={<Navigate to="/chat" replace />} />

      </Routes>
    </Router>
  );
}

export default App;
