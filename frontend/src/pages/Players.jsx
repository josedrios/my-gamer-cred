import { SectionRow } from '../components/UI/Sections.jsx';
import { RowCard } from '../components/UI/Cards.jsx';

export default function Players() {
  return (
    <main>
      <SectionRow title={'Popular Players'}>
        <PlayerCard username="LoreConsumer" gc={2987} games={427} />
        <PlayerCard username="LoreConsumer" gc={2987} games={427} />
        <PlayerCard username="LoreConsumer" gc={2987} games={427} />
        <PlayerCard username="LoreConsumer" gc={2987} games={427} />
        <PlayerCard username="LoreConsumer" gc={2987} games={427} />
      </SectionRow>
    </main>
  );
}

function PlayerCard({ username = 'UKNOWN', gc = 999, games = 999 }) {
  return (
    <RowCard type={'player'}>
      <div className="row-card__pfp" />
      <p>{username}</p>
      <div className="row-card__user-misc">
        <p className="row-card__gc">{gc}</p>
        <p>&nbsp;/&nbsp;</p>
        <p className="row-card__game-count">{games} games</p>
      </div>
    </RowCard>
  );
}
