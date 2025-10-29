import { SectionDivider } from '@/components/layouts/section.jsx';
import { SectionRow } from '@/components/layouts/section.jsx';
import { UniversalCard } from '@/components/ui/cards';
import PlayerCard from '@/features/players/components/player-card';

export default function Players() {
  return (
    <main>
      <SectionRow title="Reviewers of the Month">
        <PlayerCard cov={1} />
        <PlayerCard cov={2} />
        <PlayerCard cov={1} />
        <PlayerCard cov={2} />
      </SectionRow>
      <SectionRow title="Most Followed in October">
        <PlayerCard cov={1} />
        <PlayerCard cov={2} />
        <PlayerCard cov={1} />
        <PlayerCard cov={2} />
      </SectionRow>

      <SectionDivider>
        <SectionRow title="Discover Players">
          <UniversalCard type='player'/>
          <UniversalCard type='player'/>
          <UniversalCard type='player'/>
          <UniversalCard type='player'/>
          <UniversalCard type='player'/>
          <UniversalCard type='player'/>
        </SectionRow>
        <SectionRow title="Featured">
        </SectionRow>
      </SectionDivider>
    </main>
  );
}
