import InfoBox from '../components/UI/InfoBox';
import WaveText from '../components/UI/WaveText';

export default function Home() {
  return (
    <>
      <main >
        <Welcome />
        <Currency />
        <Rules />
      </main>
      <aside>
        <GameLegend />
        <Badges />
      </aside>
    </>
  );
}

function Welcome() {
  return (
    <section>
      <h1 className="page-header">
        WELCOME TO MY
        <WaveText text={'gamercred'} />
        .COM!
      </h1>
      <p>
        This website helps gamers know how much gamer cred they have accumulated
        amongst their years of gaming. Vote on each game's gamer cred score and
        also add it to your profile to accumulate more gamer cred for your
        profile. Comment on game's comments sections to debate whether the given
        score is fitting. It is time to see what type of gamer you are.
      </p>
    </section>
  );
}

function Currency() {
  return (
    <section>
      <h2 className="page-subheader">What is Gamer Cred?</h2>
      <p>This is the most valuable currency in the universe:</p>
      <img
        src="/images/gc.png"
        alt=""
        className="pixel-art"
        id="gc-unit-home"
      />
      <p id="gc-unit-label">
        {' '}
        <WaveText text={'GAMER CRED'} />!
      </p>
      <p>
        This currency originates from the respect a gamer gives to another
        gamer. If you play a game that is of good taste, you are a respectable
        individual in the gaming community. Great games tend to have greater
        gamer cred because of its support from the community and its energy to
        connect gamers together.
      </p>
      <p>
        Each game will have a gamer cred score from 0 to 100. As for
        individuals, every gamer should strive to get their gamer cred as high
        as possible. Add games to your profile to up your gamer cred. Wear it
        like a badge of honor, because it is essentially who you are.
      </p>
    </section>
  );
}

function Rules() {
  return (
    <section>
      <h2 className="page-subheader">Main Rules</h2>
      <p>
        <span className="blue">*</span> Be kind to each other <br />
        <span className="blue">*</span> Strive to get all fellow individual's
        gamer cred up <br />
        <span className="blue">*</span> Don't spam or be aggressive in comment
        sections <br />
        <span className="blue">*</span> Never stop gaming (or do, its up to you)
      </p>
    </section>
  );
}

function GameLegend() {
  return (
    <InfoBox header={'game ratings'}>
      <p>Games will be color coded in respect to their score:</p>
      <br />
      <p className="rank-legend purple">&nbsp;&nbsp;51 to 100</p>
      <p className="rank-legend blue">&nbsp;&nbsp;0 to 50</p>
      <p className="rank-legend brown">-51 to -1</p>
      <p className="rank-legend red">-100 to -50</p>
    </InfoBox>
  );
}

function Badges() {
  return (
    <InfoBox header={'collect badges'}>
      <p>Earn badges that will distinguish you from other gamers:</p>
      <p>
        <i>INSERT BADGES IMAGES HERE</i>
      </p>
    </InfoBox>
  );
}
