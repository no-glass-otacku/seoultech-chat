import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' //스타일 수정필요
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
