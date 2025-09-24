export default function Lists() {
  return (
    <main>
      <ListSection title={'Trending in September'} />
      <ListSection title={"2025's Best"} />
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
      <div className="list-poster-cards">include cards</div>
      <p>My Game List</p>
      <div>
        <div className="list-user-pfp" />
        <p className="list-user-name">LoreConsumer</p>
      </div>
    </div>
  );
}
