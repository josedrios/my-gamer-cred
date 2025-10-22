import { IoCubeOutline } from 'react-icons/io5';
import ror from '@/assets/images/game_cover7.jpg';

function ReviewCard() {
  return (
    <div className="col-card review-card">
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

export { ReviewCard };
