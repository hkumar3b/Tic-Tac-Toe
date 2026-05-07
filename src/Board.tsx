import { PlayArea } from "./PlayArea";
import { PlayerNavBar } from "./PlayerNavBar";

export const Board=()=>{
    return(
        <div className="board">
            <PlayerNavBar/>
            <PlayArea/>
        </div>
    );
}