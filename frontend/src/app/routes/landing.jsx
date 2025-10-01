import { motion } from 'motion/react';
import { container } from '@/components/animations.js';
import InfoCard from '@/features/landing/components/info-card';
import ExploreCard from '@/features/landing/components/explore-card';
import AccumulateCard from '@/features/landing/components/accumulate-card';
import Greeter from '@/features/landing/components/greeter';
import HotGames from '@/features/landing/components/hot-games';

export default function Landing() {
  return (
    <main>
      <motion.div variants={container} initial="hidden" animate="show">
        <Greeter />
        <HotGames />
      </motion.div>
      <section id="home-card-section">
        <InfoCard />
        <ExploreCard />
        <AccumulateCard />
      </section>
    </main>
  );
}