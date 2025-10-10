import { IoCubeOutline } from 'react-icons/io5';

function PlayerCardRow({ username = 'UKNOWN', gc = 999, games = 999 }) {
  return (
    <div className="row-card row-card--player">
      <div className="row-card__pfp" />
      <p className="row-card__username">{username}</p>
      <div className="row-card__user-misc">
        <p className="row-card__gc">
          <IoCubeOutline /> {gc}
        </p>
        <p>&nbsp;|&nbsp;</p>
        <p className="row-card__game-count">{games} games</p>
      </div>
    </div>
  );
}

function PlayerCardCol() {
  return (
    <div className="col-card col-card--player">
      <div className="col-card__pfp" />
      <p className="col-card__username">BASHWIZzzzzzzzzz</p>
      <p className="col-card__stat">
        <IoCubeOutline />
        900k
      </p>
      <p>|</p>
      <p className="col-card__stat">
        900k Followers
      </p>
    </div>
  );
}

export { PlayerCardRow, PlayerCardCol };
