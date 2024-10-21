// src/components/Cell.js
import React from 'react';
import './Cell.css';

const Cell = ({ value, onClick }) => {
  return (
    <div className={`cell ${value}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
