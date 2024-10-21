import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import PlayerSetup from './components/PlayerSetup';
import GameScreen from './components/GameScreen';
import WinScreen from './components/WinScreen';
import TournamentWin from './components/TournamentWin';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/setup" element={<PlayerSetup />} />
        <Route path="/game" element={<GameScreen />} />
        <Route path="/win" element={<WinScreen />} />
        <Route path="/tournament-win" element={<TournamentWin />} />
      </Routes>
    </Router>
  );
}

export default App;
