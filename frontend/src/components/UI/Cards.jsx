import { useState } from 'react';
import { motion } from 'motion/react';
import { whenInViewport } from '../animations.js';

export function HomeCard({ title, content, id, children }) {
  const [shown, setShown] = useState(false);

  return (
    <motion.div
      className="home-card"
      variants={whenInViewport}
      initial={'offscreen'}
      animate={shown ? 'onscreen' : ''}
      onViewportEnter={() => setShown(true)}
      viewport={{ amount: 1 }}
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

export function RowCard({ children, type }) {
  return (
    <div className={`row-card ${type ? `row-card--${type}` : ''}`}>
      {children}
    </div>
  );
}
