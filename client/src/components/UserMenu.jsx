import React, { useState, useRef, useEffect } from 'react';
import '../styles/usermenu.css';
import SettingsModal from './SettingsModal';

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const [ShowSettings, setShowSettings] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  const toggleMenu = () => { setOpen(!open); };

  // 바깥 클릭 시 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="user-menu" ref={menuRef}>
      <div className="user-icon" onClick={toggleMenu}>
        🙋‍♂️
      </div>

      {open && (
        <div className="dropdown">

            <button onClick={() => {
                setOpen(false);
                setShowSettings(true);  // SettingsModal 상태 추가 필요
            }}>⚙️Setting</button>

            <button onClick={() => {
                localStorage.clear(); // 필요 시
                navigate('/login');
            }}>📤Logout</button>

        </div>
      )}
      
      {showSettings && (
        <SettingsModal onClose={() => setShowSettings(false)} />
      )}

    </div>
  );
}
