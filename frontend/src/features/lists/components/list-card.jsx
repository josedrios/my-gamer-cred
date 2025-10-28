import { rand, randColor } from '@/temp-util';
import PosterSpread from './poster-spread';

function ListCard({ title = 'NO TITLE', user = 'UNKNOWN', column = false }) {
  return (
    <div className={`card list-card ${column ? 'list-card--sidebar' : ''}`}>
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

export { ListCard };