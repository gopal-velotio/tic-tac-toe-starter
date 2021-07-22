import React, { useState } from 'react';
import Square from '../Square';
import './Board.css';
import calculateWinner from '../../utilities/utility';

function Board(props) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const squaresNew = squares.slice();

    if (calculateWinner(squaresNew) || squaresNew[i]) {
      alert('Game over');
      return;
    }

    squaresNew[i] = xIsNext ? 'X' : 'O';
    setSquares(squaresNew);
    setXIsNext(!xIsNext);
  }

  function renderSquare(i) {
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
      />
    );
  }

    const winner = calculateWinner(squares);
    let status;

    if (winner) {
      status = 'Winner is: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
  
    return (
      <div>
        <div>
          <div className='status'>{status}</div>
          <div className='board-row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className='board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className='board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </div>
    );
}

export default Board;
