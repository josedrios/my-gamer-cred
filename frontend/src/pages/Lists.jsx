import batman from '../assets/images/game_cover.jpg';
import elden from '../assets/images/game_cover2.jpg';
import titan from '../assets/images/game_cover3.jpg';
import lbp from '../assets/images/game_cover4.jpg';
import mgs from '../assets/images/game_cover5.jpg';
import re from '../assets/images/game_cover6.jpg';
import { SectionRow, SectionDivider } from '../components/UI/Sections.jsx';

export default function Lists() {
  return (
    <main>
      <ListSection title={'Trending in September'} />
      <ListSection title={'Best of 2025'} />
      <SectionDivider>
        <RecentLists />
        <Temporary />
      </SectionDivider>
    </main>
  );
}

function ListSection({ title = 'NO TITLE' }) {
  return (
    <SectionRow title={title}>
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
    </SectionRow>
  );
}

function ListCard() {
  const posters = [titan, lbp, mgs, re];

  return (
    <div className="list-card">
      <div className="list-posters">
        {posters.map((poster, i) => (
          <img
            src={poster}
            alt=""
            style={{
              left: `${i * 60}px`,
              zIndex: 1000 - i,
            }}
          />
        ))}
        <p
          className="list-game-count"
          style={{
            zIndex: 1001,
          }}
        >
          6 games
        </p>
      </div>
      <p className="list-card-title">My Game List</p>
      <div className="list-user-container">
        <div className="list-user-pfp" />
        <p className="list-user-name">LoreConsumer</p>
      </div>
    </div>
  );
}

function RecentLists() {
  return (
    <SectionRow title={'Recently Created Lists'} orientation={'column'}>
      <div>new list</div>
      <div>new list</div>
      <div>new list</div>
      <div>new list</div>
      <div>new list</div>
      <div>new list</div>
    </SectionRow>
  );
}

function Temporary() {
  return <SectionRow title={'Temporary'}></SectionRow>;
}
