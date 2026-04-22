export const Draw=(props:TDrawProps):JSX.Element=>{
    const {count=0}=props;
    return (
        <div className="draw">
            <p>DRAW</p>
            <p>{count}</p>
            
        </div>
    );
}

type TDrawProps={
    count?:number;
}