import { useState } from 'react';
import { ResultPopUp } from './ResultPopUp';



export const PlayArea = ({ onWin, onDraw }: PlayAreaProps) => {
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [isDraw, setIsDraw] = useState<boolean>(false);

  const winner = calculateWinner(squares);
  const draw = !winner && squares.every(Boolean);

  const handleClick = (i: number) => {
    if (winner || draw || squares[i]) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    if (calculateWinner(nextSquares)) {
      onWin(calculateWinner(nextSquares)!);
      setShowPopup(true);
    } else if (nextSquares.every(Boolean)) {
      onDraw();
      setIsDraw(true);
      setShowPopup(true);
    }
  };

  const handleClose = () => setShowPopup(false);

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setShowPopup(false);
    setIsDraw(false);
  };

  return (
    <>
      {showPopup && <ResultPopUp winner={winner} isDraw={isDraw} onClose={handleClose} onPlayAgain={handleReset} />}
      <div className="play-area">
        {squares.map((value, i) => (
          <Square
            key={i}
            value={value}
            onClick={() => handleClick(i)}
          />
        ))}
      </div>
    </>
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

type PlayAreaProps = {
  onWin: (winner: string) => void;
  onDraw: () => void;
};