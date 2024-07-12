// src/App.tsx
import React from 'react';
import './App.css';
import Fretboard from './fretboard.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Guitar Fretboard</h1>
        <Fretboard />
      </header>
    </div>
  );
};

export default App;
