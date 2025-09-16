import SearchForm from "../components/Search/SearchForm";

export default function Games() {
  const filters = ['rating', 'time', 'popular', 'genre']

  return (
    <main>
      <SearchForm filters={filters} placeholder={"Search for games..."}/>
    </main>
  );
}
