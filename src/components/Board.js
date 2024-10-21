// src/components/Board.js
import React from 'react';
import Cell from './Cell';
import './Board.css';

const Board = ({ board, handleCellClick }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((cell, colIndex) => (
            <Cell
              key={colIndex}
              value={cell}
              onClick={() => handleCellClick(colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
