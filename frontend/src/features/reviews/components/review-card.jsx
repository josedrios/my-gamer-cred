import ror from '@/assets/images/game_cover7.jpg';
import { rand, randColor } from '@/temp-util';
import {
  IoChatbubbleOutline,
  IoArrowDownOutline,
  IoArrowUpOutline,
  IoCubeOutline,
} from 'react-icons/io5';

function ReviewCard() {
  return (
    <div className="card review-card">
      <div className="review-card__poster">
        <img className="review-card__poster-img" src={ror} alt="" />
      </div>
      <div className="review-card__content">
        <h5 className="review-card__header">
          <span className="review-card__title">Risk of Rain 2</span>
          <span className="review-card__rating">
            {' '}
            <IoCubeOutline /> {rand(85, 100)}
          </span>
        </h5>
        <div className="review-card__account">
          <div
            className="review-card__pfp"
            style={{ backgroundColor: randColor() }}
          />
          <p className='review-card__username'>SOMEDUDE</p>
        </div>
        <p className="review-card__review">
          This is the description of one of the best games of 2025. The users on
          this platform have deemed it worthy of being on this list. That means
          this is a really good game. This is the description of one of the best
          games of 2025. The users on this platform have deemed it worthy of
          being on this list. That means this is a really good game.
        </p>
        <div className="review-card__footer">
          <p className="review-card__date">Oct 27, 2025</p>
          <p className="review-card__metric">
            <IoChatbubbleOutline />
            600k
          </p>
          <p className="review-card__metric">
            <IoArrowUpOutline />
            900k
          </p>
          <p className="review-card__metric">
            <IoArrowDownOutline />
            100k
          </p>
        </div>
      </div>
    </div>
  );
}

export { ReviewCard };