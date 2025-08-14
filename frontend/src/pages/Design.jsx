import InfoBox from '../components/UI/InfoBox';

export default function Design() {
  return (
    <main>
      <h2 className="page-header">DESIGN</h2>
      <InfoBox header={'design - testing info boxes'}>
        <p>
          This is sample text to see how it would look like inside an info box
          for my design system.
        </p>
      </InfoBox>
      <button>BUTTON</button>
      <input type="text" placeholder="Enter text..." className="input" />
    </main>
  );
}
