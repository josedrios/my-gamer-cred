import SearchForm from "../components/Search/SearchForm";

export default function Games() {
  const filters = ['rating', 'time', 'popular', 'genre']

  return (
    <main>
      <SearchForm filters={filters} placeholder={"Search for games..."}/>
      <GameSection />
    </main>
  );
}

function GameSection() {
  return (
    <section className="game-section">
      <h3>Trending in September</h3>
      <div className="game-section-children">
        <div className="test" />
        <div className="test" />
        <div className="test" />
        <div className="test" />
        <div className="test" />
        <div className="test" />
      </div>
    </section>
  )
}
