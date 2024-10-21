import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlayerSetup.css';

const PlayerSetup = () => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const navigate = useNavigate();

  const handleStartGame = () => {
    if (player1 && player2) {
      navigate('/game', { state: { player1, player2 } });
    }
  };

  return (
    <div className="player-setup">
      <h1>Player Setup</h1>
      <input
        type="text"
        placeholder="Player 1 Name"
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Player 2 Name"
        value={player2}
        onChange={(e) => setPlayer2(e.target.value)}
      />
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default PlayerSetup;
