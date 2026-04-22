export const Player=(props:TPlayerProps)=>{
    const {name='Player',score=0}=props;

    return (
        <div className="player">
            <div className="player-name">{name.toUpperCase()} - X</div>
            <div className="player-score">{score}</div>
        </div>

    );
}

type TPlayerProps={
    name?:string;
    score?:number;
}