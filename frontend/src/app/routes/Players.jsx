import { SectionDivider } from '@/components/layouts/section.jsx';
import { SectionRow } from '@/components/layouts/section.jsx';
import {
  PlayerCardRow,
  PlayerCardCol,
} from '@/features/players/components/player-card';

export default function Players() {
  return (
    <main>
      <SectionRow title="Top Players of October">
        <PlayerCardRow username="LoreConsumer" gc={2987} games={427} />
        <PlayerCardRow username="LoreConsumer" gc={2987} games={427} />
        <PlayerCardRow username="LoreConsumer" gc={2987} games={427} />
        <PlayerCardRow username="LoreConsumer" gc={2987} games={427} />
        <PlayerCardRow username="LoreConsumer" gc={2987} games={427} />
      </SectionRow>
      <SectionRow title="Top Players of October">
        <PlayerCardRow username="LoreConsumer" gc={2987} games={427} />
        <PlayerCardRow username="LoreConsumer" gc={2987} games={427} />
        <PlayerCardRow username="LoreConsumer" gc={2987} games={427} />
        <PlayerCardRow username="LoreConsumer" gc={2987} games={427} />
        <PlayerCardRow username="LoreConsumer" gc={2987} games={427} />
      </SectionRow>

      <SectionDivider>
        <SectionRow title="Discover Players">
          <PlayerCardCol />
          <PlayerCardCol />
          <PlayerCardCol />
          <PlayerCardCol />
          <PlayerCardCol />
          <PlayerCardCol />
        </SectionRow>
        <SectionRow title="Find Friends">
          This will be a paragraph about adding friends. Include a link to the
          search page with the 'player' filter already preset
        </SectionRow>
      </SectionDivider>
    </main>
  );
}
