export const ResultPopUp = ({ winner, isDraw, onClose, onPlayAgain }: ResultPopUpProps) => {
  const isX = winner === 'X';

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <button className="popup-close" onClick={onClose}>✕</button>

        {isDraw ? (
          <>
            <p className="popup-label">IT'S A</p>
            <p className="popup-winner" style={{ color: '#BDD8E5' }}>DRAW</p>
            <p className="popup-label">NO WINNERS!</p>
          </>
        ) : (
          <>
            <p className="popup-label">PLAYER</p>
            <p className="popup-winner" style={{ color: isX ? '#48D2FE' : '#F2D51B' }}>
              {winner}
            </p>
            <p className="popup-label">WINS!</p>
          </>
        )}

        <button className="popup-play-again" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
};

type ResultPopUpProps = {
  winner: string | null;
  isDraw: boolean;
  onClose: () => void;
  onPlayAgain: () => void;
};