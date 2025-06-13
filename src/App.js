import React from 'react';
import './App.css';
import Sidebar from './component/react/Sidebar';
import Header from './component/react/Header';
import FeeAdjustments from './component/react/FeeAdjustments';
import Profile from './component/react/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <aside>
         <Sidebar />
        </aside>
        <main>
            <div className="content">
              <Profile />
          <FeeAdjustments />
        </div>
          </main>
      
      </div>
    </div>
  );
}

export default App;