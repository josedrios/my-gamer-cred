export function GameCard({ gc = 0 }) {
  return (
    <div className="game-card">
      <img className="game-cover" src="/images/game_cover.jpg" alt="" />
      <div className="game-card-info">
        <p className="game-card-gc">
          {' '}
          <img src="/images/gc.png" className="pixel-art" alt="" />
          {gc > 0 ? '+' + gc : gc}
        </p>
      </div>
    </div>
  );
}
