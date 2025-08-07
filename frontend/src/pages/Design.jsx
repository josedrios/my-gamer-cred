import InfoBox from '../components/UI/InfoBox';

export default function Design() {
  return (
    <>
      <div className="content design-content">
        <h2 className="page-header">DESIGN</h2>
        <InfoBox header={'design - testing info boxes'}>
          <p>
            This is sample text to see how it would look like inside an info box
            for my design system.
          </p>
        </InfoBox>
        <button>BUTTON</button>
        <input type="text" placeholder='Enter text...' className='input'/>
      </div>
      <aside>
        <p>
          This is the design system page that will give me the overview of all
          my components and their styling. This will not be part of the final
          website, just for the developers perspective.
        </p>
      </aside>
    </>
  );
}
