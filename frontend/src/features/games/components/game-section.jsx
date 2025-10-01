import { SectionRow } from '@/components/layouts/section';
import { GameCardRow, GameCardCol } from '@/features/games/components/game-card';
import batman from '@/assets/images/game_cover.jpg';
import elden from '@/assets/images/game_cover2.jpg';
import titan from '@/assets/images/game_cover3.jpg';
import lbp from '@/assets/images/game_cover4.jpg';
import mgs from '@/assets/images/game_cover5.jpg';
import re from '@/assets/images/game_cover6.jpg';

function GameSection({ title = 'NO TITLE', column = false }) {
  const row = (
    <>
      <GameCardRow source={elden} title="Elden Ring" />
      <GameCardRow source={batman} title="Batman Arkham Asylum" />
      <GameCardRow source={titan} title="Titan Fall 2" />
      <GameCardRow source={lbp} title="LittleBigPlanet" />
      <GameCardRow source={mgs} title="Metal Gear Solid 3: Snake Eater" />
      <GameCardRow source={re} title="Resident Evil 2 Remake" />
    </>
  );

  const col = (
    <>
      <GameCardCol/>
      <GameCardCol/>
      <GameCardCol/>
      <GameCardCol/>
      <GameCardCol/>
      <GameCardCol/>
    </>
  )

  return (
    <SectionRow title={title}>
      {column ? col : row}
    </SectionRow>
  );
}

export default GameSection;