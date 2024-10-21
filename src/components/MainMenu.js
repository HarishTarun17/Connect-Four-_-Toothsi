import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="main-menu">
      <h1>Welcome to Connect Four</h1>
      <button onClick={() => navigate('/setup')}>Start Game</button>
    </div>
  );
};

export default MainMenu;
