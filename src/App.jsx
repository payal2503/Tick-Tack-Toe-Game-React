import React from 'react';
import { useState , useEffect} from 'react';
import { CIRCLE, CROSS } from '../constants';
import { EMPTY } from '../constants';
import './App.css';
import Circle from './components/Circle';
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

  const [winner,setWinner] = useState(null);

  //check positions
  const checkPositions = (pos1, pos2, pos3, playerType) => {
    if(
      positions[pos1] === playerType && 
      positions[pos2] === playerType && 
      positions[pos3] === playerType
      ){
      return true;
    }
   return false;
  };

  const decision = () => {
    // if 3 circles at consecutive columns
    // if 3 circles at consecutive rows
    // if 3 circles at diagnols
    //columns
    if(checkPositions(0,1,2,CIRCLE)) return CIRCLE;
    if(checkPositions(3,4,5,CIRCLE)) return CIRCLE;
    if(checkPositions(6,7,8,CIRCLE)) return CIRCLE;
    //rows
    if(checkPositions(0,3,6,CIRCLE)) return CIRCLE;
    if(checkPositions(1,4,7,CIRCLE)) return CIRCLE;
    if(checkPositions(2,5,8,CIRCLE)) return CIRCLE;
    //diagnols
    if(checkPositions(0,4,8,CIRCLE)) return CIRCLE;
    if(checkPositions(2,4,6,CIRCLE)) return CIRCLE;
   

    // if 3 cross at consecutive columns
    // if 3 cross at consecutive rows
    // if 3 cross at diagnols
    //columns
    if(checkPositions(0,1,2,CROSS)) return CROSS;
    if(checkPositions(3,4,5,CROSS)) return CROSS;
    if(checkPositions(6,7,8,CROSS)) return CROSS;
    //rows
    if(checkPositions(0,3,6,CROSS)) return CROSS;
    if(checkPositions(1,4,7,CROSS)) return CROSS;
    if(checkPositions(2,5,8,CROSS)) return CROSS;
    //diagnols
    if(checkPositions(0,4,8,CROSS)) return CROSS;
    if(checkPositions(2,4,6,CROSS)) return CROSS;

    // if no match => it is a tie
    if(positions.every(pst => pst !== EMPTY)) return EMPTY;

    return null;
  }

  const handleMove = (position1) => {
    // alert(positions);
    const updatedPositions = [...positions];
    updatedPositions[position1] = player;

    setPositions(updatedPositions);
    setPlayer((prevPlayer) => (prevPlayer == CIRCLE ? CROSS : CIRCLE));
    console.log(pst);

  }

  useEffect(() => {
    setWinner(decision);
  })

  return (
    <div className="App">
      <h1 className='app_heading'>React-tick-tack-toe-game </h1>
      <div className="game__section">
        {
          positions.map((pst, index)  => (         
            <Square key={index * 55148521} position1={index} value={pst} handleMove={handleMove} />       
          ))
        }
      </div>
      {/* result screen */}
      {winner}
    </div>
  );
}

export default App
