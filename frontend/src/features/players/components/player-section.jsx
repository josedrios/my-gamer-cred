import { SectionRow } from "@/components/layouts/section";
import { PlayerCard } from "./player-card";

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

export default PlayerSection;