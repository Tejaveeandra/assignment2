import React from 'react';
import '../Css/Header.css';


const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
     
        <span className="logo-text">SRI CHAITANYA EDUCATIONAL INSTITUTIONS</span>
      </div>
      <div className="user-section">
        <div className="student-info">
          <span className="student-label">Student</span>
          <span className="student-id">1000178962</span>
          <span className="search-icon">🔍</span>
        </div>
        <div className="icons">
          <span className="icon messages">✉️<span className="badge">2</span></span>
          <span className="icon notifications">🔔</span>
        </div>
        <div className="profile">
         
          <span className="profile-id">HYD 256789</span>
          <span className="dropdown-arrow">▼</span>
        </div>
      </div>
    </header>
  );
};

export default Header;