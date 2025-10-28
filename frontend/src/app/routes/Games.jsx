import { SectionRow, SectionDivider } from '@/components/layouts/section';
import { PosterCard } from '@/features/games/components/game-card';
import { UniversalCard } from '@/components/ui/cards';
import batman from '@/assets/images/game_cover.jpg';
import elden from '@/assets/images/game_cover2.jpg';
import titan from '@/assets/images/game_cover3.jpg';
import lbp from '@/assets/images/game_cover4.jpg';
import mgs from '@/assets/images/game_cover5.jpg';
import re from '@/assets/images/game_cover6.jpg';
import { rand } from '@/temp-util';

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
          <UniversalCard
            title="Risk of Rain 2"
            value={rand(80, 100)}
            username="SOMEDUDE"
            info="This game is probably the greatest roguelike I have ever played. It is a shame for man to wander this earth without ever indulging with the greatness the earth offers."
            comments={rand(5, 100)}
            upvotes={rand(700, 999)}
            downvotes={rand(10, 30)}
          />
          <UniversalCard
            title="Risk of Rain 2"
            value={rand(80, 100)}
            username="SOMEDUDE"
            info="This game is probably the greatest roguelike I have ever played. It is a shame for man to wander this earth without ever indulging with the greatness the earth offers."
            comments={rand(5, 100)}
            upvotes={rand(700, 999)}
            downvotes={rand(10, 30)}
          />
          <UniversalCard
            title="Risk of Rain 2"
            value={rand(80, 100)}
            username="SOMEDUDE"
            info="This game is probably the greatest roguelike I have ever played. It is a shame for man to wander this earth without ever indulging with the greatness the earth offers."
            comments={rand(5, 100)}
            upvotes={rand(700, 999)}
            downvotes={rand(10, 30)}
          />
          <UniversalCard
            title="Risk of Rain 2"
            value={rand(80, 100)}
            username="SOMEDUDE"
            info="This game is probably the greatest roguelike I have ever played. It is a shame for man to wander this earth without ever indulging with the greatness the earth offers."
            comments={rand(5, 100)}
            upvotes={rand(700, 999)}
            downvotes={rand(10, 30)}
          />
          <UniversalCard
            title="Risk of Rain 2"
            value={rand(80, 100)}
            username="SOMEDUDE"
            info="This game is probably the greatest roguelike I have ever played. It is a shame for man to wander this earth without ever indulging with the greatness the earth offers. I am also writing this to make the UI for the cards longer and longer and all that stuff and gibberish"
            comments={rand(5, 100)}
            upvotes={rand(700, 999)}
            downvotes={rand(10, 30)}
          />
          <UniversalCard
            title="Risk of Rain 2"
            value={rand(80, 100)}
            username="SOMEDUDE"
            info="This game is probably the greatest roguelike I have ever played. It is a shame for man to wander this earth without ever indulging with the greatness the earth offers."
            comments={rand(5, 100)}
            upvotes={rand(700, 999)}
            downvotes={rand(10, 30)}
          />
        </SectionRow>
        <SectionRow title="2025's Best">
          <PosterCard sidebar source={elden} title="Elden Ring" />
          <PosterCard sidebar source={batman} title="Batman Arkham Asylum" />
          <PosterCard sidebar source={titan} title="Titan Fall 2" />
          <PosterCard sidebar source={lbp} title="LittleBigPlanet" />
          <PosterCard
            sidebar
            source={mgs}
            title="Metal Gear Solid 3: Snake Eater"
          />
          <PosterCard sidebar source={re} title="Resident Evil 2 Remake" />
        </SectionRow>
      </SectionDivider>
    </main>
  );
}
