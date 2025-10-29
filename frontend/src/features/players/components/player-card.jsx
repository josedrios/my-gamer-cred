import profileCover from '@/assets/images/profile_cover.jpg';
import profileCover2 from '@/assets/images/profile_cover2.jpg';
import { rand, randColor } from '@/temp-util';
import { IoCubeOutline, IoAdd } from 'react-icons/io5';

export default function PlayerCard({ cov, sidebar = false }) {
  return (
    <div
      className={`card player-card ${sidebar ? 'player-card--sidebar' : ''}`}
    >
      <div
        className="player-card__cover"
        style={{
          backgroundImage: `url(${cov === 1 ? profileCover : profileCover2})`,
        }}
      >
        <div
          className="player-card__pfp"
          style={{ backgroundColor: randColor() }}
        />
        <div className="player-card__add">
          <IoAdd />
        </div>
      </div>
      <div className="player-card__body">
        <div className="player-card__username-container">
          <p className="player-card__username">
            SOME DUDESOME DUDESOME DUDESOME DUDESOME DUDESOME DUDESOME DUDE
          </p>
        </div>{' '}
        <div className="player-card__info">
          <p className="player-card__reviews">{rand(23, 90)} reviews</p>
          <p className="player-card__gc">
            <IoCubeOutline />
            {rand(300, 999)}
          </p>
        </div>
      </div>
    </div>
  );
}
