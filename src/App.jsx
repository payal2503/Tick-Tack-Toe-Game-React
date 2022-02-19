import React from 'react';
import { useState } from 'react';
import { CIRCLE, EMPTY, CROSS } from '../constants';
import './App.css';
import Square from './components/Square';

const App = () => {

  const [player, setPlayer] = useState(CIRCLE);
  const [positions, setPositions] = useState([
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
    EMPTY,
  ])
  return (
    <div className="App">
      <h1 className='app_heading'>React-tick-tack-toe-game </h1>

      <div className="game__section">     
       {
         positions.map((pst, index) => (
           <Square key={index * 55148521} positions={index} value={pst} />
         ))
       }
      </div>

      {/* Result Screen */}

    </div>
  );
}

export default App
