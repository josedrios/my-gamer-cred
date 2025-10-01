import { motion } from 'motion/react';
import { IoPaperPlaneOutline, IoEarthOutline } from 'react-icons/io5';
import { HomeCard } from '@/components/ui/Cards';

export default function ExploreCard() {
  return (
    <HomeCard
      title={'Share and Explore'}
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
  );
}
