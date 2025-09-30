import titan from '@/assets/images/game_cover3.jpg';
import lbp from '@/assets/images/game_cover4.jpg';
import mgs from '@/assets/images/game_cover5.jpg';
import re from '@/assets/images/game_cover6.jpg';
import { SectionRow, SectionDivider } from '@/components/UI/Sections.jsx';
import { RowCard } from '@/components/UI/Cards.jsx';

export default function Lists() {
  return (
    <main>
      <ListSection title={'Currently Trending'} />
      <ListSection title={'Best of 2025'} />
      
      <SectionDivider>
        <RecentLists />
        <MostLiked />
      </SectionDivider>
    </main>
  );
}

function ListSection({ title = 'NO TITLE' }) {
  return (
    <SectionRow title={title}>
      <ListCard
        title={'Games You Have to Play at Least Once'}
        user="LoreConsumer"
      />
      <ListCard title={'10 out of 10s'} user="WizMo" />
      <ListCard title={'Masterpieces'} user="darrow420" />
      <ListCard
        title={'My Personal Favorite Games in the Month of October'}
        user="chews.worth"
      />
    </SectionRow>
  );
}

function ListCard({ title = 'NO TITLE', user = 'UNKNOWN' }) {
  const posters = [titan, lbp, mgs, re];

  return (
    <RowCard type={'list'}>
      <div className="row-card__body">
        {posters.map((poster, i) => (
          <img
            src={poster}
            alt=""
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
    </RowCard>
  );
}

function RecentLists() {
  return (
    <SectionRow title={'Recently Liked'} orientation={'column'}>
      <p>LIST</p>
      <p>LIST</p>
      <p>LIST</p>
      <p>LIST</p>
      <p>LIST</p>
      <p>LIST</p>
    </SectionRow>
  );
}

function MostLiked() {
  return (
    <SectionRow title={'Most Liked'} orientation={'column'}>
      <p>LIST</p>
      <p>LIST</p>
      <p>LIST</p>
      <p>LIST</p>
      <p>LIST</p>
      <p>LIST</p>
    </SectionRow>
  );
}
