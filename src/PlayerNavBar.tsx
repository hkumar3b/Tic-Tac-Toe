import { Draw } from "./Draw";
import { Player } from "./Player";

type PlayerNavBarProps = {
  scoreX: number;
  scoreO: number;
  drawCount: number;
};

export const PlayerNavBar = ({ scoreX, scoreO, drawCount }: PlayerNavBarProps) => {
  return (
    <div className="player-nav-bar">
      <Player name="Player X" score={scoreX} />
      <Draw count={drawCount} />
      <Player name="Player O" score={scoreO} />
    </div>
  );
};