import { Draw } from "./Draw";
import { Player } from "./Player";

export const PlayerNavBar = () => {
  return (
    <div className="player-nav-bar">
      <Player name="Player X" score={0} />
      <Draw count={0} />
      <Player name="Player O" score={0} />
    </div>
  );
};