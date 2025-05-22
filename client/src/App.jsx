import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage.jsx';
import ChatPage from './pages/ChatPage.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chat" element={<ChatPage />} />
        
        {/* 기본 경로 "/"로 접속하면 /login으로 리디렉트 */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* 그 외의 잘못된 경로도 /login으로 보냄 */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

