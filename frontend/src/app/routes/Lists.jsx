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
          {/* USE ROW CARDS? */}
          <ListCardRow
          description
            title={'Games You Have to Play at Least Once'}
            user="LoreConsumer"
            column
          />
          <ListCardRow description title={'10 out of 10s'} user="WizMo" column />
          <ListCardRow description title={'Masterpieces'} user="darrow420" column />
          <ListCardRow
          description
            title={'My Personal Favorite Games in the Month of October'}
            user="chews.worth"
            column
          />
        </SectionRow>
        <SectionRow title="Featured">
          {/* USE ROW CARDS? */}
          <ListCardRow
            title={'Games You Have to Play at Least Once'}
            user="LoreConsumer"
            column
          />
          <ListCardRow title={'10 out of 10s'} user="WizMo" column />
          <ListCardRow title={'Masterpieces'} user="darrow420" column />
          <ListCardRow
            title={'My Personal Favorite Games in the Month of October'}
            user="chews.worth"
            column
          />
        </SectionRow>
      </SectionDivider>
    </main>
  );
}
