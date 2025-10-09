import { motion } from 'motion/react';
import { IoCubeOutline } from 'react-icons/io5';
import { children } from '@/components/animations.js';

function Greeter() {
  return (
    <motion.div variants={children} class="home-greeter">
      <h2 className="home-greeter__title">MY GAMER CRED</h2>
      <div className="home-greeter__gc">
        <IoCubeOutline />
      </div>
      <p className="home-greeter__subtitle">real gamers, real reviews</p>
    </motion.div>
  );
}

export default Greeter;