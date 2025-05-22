import React, { useState } from 'react';
import '../styles/settings.css';

const dummyCourses = ['컴퓨터네트워크', '운영체제', '데이터베이스', '자바프로그래밍', 'AI개론'];

export default function SettingsModal({ onClose }) {
  const [query, setQuery] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  
  const filtered = dummyCourses.filter(course => course.includes(query) && !selectedCourses.includes(course));

  const addCourse = (course) => {
    setSelectedCourses([...selectedCourses, course]);
    setQuery('');
  };

  const removeCourse = (course) => {
    setSelectedCourses(selectedCourses.filter(c => c !== course));
  };

  const save = () => {
    localStorage.setItem('myCourses', JSON.stringify(selectedCourses));
    onClose();  // 모달 닫기
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>📚 수강 강의 설정</h2>

        <input
          type="text"
          placeholder="강의 검색"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {filtered.length > 0 && (
          <ul className="dropdown">
            {filtered.map(course => (
              <li key={course} onClick={() => addCourse(course)}>
                {course}
              </li>
            ))}
          </ul>
        )}

        <div className="selected-list">
          {selectedCourses.map(course => (
            <div key={course} className="course-chip">
              {course}
              <button onClick={() => removeCourse(course)}>×</button>
            </div>
          ))}
        </div>

        <div className="modal-actions">
          <button onClick={save}>저장</button>
          <button onClick={onClose}>닫기</button>
        </div>
      </div>
    </div>
  );
}
