import { useState } from 'react';
import { IoCubeOutline } from 'react-icons/io5';
import { motion } from 'motion/react';

const cardVariants = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 0.75 },
  },
};

export default function Home() {
  return (
    <main>
      <div id="home-greeting-container">
        <h2 id="home-greeting">MY GAMER CRED</h2>
        <div id="floating-gc-container">
          <IoCubeOutline />
        </div>
        <p id="sub-home-greeting">real gamers, real takes</p>
      </div>

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
            'Let the words of others help you find your next game or voice your unheard gaming takes & reviews.'
          }
          id={'share-explore'}
        >
          ...
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
      initial="offscreen"
      animate={shown ? 'onscreen' : ''}
      onViewportEnter={() => setShown(true)}
      viewport={{ amount: 0.85 }}
    >
      <div className="home-card-body">
        <h3>{title.toUpperCase()}</h3>
        <p>{content}</p>
      </div>
      <div className="home-card-diagram" id={id}>
        {children}
      </div>
    </motion.div>
  );
}
