import React from 'react';
import '../landing.css';

const Landing = ({ onEnter }) => {
  return (
    <div className="landing">
      <div className="overlay">
        <h1>Welcome to Weather App</h1>
        <p>The dashboard with all the details you need</p>
        <button onClick={onEnter}>Enter App</button>
      </div>
    </div>
  );
};

export default Landing;
