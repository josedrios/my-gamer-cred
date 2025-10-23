import { randColor } from '@/temp-util';
import { IoCubeOutline, IoPeopleOutline } from 'react-icons/io5';

function PlayerCardRow({ username = 'UKNOWN', gc = 999, games = 999 }) {
  return (
    <div className="row-card row-card--player">
      <div className="row-card__pfp" style={{ backgroundColor: randColor() }} />
      <p className="row-card__username">{username}</p>
      <div className="row-card__user-misc">
        <p className="row-card__gc">
          <IoCubeOutline /> {gc}
        </p>
        <p>&nbsp;|&nbsp;</p>
        <p className="row-card__game-count">
          <IoPeopleOutline /> {games}
        </p>
        <p className="row-card__add-player">+</p>
      </div>
    </div>
  );
}

function PlayerCardCol() {
  return (
    <div className="col-card col-card--player">
      <div className="col-card__pfp" style={{ backgroundColor: randColor() }} />
      <p className="col-card__username">BASHWIZzzzzzzzzz</p>
      <p className="col-card__stat">
        <IoCubeOutline />
        87.2k
      </p>
      <p>&nbsp;</p>
      <p className="col-card__stat">
        <IoPeopleOutline />
        12.1k
      </p>
      <p className="col-card__add-player">+</p>
    </div>
  );
}

export { PlayerCardRow, PlayerCardCol };
