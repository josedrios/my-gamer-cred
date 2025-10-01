import { SectionRow } from '@/components/layouts/section';
import { ListCardRow, ListCardCol } from './list-card';

function ListSection({ title = 'NO TITLE', column = false }) {
  const row = (
    <>
      <ListCardRow
        title={'Games You Have to Play at Least Once'}
        user="LoreConsumer"
      />
      <ListCardRow title={'10 out of 10s'} user="WizMo" />
      <ListCardRow title={'Masterpieces'} user="darrow420" />
      <ListCardRow
        title={'My Personal Favorite Games in the Month of October'}
        user="chews.worth"
      />
    </>
  );

  const col = (
    <>
      <ListCardCol />
      <ListCardCol />
      <ListCardCol />
      <ListCardCol />
      <ListCardCol />
      <ListCardCol />
    </>
  );

  return <SectionRow title={title}>{column ? col : row}</SectionRow>;
}

export default ListSection;
