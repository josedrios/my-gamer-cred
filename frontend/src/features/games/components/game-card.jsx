import {
  IoCheckmark,
  IoCubeOutline,
  IoEllipsisVertical,
} from 'react-icons/io5';
import { RowCard } from '@/components/ui/Cards';

function GameCard({ source, title = 'NO TITLE' }) {
  return (
    <RowCard type={'game'}>
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
    </RowCard>
  );
}

export { GameCard };
