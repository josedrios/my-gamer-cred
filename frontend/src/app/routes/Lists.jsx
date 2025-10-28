import { SectionRow, SectionDivider } from '@/components/layouts/section.jsx';
import { ListCard } from '@/features/lists/components/list-card';
import { UniversalCard } from '@/components/ui/cards';
import { rand } from '@/temp-util';

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
          <UniversalCard
            title="Games You Must Play at Least Once In Your Life"
            type="list"
            value={rand(12, 60)}
            info="This is a really good list, I am just writing extra filler words to see how the UI of the list cards turn out to look. Do not mind the extra words I put in here to make the info section longer and so on and stuff."
            comments={rand(5, 100)}
            upvotes={rand(700, 999)}
            downvotes={rand(10, 30)}
          />
          <UniversalCard
            title="Games You Must Play at Least Once In Your Life"
            type="list"
            value={rand(12, 60)}
            info="This is a really good list, I am just writing extra filler words to see how the UI of the list cards turn out to look. Do not mind the extra words I put in here to make the info section longer and so on and stuff."
            comments={rand(5, 100)}
            upvotes={rand(700, 999)}
            downvotes={rand(10, 30)}
          />
          <UniversalCard
            title="Games You Must Play at Least Once In Your Life"
            type="list"
            value={rand(12, 60)}
            info="This is a really good list, I am just writing extra filler words to see how the UI of the list cards turn out to look. Do not mind the extra words I put in here to make the info section longer and so on and stuff."
            comments={rand(5, 100)}
            upvotes={rand(700, 999)}
            downvotes={rand(10, 30)}
          />
          <UniversalCard
            title="Games You Must Play at Least Once In Your Life"
            type="list"
            value={rand(12, 60)}
            info="This is a really good list, I am just writing extra filler words to see how the UI of the list cards turn out to look. Do not mind the extra words I put in here to make the info section longer and so on and stuff."
            comments={rand(5, 100)}
            upvotes={rand(700, 999)}
            downvotes={rand(10, 30)}
          />
          <UniversalCard
            title="Games You Must Play at Least Once In Your Life"
            type="list"
            value={rand(12, 60)}
            info="This is a really good list, I am just writing extra filler words to see how the UI of the list cards turn out to look. Do not mind the extra words I put in here to make the info section longer and so on and stuff."
            comments={rand(5, 100)}
            upvotes={rand(700, 999)}
            downvotes={rand(10, 30)}
          />
        </SectionRow>
        <SectionRow title="Featured">
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
