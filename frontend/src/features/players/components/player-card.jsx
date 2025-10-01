import { RowCard } from "@/components/ui/Cards";
import { IoCubeOutline } from "react-icons/io5";

function PlayerCard({ username = 'UKNOWN', gc = 999, games = 999 }) {
  return (
    <RowCard type={'player'}>
      <div className="row-card__pfp" />
      <p className="row-card__username">{username}</p>
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

export { PlayerCard };
