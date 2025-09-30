import SearchForm from '@/components/Search/SearchForm';

export default function Search() {
  const filters = ['games', 'lists', 'players'];

  return (
    <main>
      <SearchForm filters={filters} placeholder={'Search...'} />
    </main>
  );
}
