import { useState } from 'react';

function useBoard() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  return [squares, setSquares, xIsNext, setXIsNext ];
}

export default useBoard;
