import SearchForm from '@/components/search/search-form';

export default function Search() {
  const filters = ['games', 'lists', 'players'];

  return (
    <main>
      <SearchForm filters={filters} placeholder={'Search...'} />
    </main>
  );
}
