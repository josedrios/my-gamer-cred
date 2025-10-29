import profileCover from '@/assets/images/profile_cover.jpg';
import profileCover2 from '@/assets/images/profile_cover2.jpg';
import { rand, randColor } from '@/temp-util';
import { IoCubeOutline, IoAdd } from 'react-icons/io5';

export default function PlayerCard({ cov }) {
  return (
    <div className="card player-card">
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
        <p className="player-card__username">SOME DUDE</p>
        <div className="player-card__info">
          <p className='player-card__reviews'>{rand(23,90)} reviews</p> 
          <p className="player-card__gc">
            <IoCubeOutline />
            {rand(300, 999)}
          </p>
        </div>
      </div>
    </div>
  );
}
