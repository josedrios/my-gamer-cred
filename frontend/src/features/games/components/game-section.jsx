import { SectionRow } from "@/components/layouts/section";
import { GameCard } from "@/features/games/components/game-card";
import batman from '@/assets/images/game_cover.jpg';
import elden from '@/assets/images/game_cover2.jpg';
import titan from '@/assets/images/game_cover3.jpg';
import lbp from '@/assets/images/game_cover4.jpg';
import mgs from '@/assets/images/game_cover5.jpg';
import re from '@/assets/images/game_cover6.jpg';

function GameSection({ title = 'NO TITLE' }) {
  return (
    <SectionRow title={title}>
      <GameCard source={elden} title="Elden Ring" />
      <GameCard source={batman} title="Batman Arkham Asylum" />
      <GameCard source={titan} title="Titan Fall 2" />
      <GameCard source={lbp} title="LittleBigPlanet" />
      <GameCard source={mgs} title="Metal Gear Solid 3: Snake Eater" />
      <GameCard source={re} title="Resident Evil 2 Remake" />
    </SectionRow>
  );
}

export default GameSection;