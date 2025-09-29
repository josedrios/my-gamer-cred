import { useState, useEffect } from 'react';
import { HomeCard } from '../UI/Cards';
import { motion, useTransform, animate, useMotionValue } from 'motion/react';
import { IoPersonOutline, IoCubeOutline } from 'react-icons/io5';

export default function AccumulateCard() {
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
        <motion.pre onViewportEnter={() => setCountEnter(true)} id="gc-value">
          {rounded}
        </motion.pre>
      </div>
    </HomeCard>
  );
}
