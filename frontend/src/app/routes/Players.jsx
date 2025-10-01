import { SectionDivider } from '@/components/layouts/section.jsx';
import PlayerSection from '@/features/players/components/player-section';

export default function Players() {
  return (
    <main>
      <PlayerSection title="On the Rise" />
      <PlayerSection title="Popular Players" />

      <SectionDivider>
        <PlayerSection title="Discover New Gamers" column={true}/>
        <PlayerSection title="Most Gamer Cred" column={true}/>
      </SectionDivider>
    </main>
  );
}
