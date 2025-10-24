import { rand, randColor } from '@/temp-util';
import PosterSpread from './poster-spread';

function ListCard({ title = 'NO TITLE', user = 'UNKNOWN' }) {
  return (
    <div className={'card list-card '}>
      <PosterSpread className={'list-card__posters'} metric={rand(12, 35)} />
      <div className="list-card__content">
        <p className="list-card__title">{title}</p>
        <div className="list-card__account">
          <div
            className="list-card__pfp"
            style={{ backgroundColor: randColor() }}
          />
          <span className="list-card__username">{user}</span>
        </div>
      </div>
    </div>
  );
}

function ListCardDetailed() {
  return (
    <div className="card list-card--detailed">
      <PosterSpread className={'list-card__posters'} />
      <div className="list-card__content">
        <h5 className='list-card__header'>
          <span className='list-card__title'></span>
          <span className='list-card__game-count'></span>
        </h5>
        <p className='list-card__description'>
          This is the description of the list I created. This list holds hella games. Hella good games too, not that weak ish.
        </p>
      </div>
      <div className="list-card__footer"></div>
    </div>
  );
}

export { ListCard, ListCardDetailed };
