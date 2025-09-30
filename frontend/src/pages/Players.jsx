import { SectionRow } from '../components/UI/Sections.jsx';
import { RowCard } from '../components/UI/Cards.jsx';
import { IoCubeOutline } from 'react-icons/io5';

export default function Players() {
  return (
    <main>
      <PlayersSection title='On the Rise'/>
      <PlayersSection title='Popular Players'/>
    </main>
  );
}

function PlayersSection({title= 'NO TITLE'}) {
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
