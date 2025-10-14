import { SectionDivider } from '@/components/layouts/section.jsx';
import { SectionRow } from '@/components/layouts/section.jsx';
import {
  PlayerCardRow,
  PlayerCardCol,
} from '@/features/players/components/player-card';

export default function Players() {
  return (
    <main>
      <SectionRow title="Reviewers of the Month">
        <PlayerCardRow username="LoreConsumer" gc={2987} games={427} />
        <PlayerCardRow username="LoreConsumer" gc={2987} games={427} />
        <PlayerCardRow username="LoreConsumer" gc={2987} games={427} />
        <PlayerCardRow username="LoreConsumer" gc={2987} games={427} />
        <PlayerCardRow username="LoreConsumer" gc={2987} games={427} />
      </SectionRow>
      <SectionRow title="Most Followed in October">
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
        {/* This will be a paragraph about adding friends. Include a link to the
          search page with the 'player' filter already preset */}
        <SectionRow title="Find Friends" id="section-find-friends">
          <p>
            Compare gamer cred with people you know, seeing their gaming
            activity, reviews and more!
          </p>
        </SectionRow>
      </SectionDivider>
    </main>
  );
}
