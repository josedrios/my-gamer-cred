import {
  IoCheckmark,
  IoCubeOutline,
  IoBookmarkOutline,
  IoEllipsisVertical,
} from 'react-icons/io5';
import { rand } from '@/temp-util';

function GameCardRow({ source, title = 'NO TITLE' }) {
  return (
    <div className="row-card game-poster-card">
      <div className="row-card__body">
        <img src={source} alt="" />
        <p className="row-card__banner">
          <IoCubeOutline />
          {rand(32, 100)}
        </p>
        <p className="row-card__game-title">{title}</p>
        <div className="row-card__options">
          <IoCheckmark />
          <IoBookmarkOutline />
          <IoEllipsisVertical className="row-card__ellipsis" />
        </div>
      </div>
    </div>
  );
}

export { GameCardRow };
