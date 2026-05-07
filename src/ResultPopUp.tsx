

export const ResultPopUp = ({ winner, onClose, onPlayAgain }: ResultPopUpProps) => {
  const isX = winner === 'X';

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <button className="popup-close" onClick={onClose}>✕</button>
        <p className="popup-label">PLAYER</p>
        <p className="popup-winner" style={{ color: isX ? '#48D2FE' : '#F2D51B' }}>
          {winner}
        </p>
        <p className="popup-label">WINS!</p>
        <button className="popup-play-again" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
};

type ResultPopUpProps = {
  winner: string;
  onClose: () => void;
  onPlayAgain: () => void;
};
