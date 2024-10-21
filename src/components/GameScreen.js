// src/components/GameScreen.js
import React, { useState } from 'react';
import Board from './Board';
import { useLocation, useNavigate } from 'react-router-dom';
import './GameScreen.css';

const GameScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { player1, player2 } = location.state;

  // Initialize board with independent rows
  const [board, setBoard] = useState(Array.from({ length: 6 }, () => Array(7).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState('R');
  const [gameOver, setGameOver] = useState(false);

  const handleCellClick = (colIndex) => {
    if (gameOver) return;

    const newBoard = board.map((row) => row.slice()); // Create a new board copy
    for (let rowIndex = 5; rowIndex >= 0; rowIndex--) {
      if (!newBoard[rowIndex][colIndex]) {
        newBoard[rowIndex][colIndex] = currentPlayer; // Place the current player's token
        setBoard(newBoard); // Update the board state

        // Check for win condition after placing the token
        if (checkWin(rowIndex, colIndex, currentPlayer, newBoard)) {
          setGameOver(true);
          navigate('/win', { state: { winner: currentPlayer === 'R' ? player1 : player2 } });
        } else {
          setCurrentPlayer(currentPlayer === 'R' ? 'Y' : 'R'); // Switch players
        }
        break; // Exit the loop after placing the token
      }
    }
  };

  const checkWin = (rowIndex, colIndex, player, board) => {
    const directions = [
      { r: 0, c: 1 },  // horizontal
      { r: 1, c: 0 },  // vertical
      { r: 1, c: 1 },  // diagonal /
      { r: 1, c: -1 }, // diagonal \
    ];

    for (const { r, c } of directions) {
      let count = 1;
      for (let i = 1; i < 4; i++) {
        const rCheck = rowIndex + i * r;
        const cCheck = colIndex + i * c;
        if (rCheck < 0 || rCheck >= 6 || cCheck < 0 || cCheck >= 7 || board[rCheck][cCheck] !== player) break;
        count++;
      }
      for (let i = 1; i < 4; i++) {
        const rCheck = rowIndex - i * r;
        const cCheck = colIndex - i * c;
        if (rCheck < 0 || rCheck >= 6 || cCheck < 0 || cCheck >= 7 || board[rCheck][cCheck] !== player) break;
        count++;
      }
      if (count >= 4) return true;
    }
    return false;
  };

  return (
    <div className="game-screen">
      <h1>Connect Four</h1>
      <h2>Current Player: {currentPlayer === 'R' ? player1 : player2}</h2>
      <Board board={board} handleCellClick={handleCellClick} />
    </div>
  );
};

export default GameScreen;
