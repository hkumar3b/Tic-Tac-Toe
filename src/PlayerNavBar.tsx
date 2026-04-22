import { Draw } from "./Draw";
import { Player } from "./Player";

export const PlayerNavBar=()=>{
    return(
        <div className="player-nav-bar">
            <Player name="Himanshu"/>
            <Draw />
            <Player name="Himanshu"/>
        </div>
    );
}