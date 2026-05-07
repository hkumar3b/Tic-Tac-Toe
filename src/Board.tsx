import { useState } from "react";
import { PlayArea } from "./PlayArea";
import { PlayerNavBar } from "./PlayerNavBar";

export const Board = () => {
  const [scores, setScores] = useState({ X: 0, O: 0, draw: 0 });

  const handleWin = (winner: string) => {
    setScores(prev => ({
      ...prev,
      [winner]: prev[winner as 'X' | 'O'] + 1,
    }));
  };

  const handleDraw = () => {
    setScores(prev => ({ ...prev, draw: prev.draw + 1 }));
  };

  return (
    <div className="board">
      <PlayerNavBar scoreX={scores.X} scoreO={scores.O} drawCount={scores.draw} />
      <PlayArea onWin={handleWin} onDraw={handleDraw} />
    </div>
  );
};