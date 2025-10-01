import { SectionRow } from "@/components/layouts/section";
import { ListCard } from "./list-card";

function ListSection({ title = 'NO TITLE' }) {
  return (
    <SectionRow title={title}>
      <ListCard
        title={'Games You Have to Play at Least Once'}
        user="LoreConsumer"
      />
      <ListCard title={'10 out of 10s'} user="WizMo" />
      <ListCard title={'Masterpieces'} user="darrow420" />
      <ListCard
        title={'My Personal Favorite Games in the Month of October'}
        user="chews.worth"
      />
    </SectionRow>
  );
}

export default ListSection;