import { motion } from 'motion/react';
import { children } from '@/components/animations.js';

function HotGames() {
  return (
    <motion.div variants={children} className="landing-page-placeholder">
      <p>ADD TOP HOT GAMES SECTION</p>
    </motion.div>
  );
}

export default HotGames;