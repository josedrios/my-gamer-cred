import { motion } from 'motion/react';
import { container } from '@/components/animations.js';
import Greeter from '@/features/landing/components/greeter';
import GameSection from '@/features/games/components/game-section';
import {
  InfoCard,
  ExploreCard,
  AccumulateCard,
} from '@/features/landing/components/landing-cards';
import '@/styles/main.scss'

export default function Landing() {
  return (
    <main>
      <motion.div variants={container} initial="hidden" animate="show">
        <Greeter />
      </motion.div>

      {/* UNDER THE WORKS, STUDY UP ON LANDING PAGES AND PLAN OUT DESIGNS BEFORE WORKING ON THIS AGAIN */}

      {/* <GameSection title={'Review Your Favorite Games'} />
      <section id="landing-card-section">
        <InfoCard />
        <ExploreCard />
        <AccumulateCard />
      </section> */}
    </main>
  );
}
