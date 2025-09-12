import { useState } from 'react';
import { IoCubeOutline } from 'react-icons/io5';
import { IoEarthOutline } from 'react-icons/io5';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { easeOut, motion } from 'motion/react';

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      type: easeOut,
    },
  },
};

const items = {
  hidden: {
    y: 75,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: 'ease-out', bounce: 0, duration: 0.5 },
  },
};

const cardVariants = {
  offscreen: { y: 75, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: 'ease-out', bounce: 0, duration: 1 },
  },
};

export default function Home() {
  return (
    <main>
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={items} id="home-greeting-container">
          <h2 id="home-greeting">My Gamer Cred</h2>
          <div id="floating-gc-container">
            <IoCubeOutline />
          </div>
          <p id="sub-home-greeting">real gamers, real reviews</p>
        </motion.div>

        <motion.div variants={items} className="landing-page-placeholder">
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
            'Add games you played to your account to accumulate gamer cred. The higher the gamer cred, the more you need to be in the sun.'
          }
          id={'accumulate-gc'}
        >
          ...
        </HomeCard>
      </section>
    </main>
  );
}

function HomeCard({ title, content, id, children }) {
  const [shown, setShown] = useState(false);

  return (
    <motion.div
      className="home-card"
      variants={cardVariants}
      initial={'offscreen'}
      animate={shown ? 'onscreen' : ''}
      onViewportEnter={() => setShown(true)}
      viewport={{ amount: 0.7 }}
      id={id === 'share-explore' ? 'home-left' : ''}
    >
      <div className="home-card-body">
        <h3>{title.toUpperCase()}</h3>
        <p>{content}</p>
      </div>
      <motion.div className="home-card-diagram" id={id}>
        {children}
      </motion.div>
    </motion.div>
  );
}
