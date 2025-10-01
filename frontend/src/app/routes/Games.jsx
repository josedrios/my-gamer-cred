import SearchForm from '@/components/Search/SearchForm.jsx';
import GameSection from '@/features/games/components/game-section';
import { SectionDivider } from '@/components/layouts/section';

export default function Games() {
  const filters = ['rating', 'time', 'popular', 'genre'];

  return (
    <main>
      <SearchForm filters={filters} placeholder={'Search for games...'} />
      <GameSection title={'Currently Trending'} />
      <GameSection title={'Recently Played'} />
      <SectionDivider>
        <GameSection title={'Hot Reviews'} />
        <GameSection title={'Best of 2025'} />
      </SectionDivider>
    </main>
  );
}