import { useState, useEffect } from 'react';
import {
  IoCubeOutline,
  IoPersonOutline,
  IoEarthOutline,
  IoPaperPlaneOutline,
} from 'react-icons/io5';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { HomeCard } from '../components/UI/Cards';
import { container, children } from '../components/animations.js';

export default function Home() {
  const [countEnter, setCountEnter] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    if (!countEnter) return;
    const controls = animate(count, 2841, {
      duration: 20,
      ease: [0.25, 1, 0.5, 1],
    });
    return () => controls.stop();
  }, [countEnter]);

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
        <HomeCard
          title={'what is gamer cred?'}
          content={
            'Gamer cred is acquired when playing games of great taste. It separates the seasoned from the unseasoned.'
          }
          id={'gc-info'}
        >
          {[...Array(25)].map((_, i) => {
            return (
              <div key={i} id={i == 18 ? 'glowing-gc' : ''}>
                {' '}
                <IoCubeOutline />{' '}
              </div>
            );
          })}
        </HomeCard>
        <HomeCard
          title={'share and explore'}
          content={
            'Let the words of others help you find your next game. Also voice your own gaming takes & reviews.'
          }
          id={'share-explore'}
        >
          <IoEarthOutline id="planet" />
          <motion.div
            id="rotating-container"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
          >
            <IoPaperPlaneOutline id="plane" />
          </motion.div>
        </HomeCard>
        <HomeCard
          title={'accumulate gc'}
          content={
            'Add games you played to your account to accumulate gamer cred. The higher the gamer cred, the more sunlight you need.'
          }
          id={'accumulate-gc'}
        >
          <div id="account-header-row">
            <div id="account-icon-container">
              <IoPersonOutline />
            </div>
            <p id="account-name-example">DRAGONSLAYER420</p>
          </div>
          <div id="gc-value-row">
            <div id="gc-value-icon-container">
              <IoCubeOutline />
            </div>
            <motion.pre
              onViewportEnter={() => setCountEnter(true)}
              id="gc-value"
            >
              {rounded}
            </motion.pre>
          </div>
        </HomeCard>
      </section>
    </main>
  );
}
