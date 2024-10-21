import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TournamentWin.css';

const TournamentWin = () => {
  const navigate = useNavigate();

  return (
    <div className="tournament-win">
      <h1>Tournament Completed!</h1>
      <h2>Thank you for playing!</h2>
      <button onClick={() => navigate('/')}>Back to Main Menu</button>
    </div>
  );
};

export default TournamentWin;
