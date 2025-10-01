import {
  IoCheckmark,
  IoCubeOutline,
  IoEllipsisVertical,
} from 'react-icons/io5';

function GameCardRow({ source, title = 'NO TITLE' }) {
  return (
    <div className='row-card row-card--game'>
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
  return <div>GAME COL CARD</div>;
}

export { GameCardRow, GameCardCol };
