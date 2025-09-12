import { IoCubeOutline } from 'react-icons/io5';
import { motion } from 'motion/react';
import { container, children } from '../components/animations.js';
import InfoCard from '../components/HomeCards/InfoCard.jsx';
import ExploreCard from '../components/HomeCards/ExploreCard.jsx';
import AccumulateCard from '../components/HomeCards/AccumulateCard.jsx';

export default function Home() {
  return (
    <main>
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={children} id="home-greeting-container">
          <h2 id="home-greeting">MY GAMER CRED</h2>
          <div id="floating-gc-container">
            <IoCubeOutline />
          </div>
          <p id="sub-home-greeting">real gamers, real reviews</p>
        </motion.div>

        <motion.div variants={children} className="landing-page-placeholder">
          <p>ADD TOP HOT GAMES SECTION</p>
        </motion.div>
      </motion.div>

      <section id="home-card-section">
        <InfoCard />
        <ExploreCard />
        <AccumulateCard />
      </section>
    </main>
  );
}
