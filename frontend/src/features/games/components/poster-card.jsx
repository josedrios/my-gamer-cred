import {
  IoCheckmark,
  IoBookmarkOutline,
  IoEllipsisVertical,
} from 'react-icons/io5';
import { GamerCredChip } from '@/components/ui/chips';
import { rand } from '@/temp-util';

function PosterCard({ source, title = 'NO TITLE' }) {
  return (
    <div className="card poster-card">
      <img className="poster-card__image" src={source} alt="" />
      <GamerCredChip value={rand(82, 100)} />
      <p className="poster-card__title">{title}</p>
      <div className="poster-card__options">
        <IoCheckmark className="poster-card__options-icon" />
        <IoBookmarkOutline className="poster-card__options-icon" />
        <IoEllipsisVertical className="poster-card__options-icon poster-card__options-icon--ellipsis" />
      </div>
    </div>
  );
}

export { PosterCard };
