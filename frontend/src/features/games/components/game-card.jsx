import {
  IoCheckmark,
  IoCubeOutline,
  IoEllipsisVertical,
} from 'react-icons/io5';
import ror from '@/assets/images/game_cover7.jpg';

function GameCardRow({ source, title = 'NO TITLE' }) {
  return (
    <div className="row-card row-card--game">
      <div className="row-card__body">
        <img src={source} alt="" />
        <p className="row-card__banner">
          <IoCubeOutline />
          100
        </p>
        <p className="row-card__game-title">{title}</p>
        <div className="row-card__options">
          <IoCheckmark />
          <IoCubeOutline />
          <IoEllipsisVertical />
        </div>
      </div>
      <p className="row-card__subheader">627k Players</p>
    </div>
  );
}

function GameCardCol() {
  return (
    <div className="col-card col-card--game">
      <div className="col-card__body">
        <img src={ror} alt="" />
        <p className="col-card__banner">
          <IoCubeOutline /> 100
        </p>
      </div>
      <div className="col-card__info">
        <h5 className="col-card__title">Risk of Rain 2</h5>
        {/* make is so that only the description can fit only a certain amount of characters */}
        {/* prevent overflow */}
        <p className="col-card__description">
          This is the description of one of the best games of 2025. The users on
          this platform have deemed it worthy of being on this list. That means
          this is a really good game.
        </p>
      </div>
    </div>
  );
}

export { GameCardRow, GameCardCol };
