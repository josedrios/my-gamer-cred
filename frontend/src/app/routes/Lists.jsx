import { SectionRow, SectionDivider } from '@/components/layouts/section.jsx';
import {
  ListCardRow,
  ListCardCol,
} from '@/features/lists/components/list-card';

export default function Lists() {
  return (
    <main>
      <SectionRow title="Currently Trending">
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
      </SectionRow>
      <SectionRow title="Best of October">
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
      </SectionRow>

      <SectionDivider>
        <SectionRow title="Recently Liked">
          <ListCardCol />
          <ListCardCol />
          <ListCardCol />
          <ListCardCol />
          <ListCardCol />
          <ListCardCol />
        </SectionRow>
        <SectionRow title="Best of 2025">
          <ListCardCol />
          <ListCardCol />
          <ListCardCol />
          <ListCardCol />
          <ListCardCol />
          <ListCardCol />
        </SectionRow>
      </SectionDivider>
    </main>
  );
}
