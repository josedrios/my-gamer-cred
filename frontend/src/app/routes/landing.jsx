import { motion } from 'motion/react';
import { container } from '@/components/animations.js';
import Greeter from '@/features/landing/components/greeter';
import GameSection from '@/features/games/components/game-section';
import {
  InfoCard,
  ExploreCard,
  AccumulateCard,
} from '@/features/landing/components/landing-cards';

export default function Landing() {
  return (
    <main>
      <motion.div variants={container} initial="hidden" animate="show">
        <Greeter />
      </motion.div>
      <GameSection title={'Review Your Favorite Games'} />
      <section id="landing-card-section">
        <InfoCard />
        <ExploreCard />
        <AccumulateCard />
      </section>
    </main>
  );
}
