import { SectionRow } from "@/components/layouts/section";
import { PlayerCardRow, PlayerCardCol } from "./player-card";

function PlayerSection({title= 'NO TITLE', column = false}) {
  const row = (
    <>
        <PlayerCardRow username="LoreConsumer" gc={2987} games={427} />
        <PlayerCardRow username="LoreConsumer" gc={2987} games={427} />
        <PlayerCardRow username="LoreConsumer" gc={2987} games={427} />
        <PlayerCardRow username="LoreConsumer" gc={2987} games={427} />
        <PlayerCardRow username="LoreConsumer" gc={2987} games={427} />
    </>
  );

  const col = (
    <>
      <PlayerCardCol />
      <PlayerCardCol />
      <PlayerCardCol />
      <PlayerCardCol />
      <PlayerCardCol />
      <PlayerCardCol />
    </>
  );

  return (
      <SectionRow title={title}>
        {column ? col : row}
      </SectionRow>
  )
}

export default PlayerSection;