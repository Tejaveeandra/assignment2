import React from 'react';
import { House } from 'lucide-react';
import '../Css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
     
      <nav className="sidebar-nav">
        <div className="nav-section">
          <span className="section-title">Overview</span>
          <ul>
            <li className="nav-item active">
              <span className="icon"> <House /></span> Home
              <span className="badge new">NEW</span>
            </li>
            <li className="nav-item">
              <span className="icon">📊</span> Dashboard
            </li>
            <li className="nav-item">
              <span className="icon">📄</span> Reports
            </li>
          </ul>
        </div>
        <div className="nav-section">
          <span className="section-title">Operations</span>
          <ul>
            <li className="nav-item">
              <span className="icon">👥</span> Group Operations
              <span className="badge count">5</span>
            </li>
            <li className="nav-item">
              <span className="icon">📋</span> Application
            </li>
          </ul>
        </div>
        <div className="nav-section">
          <span className="section-title">Communication</span>
          <ul>
            <li className="nav-item">
              <span className="icon">💬</span> SMS
            </li>
          </ul>
        </div>
        <div className="nav-section">
          <span className="section-title">HR & Team</span>
          <ul>
            <li className="nav-item">
              <span className="icon">👤</span> HR Management
            </li>
          </ul>
        </div>
        <div className="nav-section">
          <span className="section-title">Analytics & Insights</span>
          <ul>
            <li className="nav-item">
              <span className="icon">📈</span> Reports
              <span className="badge alert">19</span>
            </li>
          </ul>
        </div>
      </nav>
      <div className="sidebar-footer">
        <span className="icon">📁</span>
        <span className="icon">📚</span>
        <span className="icon">❓</span>
      </div>
    </div>
  );
};

export default Sidebar;