import ror from '@/assets/images/game_cover7.jpg';
import { MetricChip } from '@/components/ui/chips';
import { rand } from '@/temp-util';

function ReviewCard() {
  return (
    <div className="review-card">
      <div className="review-card__poster">
        <img className='review-card__poster-img' src={ror} alt="" />
        <MetricChip value={rand(85, 100)} />
      </div>
      <div className="review-card__content">
        <h5 className="review-card__content-title">Risk of Rain 2</h5>
        {/* make is so that only the description can fit only a certain amount of characters */}
        {/* prevent overflow */}
        <p className="review-card__content-description">
          This is the description of one of the best games of 2025. The users on
          this platform have deemed it worthy of being on this list. That means
          this is a really good game.
        </p>
      </div>
    </div>
  );
}

export { ReviewCard };
