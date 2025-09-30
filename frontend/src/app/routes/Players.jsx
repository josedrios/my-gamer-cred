import { SectionRow, SectionDivider } from '@/components/UI/Sections.jsx';
import { RowCard } from '@/components/UI/Cards.jsx';
import { IoCubeOutline } from 'react-icons/io5';

export default function Players() {
  return (
    <main>
      <PlayerSection title='On the Rise'/>
      <PlayerSection title='Popular Players'/>

      <SectionDivider>
        <FellowGamers />
        <MostGamerCred />        
      </SectionDivider>
    </main>
  );
}

function PlayerSection({title= 'NO TITLE'}) {
  return (
      <SectionRow title={title}>
        <PlayerCard username="LoreConsumer" gc={2987} games={427} />
        <PlayerCard username="LoreConsumer" gc={2987} games={427} />
        <PlayerCard username="LoreConsumer" gc={2987} games={427} />
        <PlayerCard username="LoreConsumer" gc={2987} games={427} />
        <PlayerCard username="LoreConsumer" gc={2987} games={427} />
      </SectionRow>
  )
}

function PlayerCard({ username = 'UKNOWN', gc = 999, games = 999 }) {
  return (
    <RowCard type={'player'}>
      <div className="row-card__pfp" />
      <p className='row-card__username'>{username}</p>
      <div className="row-card__user-misc">
        <p className="row-card__gc">
          <IoCubeOutline /> {gc}
        </p>
        <p>&nbsp;|&nbsp;</p>
        <p className="row-card__game-count">{games} games</p>
      </div>
    </RowCard>
  );
}

// generate a random list of people above a certain follower count threshold every month
// and add them here
function FellowGamers() {
 return (
   <SectionRow title='Discover New Gamers' orientation='column'>
    <p>GAMER</p>
    <p>GAMER</p>
    <p>GAMER</p>
    <p>GAMER</p>
    <p>GAMER</p>
    <p>GAMER</p>
  </SectionRow>
 )
}

function MostGamerCred() {
 return (
   <SectionRow title='Most Gamer Cred' orientation='column'>
    <p>GAMER</p>
    <p>GAMER</p>
    <p>GAMER</p>
    <p>GAMER</p>
    <p>GAMER</p>
    <p>GAMER</p>
  </SectionRow>
 )
}
