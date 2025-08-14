import WaveText from '../UI/WaveText';

export function GameCard({ gc = 0, image, title = 'Game Title' }) {
  return (
    <div className="game-card">
      <img className="game-cover" src={image} alt="" />
      <div className="game-card-info">
        <p className="game-card-gc">
          {' '}
          <img src="/images/gc.png" className="pixel-art" alt="" />
          {gc >= 51 ? (
            <WaveText text={gc > 0 ? '+' + gc : gc} longText={false} duration={300}/>
          ) : gc > 0 ? (
            '+' + gc
          ) : (
            gc
          )}
        </p>
      </div>
      <p className="game-card-title">{title}</p>
    </div>
  );
}