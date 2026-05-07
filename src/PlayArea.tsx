import { useState } from 'react';

export const PlayArea = () => {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      console.log("already filled or game is over");
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="play-area">
      {squares.map((value, i) => (
        <Square 
          key={i} 
          value={value} 
          onClick={() => handleClick(i)} 
        />
      ))}
    </div>
  );
};

type SquareProps = {
  value: string | null;
  onClick: () => void;
};

const Square = ({ value, onClick }: SquareProps) => {
  return (
    <button className="square" onClick={onClick}>
      <span style={{
        color: value === 'X' ? '#48D2FE' : '#F2D51B',
        textShadow: '0 0 10px rgba(0,0,0,0.2)'
      }}>
        {value}
      </span>
    </button>
  );
};

const calculateWinner = (squares: (string | null)[]) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}