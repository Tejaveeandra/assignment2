import React from 'react';
import logo from "../../Images/logo.png";
import user from "../../Images/user.png";
import greenIcon from "../../Images/greenIcon.png";
import '../Css/Header.css';
 
// import '@fortawesome/fontawesome-free/css/all.min.css';
 
import searchIcon from "../../Images/searchIcon.png";
const Topbar = () => {
  return (
    <header className="topbar">
      <div className="topbar-left">
 
        <img src={logo} alt="Sri Chaitanya Logo" className="logo" />
      </div>
 
      <div className="topbar-center">
        <div className="search-border-wrapper">
          <div className="search-wrapper">
 
            <div className="student-selected">
              <div>
                <img src={greenIcon} className="green-dot"></img>
              </div>
              <p className="student-selected-name">Student</p>
              <div>
 
              </div>
 
            </div>
 
            <input
              type="text"
              placeholder="Search..."
              className="search-bar"
            />
            <svg width="25" height="25" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2.00077C4.93913 2.00077 3.92172 2.42219 3.17157 3.17234C2.42143 3.92248 2 4.9399 2 6.00077C2 7.06163 2.42143 8.07905 3.17157 8.82919C3.92172 9.57934 4.93913 10.0008 6 10.0008C7.06087 10.0008 8.07828 9.57934 8.82843 8.82919C9.57857 8.07905 10 7.06163 10 6.00077C10 4.9399 9.57857 3.92248 8.82843 3.17234C8.07828 2.42219 7.06087 2.00077 6 2.00077ZM1.13461e-07 6.00077C-0.00012039 5.05647 0.222642 4.12548 0.650171 3.28351C1.0777 2.44154 1.69792 1.71236 2.4604 1.15529C3.22287 0.598219 4.10606 0.228978 5.03815 0.0775993C5.97023 -0.0737798 6.92488 -0.00302249 7.82446 0.284117C8.72404 0.571256 9.54315 1.06667 10.2152 1.73006C10.8872 2.39346 11.3931 3.2061 11.6919 4.1019C11.9906 4.9977 12.0737 5.95136 11.9343 6.88532C11.795 7.81928 11.4372 8.70716 10.89 9.47677L15.707 14.2938C15.8892 14.4824 15.99 14.735 15.9877 14.9972C15.9854 15.2594 15.8802 15.5102 15.6948 15.6956C15.5094 15.881 15.2586 15.9862 14.9964 15.9884C14.7342 15.9907 14.4816 15.8899 14.293 15.7078L9.477 10.8918C8.57936 11.53 7.52335 11.9089 6.42468 11.9869C5.326 12.0648 4.22707 11.8389 3.2483 11.3337C2.26953 10.8286 1.44869 10.0638 0.875723 9.12312C0.30276 8.18244 -0.000214051 7.1022 1.13461e-07 6.00077Z" fill="#B0BABF" />
            </svg>
          </div>
        </div>
      </div>
 
      <div className="topbar-right">
        <button className="mail-button">
          <svg width="25" height="25" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.125 4.33334L9.34437 9.81293C10.0442 10.2795 10.9558 10.2795 11.6556 9.81293L19.875 4.33334M3.20833 15.7917H17.7917C18.9423 15.7917 19.875 14.8589 19.875 13.7083V3.29168C19.875 2.14108 18.9423 1.20834 17.7917 1.20834H3.20833C2.05774 1.20834 1.125 2.14108 1.125 3.29168V13.7083C1.125 14.8589 2.05774 15.7917 3.20833 15.7917Z" stroke="#3F3F46" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
 
 
        </button>
        <button className="notification-button">
          <svg width="25" height="25" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6251 15.2083H17.8334L16.3699 13.7449C15.9731 13.348 15.7501 12.8097 15.7501 12.2484V8.95834C15.7501 6.23705 14.0109 3.92197 11.5834 3.06397V2.70833C11.5834 1.55774 10.6507 0.625 9.50008 0.625C8.34949 0.625 7.41675 1.55774 7.41675 2.70833V3.06397C4.98926 3.92197 3.25008 6.23705 3.25008 8.95834V12.2484C3.25008 12.8097 3.02711 13.348 2.63022 13.7449L1.16675 15.2083H6.37508M12.6251 15.2083V16.25C12.6251 17.9759 11.226 19.375 9.50008 19.375C7.77419 19.375 6.37508 17.9759 6.37508 16.25V15.2083M12.6251 15.2083H6.37508" stroke="#3F3F46" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
 
        </button>
        <div className="user-section">
          <img src={user} className="user-img" />
          <div className="user-info">
            <div className="user-name">HYD 256789</div>
 
          </div>
          <span className="dropdown-arrow">
 
            <svg width="25" height="25" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 7.5L10.5 12.5L15.5 7.5" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
 
 
          </span>
        </div>
      </div>
    </header>
  );
};
 
export default Topbar;