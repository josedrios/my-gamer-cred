import { HomeCard } from '../UI/Cards';
import { IoCubeOutline } from 'react-icons/io5';

export default function InfoCard() {
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
