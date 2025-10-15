import { useRef, useEffect, useState } from 'react';
import titan from '@/assets/images/game_cover3.jpg';
import lbp from '@/assets/images/game_cover4.jpg';
import mgs from '@/assets/images/game_cover5.jpg';
import re from '@/assets/images/game_cover6.jpg';
import { rand } from '@/temp-util';

function ListCardRow({
  title = 'NO TITLE',
  user = 'UNKNOWN',
  column = false,
  description = false,
}) {
  const posters = [titan, lbp, mgs, re];
  const bodyWidth = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (bodyWidth.current) {
      setWidth(bodyWidth.current.offsetWidth);
    }
  }, []);

  return (
    <div
      className={`row-card row-card--list ${column ? 'col-card--list' : ''}`}
    >
      <div className="row-card__body" ref={bodyWidth}>
        {posters.map((poster, i) => (
          <img
            src={poster}
            alt=""
            key={i}
            style={{
              left: `${((width - 75) / 3) * i}px`,
              zIndex: 1000 - i,
            }}
          />
        ))}
        <p className="row-card__banner" style={{ zIndex: 1001 }}>
          {rand(1,90)}
        </p>
      </div>
      {description ? (
        <p className="list-description">
          {' '}
          These are my favorite games of all time. Most of my gamer cred is
          attributed to the games on this list. I can yap on about the games on
          here for about 6-7 hours a day. I am just typing random stuff to see
          how the UI on the list cards would look like.
        </p>
      ) : (
        ''
      )}
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
