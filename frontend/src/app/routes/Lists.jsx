import { SectionRow, SectionDivider } from '@/components/layouts/section.jsx';
import {
  ListCard, ListCardDetailed
} from '@/features/lists/components/list-card';

export default function Lists() {
  return (
    <main>
      <SectionRow title="Currently Trending">
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
      <SectionRow title="Best of October">
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

      <SectionDivider>
        <SectionRow title="Recently Liked">
          <ListCardDetailed />
          <ListCardDetailed />
          <ListCardDetailed />
          <ListCardDetailed />
          <ListCardDetailed />
          <ListCardDetailed />
        </SectionRow>
        <SectionRow title="Featured">
          {/* USE ROW CARDS? */}
          <ListCard
            title={'Games You Have to Play at Least Once'}
            user="LoreConsumer"
            column
          />
          <ListCard title={'10 out of 10s'} user="WizMo" column />
          <ListCard title={'Masterpieces'} user="darrow420" column />
          <ListCard
            title={'My Personal Favorite Games in the Month of October'}
            user="chews.worth"
            column
          />
        </SectionRow>
      </SectionDivider>
    </main>
  );
}
