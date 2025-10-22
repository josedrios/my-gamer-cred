import { SectionRow, SectionDivider } from '@/components/layouts/section';
import {
  GameCardRow,
  GameCardCol,
} from '@/features/games/components/game-card';
import batman from '@/assets/images/game_cover.jpg';
import elden from '@/assets/images/game_cover2.jpg';
import titan from '@/assets/images/game_cover3.jpg';
import lbp from '@/assets/images/game_cover4.jpg';
import mgs from '@/assets/images/game_cover5.jpg';
import re from '@/assets/images/game_cover6.jpg';

export default function Games() {
  return (
    <main>
      <SectionRow title="Currently Trending">
        <GameCardRow source={elden} title="Elden Ring" />
        <GameCardRow source={batman} title="Batman Arkham Asylum" />
        <GameCardRow source={titan} title="Titan Fall 2" />
        <GameCardRow source={lbp} title="LittleBigPlanet" />
        <GameCardRow source={mgs} title="Metal Gear Solid 3: Snake Eater" />
        <GameCardRow source={re} title="Resident Evil 2 Remake" />
      </SectionRow>
      <SectionRow title="Recently Played">
        <GameCardRow source={elden} title="Elden Ring" />
        <GameCardRow source={batman} title="Batman Arkham Asylum" />
        <GameCardRow source={titan} title="Titan Fall 2" />
        <GameCardRow source={lbp} title="LittleBigPlanet" />
        <GameCardRow source={mgs} title="Metal Gear Solid 3: Snake Eater" />
        <GameCardRow source={re} title="Resident Evil 2 Remake" />
      </SectionRow>
      <SectionDivider>
        <SectionRow title="Hot Reviews">
          <GameCardCol />
          <GameCardCol />
          <GameCardCol />
          <GameCardCol />
          <GameCardCol />
          <GameCardCol />
        </SectionRow>
        <SectionRow title="2025's Best">
          <GameCardCol />
          <GameCardCol />
          <GameCardCol />
          <GameCardCol />
          <GameCardCol />
          <GameCardCol />
        </SectionRow>
      </SectionDivider>
    </main>
  );
}
