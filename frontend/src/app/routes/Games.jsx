import { SectionRow, SectionDivider } from '@/components/layouts/section';
import { PosterCard } from '@/features/games/components/poster-card';
import { ReviewCard } from '@/features/reviews/components/review-card';
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
        <PosterCard source={elden} title="Elden Ring" />
        <PosterCard source={batman} title="Batman Arkham Asylum" />
        <PosterCard source={titan} title="Titan Fall 2" />
        <PosterCard source={lbp} title="LittleBigPlanet" />
        <PosterCard source={mgs} title="Metal Gear Solid 3: Snake Eater" />
        <PosterCard source={re} title="Resident Evil 2 Remake" />
      </SectionRow>
      <SectionRow title="Recently Played">
        <PosterCard source={elden} title="Elden Ring" />
        <PosterCard source={batman} title="Batman Arkham Asylum" />
        <PosterCard source={titan} title="Titan Fall 2" />
        <PosterCard source={lbp} title="LittleBigPlanet" />
        <PosterCard source={mgs} title="Metal Gear Solid 3: Snake Eater" />
        <PosterCard source={re} title="Resident Evil 2 Remake" />
      </SectionRow>
      <SectionDivider>
        <SectionRow title="Hot Reviews">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </SectionRow>
        <SectionRow title="2025's Best">
          <PosterCard source={elden} title="Elden Ring" />
          <PosterCard source={batman} title="Batman Arkham Asylum" />
          <PosterCard source={titan} title="Titan Fall 2" />
          <PosterCard source={lbp} title="LittleBigPlanet" />
          <PosterCard source={mgs} title="Metal Gear Solid 3: Snake Eater" />
          <PosterCard source={re} title="Resident Evil 2 Remake" />
        </SectionRow>
      </SectionDivider>
    </main>
  );
}
