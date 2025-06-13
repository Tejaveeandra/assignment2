import React, { useState } from 'react';

import email from '../../Images/email.png';
import phone from '../../Images/phone.png';
import avatar from '../../Images/avatar.png';
import "../Css/Profile.css";
// import StudentInfo from './StudentInfo';
 
const Profile = () => {
  const [activeTab, setActiveTab] = useState();
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
 
  const defaultData = {
    fullName: 'Full Name',
    gender: 'Male',
    parentName: 'Full Name',
    className: 'JR_Intermediate',
    sectionName: 'Not Allowed',
    courseName: 'ICON',
    courseBadge: 'MPC',
  };
 
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
 
  return (
    <section>
      {(showPhonePopup || showEmailPopup) && <div className="overlay"></div>}
 
      <div className="wholeProfile">
        <div className="Profile">
          <h1>Profile</h1>
          <div className="profile-details">
            <img src={avatar} alt="Profile Avatar" className="avatar" />
            <div className="info">
              <h3>{defaultData.fullName}</h3>
              <p>{defaultData.gender}</p>
              <div className="info-row">
                <div className="info-item">
                  <p className="label">Parent Name</p>
                  <p className="data">{defaultData.parentName}</p>
                </div>
                <div className="info-item-course">
                  <p className="label">Course Name</p>
                  <p className="data">{defaultData.courseName}</p>
                </div>
              </div>
              <div className="info-row">
                <div className="info-item">
                  <p className="label">Class Name</p>
                  <p className="data">{defaultData.className}</p>
                </div>
                <div className="info-item">
                  <p className="label">Section Name</p>
                  <p className="data">{defaultData.sectionName}</p>
                </div>
              </div>
              <div className="contact-icons">
                <p className="course-badge">{defaultData.courseBadge}</p>
                <div className="contact-icon-wrapper">
                  <img
                    src={email}
                    alt="Email Icon"
                    className="contact-icon-mail"
                    onMouseEnter={() => setShowEmailPopup(true)}
                    onMouseLeave={() => setShowEmailPopup(false)}
                  />
                  {showEmailPopup && (
                    <div className="contact-popup email-popup">
                      <div className="contact-item">
                        <span className="contact-label">Father Email</span>
                        <span className="contact-data">xxxxxxfirstname@gmail.com</span>
                      </div>
                      <div className="contact-item">
                        <span className="contact-label">Mother Email</span>
                        <span className="contact-data">xxxxxxfirstname@gmail.com</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="contact-icon-wrapper">
                  <img
                    src={phone}
                    alt="Phone Icon"
                    className="contact-icon-phone"
                    onMouseEnter={() => setShowPhonePopup(true)}
                    onMouseLeave={() => setShowPhonePopup(false)}
                  />
                  {showPhonePopup && (
                    <div className="contact-popup">
                      <h4>Student Contact</h4>
                      <div className="contact-item">
                        <span className="contact-label">Father Contact</span>
                        <span className="contact-data">+91-XXXXXXX210</span>
                      </div>
                      <div className="contact-item">
                        <span className="contact-label">Mother Contact</span>
                        <span className="contact-data">+91-XXXXXXX210</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="finances-info">
          <div className="student-finances">
            <div className="student-finances-text">
              <h1>Student Finances</h1>
              <p>Manage Student-related Financial Transactions, including Fees, Refunds, And Other Monetary Activities.</p>
            </div>
            <div className="student-finances-buttons">
              <button
                className={`finance-button ${activeTab === 'Student Details' ? 'active' : ''}`}
                onClick={() => handleTabClick('Student Details')}
              >
                Student Details
              </button>
              <button
                className={`finance-button ${activeTab === 'Fee' ? 'active' : ''}`}
                onClick={() => handleTabClick('Fee')}
              >
                Fee
              </button>
              <button
                className={`finance-button ${activeTab === 'Pocket Money' ? 'active' : ''}`}
                onClick={() => handleTabClick('Pocket Money')}
              >
                Pocket Money
              </button>
              <button
                className={`finance-button ${activeTab === 'Exam Fee' ? 'active' : ''}`}
                onClick={() => handleTabClick('Exam Fee')}
              >
                Exam Fee
              </button>
              <button
                className={`finance-button ${activeTab === 'Other Heads' ? 'active' : ''}`}
                onClick={() => handleTabClick('Other Heads')}
              >
                Other Heads
              </button>
              <button
                className={`finance-button ${activeTab === 'Refund' ? 'active' : ''}`}
                onClick={() => handleTabClick('Refund')}
              >
                Refund
              </button>
            </div>
          </div>
          {/* {activeTab === 'Student Details' && <StudentInfo />} */}
        </div>
      </div>
    </section>
  );
};
 
export default Profile;