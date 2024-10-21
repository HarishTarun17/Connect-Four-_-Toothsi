// src/components/WinScreen.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './WinScreen.css';

const WinScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { winner } = location.state;

  return (
    <div className="win-screen">
      <h1>Congratulations!</h1>
      <h2>Winner: {winner}</h2>
      <button onClick={() => navigate('/')}>Play Again</button>
    </div>
  );
};

export default WinScreen;
