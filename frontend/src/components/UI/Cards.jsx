import WaveText from '../UI/WaveText';

// IMAGES FOR UI TESTING
import GameCover from '../../assets/images/game_cover.jpg'
import GameCover2 from '../../assets/images/game_cover2.jpg'
import GameCover3 from '../../assets/images/game_cover3.jpg'

export function GameCard({ gc = 0, image, title = 'Game Title' }) {
  return (
    <div className="game-card">
      <img className="game-cover" src={image} alt="" />
      <div className="game-card-info">
        <p className="game-card-gc">
          {' '}
          <img src="/images/gc.png" className="pixel-art" alt="" />
          {gc >= 51 ? (
            <WaveText
              text={gc > 0 ? '+' + gc : gc}
              longText={false}
              duration={300}
            />
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

export function GameCategory() {
  return (
    <div className="game-category-container">
      <h3 className="game-card-layout-header">Top Games</h3>
      <div className="game-card-layout">
        <GameCard gc={100} image={GameCover} title="Batman: Arkham Asylum" />
        <GameCard gc={100} image={GameCover2} title="Elden Ring" />
        <GameCard gc={100} image={GameCover3} title="Titanfall 2" />
      </div>
    </div>
  );
}