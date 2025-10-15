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
        <PlayerCardRow username="I AM USER" gc={2987} games={427} />
        <PlayerCardRow username="gamer123" gc={2987} games={427} />
        <PlayerCardRow username="dragonslayer" gc={2987} games={427} />
        <PlayerCardRow username="Xx_yolo_xX" gc={2987} games={427} />
        <PlayerCardRow username="onepiecelover" gc={2987} games={427} />
      </SectionRow>
      <SectionRow title="Most Followed in October">
        <PlayerCardRow username="pizzaman415" gc={2987} games={427} />
        <PlayerCardRow username="johndoe" gc={2987} games={427} />
        <PlayerCardRow username="minecraft" gc={2987} games={427} />
        <PlayerCardRow username="i_use_arch_btw" gc={2987} games={427} />
        <PlayerCardRow username="asd.asd.asd" gc={2987} games={427} />
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
            Compare gamer cred with people you know. See their gaming
            activity, reviews and more!
          </p>
        </SectionRow>
      </SectionDivider>
    </main>
  );
}
