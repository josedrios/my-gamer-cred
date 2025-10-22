import { useState, useEffect } from 'react';
import {
  IoPersonOutline,
  IoCubeOutline,
  IoPaperPlaneOutline,
  IoEarthOutline,
} from 'react-icons/io5';

function HomeCard({ title, content, id, children }) {
  const [shown, setShown] = useState(false);

  return (
    <div
      className="landing-card"
      id={id === 'share-explore' ? 'home-left' : ''}
    >
      <div className="landing-card__body">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <div className="landing-card__diagram" id={id}>
        {children}
      </div>
    </div>
  );
}

function InfoCard() {
  return (
    <HomeCard
      title={'What is gamer cred?'}
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
  );
}

function ExploreCard() {
  return (
    <HomeCard
      title={'Share and Explore'}
      content={
        'Let the words of others help you find your next game. Also voice your own gaming takes & reviews.'
      }
      id={'share-explore'}
    >
      <IoEarthOutline id="planet" />
      <div
        id="rotating-container"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
      >
        <IoPaperPlaneOutline id="plane" />
      </div>
    </HomeCard>
  );
}

function AccumulateCard() {
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
    <HomeCard
      title={'Accumulate GC'}
      content={
        'Add games you played to your account to accumulate gamer cred. The higher the gamer cred, the more sunlight you need.'
      }
      id={'accumulate-gc'}
    >
      <div id="account-header-row">
        <div id="account-icon-container">
          <IoPersonOutline />
        </div>
        <p id="account-name-example">N00B_420</p>
      </div>
      <div id="gc-value-row">
        <div id="gc-value-icon-container">
          <IoCubeOutline />
        </div>
        <pre onViewportEnter={() => setCountEnter(true)} id="gc-value">
          {rounded}
        </pre>
      </div>
    </HomeCard>
  );
}

export { InfoCard, ExploreCard, AccumulateCard };
