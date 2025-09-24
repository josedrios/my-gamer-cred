export default function Lists() {
  return (
    <main>
      <ListSection title={'Trending in September'} />
      <ListSection title={'Best of 2025'} />
    </main>
  );
}

function ListSection({ title }) {
  return (
    <div className="list-section">
      <h4 className="section-header">{title}</h4>
      <div className="list-section-children">
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
      </div>
    </div>
  );
}

function ListCard() {
  return (
    <div className="list-card">
      <p className="list-game-count">6 games</p>
      <div className="list-poster-cards"></div>
      <p className="list-card-title">My Game List</p>
      <div className="list-user-container">
        <div className="list-user-pfp" />
        <p className="list-user-name">LoreConsumer</p>
      </div>
    </div>
  );
}
