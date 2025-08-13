export function GameCard({ gc = 100 }) {
  return (
    <div className="game-card">
      <div className="game-card-info">
        <p className="game-card-gc">
          {' '}
          <img src="/images/gc.png" className="pixel-art" alt="" />
          {gc}
        </p>
      </div>
    </div>
  );
}
