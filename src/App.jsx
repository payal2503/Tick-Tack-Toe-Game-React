import React from 'react';
import { useState } from 'react';
import { CIRCLE, CROSS } from '../constants';
import { EMPTY } from '../constants'
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

  const handleMove = (position) => {
    // alert(positions);
    const updatedPositions = [...positions];
    updatedPositions[position] = player;

    setPositions(updatedPositions);
    setPlayer((prevPlayer) => (prevPlayer == CIRCLE ? CROSS : CIRCLE));
  }

  return (
    <div className="App">
      <h1 className='app_heading'>React-tick-tack-toe-game </h1>

      <div className="game__section">     
       {
         positions.map((pst, index) => (
           <Square key={index * 55148521} position={index} value={pst} handleMove={handleMove} />
         ))
       }
      </div>

      {/* Result Screen */}

    </div>
  );
}

export default App
