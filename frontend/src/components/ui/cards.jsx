import { randColor } from '@/temp-util';
import ror from '@/assets/images/game_cover7.jpg';
import {
  IoChatbubbleOutline,
  IoArrowDownOutline,
  IoArrowUpOutline,
  IoCubeOutline,
} from 'react-icons/io5';
import PosterSpread from '@/features/lists/components/poster-spread';

function UniversalCard({
  title = 'NO TITLE',
  username = 'NO USER',
  value = 0,
  info = 'NO INFO',
  comments,
  upvotes,
  downvotes,
  type = 'game',
}) {
  return (
    <div className="card universal-card">
      {type === 'game' ? (
        <img className="universal-card__image" src={ror} alt="" />
      ) : (
        <PosterSpread className="universal-card__poster-spread" />
      )}
      <div className="universal-card__content"> 
        <h5 className="universal-card__header">
          <span className="universal-card__title">{title}</span>
          <span className="universal-card__value">
            {' '}
            {type !== 'game' ? (
              ''
            ) : (
              <>
                <IoCubeOutline />
                {value}
              </>
            )}
            {type !== 'list' ? '' : <span>{value}</span>}
          </span>
        </h5>
        <div className="universal-card__account">
          <div
            className="universal-card__pfp"
            style={{ backgroundColor: randColor() }}
          />
          <p className="universal-card__username">{username}</p>
        </div>
        <p className="universal-card__info">{info}</p>
        <div className="universal-card__footer">
          <p className="universal-card__date">Oct 27, 2025</p>
          <p className="universal-card__metric">
            <IoChatbubbleOutline />
            {comments}
          </p>
          <p className="universal-card__metric">
            <IoArrowUpOutline />
            {upvotes}
          </p>
          <p className="universal-card__metric">
            <IoArrowDownOutline />
            {downvotes}
          </p>
        </div>
      </div>
    </div>
  );
}

export { UniversalCard };
