import React from 'react';
import './App.css';
import Sidebar from './component/react/Sidebar';
import Header from './component/react/Header';
import FeeAdjustments from './component/react/FeeAdjustments';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <FeeAdjustments />
        </div>
      </div>
    </div>
  );
}

export default App;