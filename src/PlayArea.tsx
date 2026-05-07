export const PlayArea = () => {
  return (
    <div className="play-area">
      {[...Array(9)].map((_, i) => (
        <button key={i} className="square">
          {i+1}
        </button>
      ))}
    </div>
  );
};