import { SectionDivider } from '@/components/layouts/section.jsx';
import ListSection from '@/features/lists/components/list-section';

export default function Lists() {
  return (
    <main>
      <ListSection title={'Currently Trending'} />
      <ListSection title={'Best of October'} />
      
      <SectionDivider>
        <ListSection title={'Recently Liked'} column={true}/>
        <ListSection title={'Best of 2025'} column={true}/>
      </SectionDivider>
    </main>
  );
}