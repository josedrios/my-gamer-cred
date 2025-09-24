import { IoCubeOutline } from 'react-icons/io5';
import { IoCheckmark } from 'react-icons/io5';
import { IoEllipsisVertical } from 'react-icons/io5';
import SearchForm from '../components/Search/SearchForm';
import batman from '../assets/images/game_cover.jpg';
import elden from '../assets/images/game_cover2.jpg';
import titan from '../assets/images/game_cover3.jpg';
import lbp from '../assets/images/game_cover4.jpg';
import mgs from '../assets/images/game_cover5.jpg';
import re from '../assets/images/game_cover6.jpg';

export default function Games() {
  const filters = ['rating', 'time', 'popular', 'genre'];

  return (
    <main>
      <SearchForm filters={filters} placeholder={'Search for games...'} />
      <GameSection title={'Trending in September'} />
      <GameSection title={'Recently Played'} />
      <div id="games-misc-section">
        <RecentReviews />
        <ListRecommendations />
      </div>
    </main>
  );
}

function GameSection({ title }) {
  return (
    <section className="game-section">
      <h4 className="section-header">{title}</h4>
      <div className="game-section-children">
        <GameCard source={elden} title="Elden Ring" />
        <GameCard source={batman} title="Batman Arkham Asylum" />
        <GameCard source={titan} title="Titan Fall 2" />
        <GameCard source={lbp} title="LittleBigPlanet" />
        <GameCard source={mgs} title="Metal Gear Solid 3: Snake Eater" />
        <GameCard source={re} title="Resident Evil 2 Remake" />
      </div>
    </section>
  );
}

function GameCard({ source, title = 'NO TITLE' }) {
  return (
    <div className="game-card">
      <div className="game-card-body">
        <img src={source} alt="" />
        <p className="game-card-title">{title}</p>
        <p className="game-card-gc">
          <IoCubeOutline />
          100
        </p>
        <div className="game-card-options">
          <IoCheckmark />
          <IoCubeOutline />
          <IoEllipsisVertical />
        </div>
      </div>
      <p className="player-count">627k Players</p>
    </div>
  );
}

function RecentReviews() {
  return (
    <div id="games-recent-reviews">
      <h4 className="section-header">Hot Reviews</h4>
      <p>Review</p>
      <p>Review</p>
      <p>Review</p>
      <p>Review</p>
      <p>Review</p>
    </div>
  );
}

function ListRecommendations() {
  return (
    <div id="games-list-recommendations">List Recommendations Go Here</div>
  );
}
