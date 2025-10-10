import titan from '@/assets/images/game_cover3.jpg';
import lbp from '@/assets/images/game_cover4.jpg';
import mgs from '@/assets/images/game_cover5.jpg';
import re from '@/assets/images/game_cover6.jpg';

function ListCardRow({ title = 'NO TITLE', user = 'UNKNOWN' }) {
  const posters = [titan, lbp, mgs, re];

  return (
    <div className="row-card row-card--list">
      <div className="row-card__body">
        {posters.map((poster, i) => (
          <img
            src={poster}
            alt=""
            key={i}
            style={{
              left: `${i * 50}px`,
              zIndex: 1000 - i,
            }}
          />
        ))}
        <p className="row-card__banner" style={{ zIndex: 1001 }}>
          6 Games
        </p>
      </div>
      <p className="row-card__list-title">{title}</p>
      <div className="row-card__user">
        <div className="row-card__pfp" />
        <span>{user}</span>
      </div>
    </div>
  );
}

function ListCardCol() {
  return <div className="col-card col-card--list">LIST COL CARD</div>;
}

export { ListCardRow, ListCardCol };
