import { IoCubeOutline } from 'react-icons/io5';

export default function Home() {
  return (
    <main>
      <div id="home-greeting-container">
        <h2 id="home-greeting">MY GAMER CRED</h2>
        <div id="floating-gc-container">
          <IoCubeOutline />
        </div>
        <p id="sub-home-greeting">real gamers, real takes</p>
      </div>
      <section>
        <p className="primary">WHAT IS GAMER CRED?</p>
        <p>
          Gamer cred is the most valuable currency known to mankind. One is able
          to acquire gamer cred by playing games that are of great taste. Each
          game has a gamer cred score voted on by the users on this platform.
        </p>
      </section>
      <section className='home-section-indent-normal'>
        <p className="primary">SHARE AND EXPLORE.</p>
        <p>
          Voice your unheard gaming takes/reviews. Also find games to add to
          your backlog.
        </p>
      </section>
      <section className='home-section-indent-large'>
        <p className="primary">UP YOUR GAMER CRED.</p>
        <p>
          Add games you played to your account to accumulate gamer cred. The
          higher the gamer cred, the more you need to be in the sun.
        </p>
      </section>
      {/* ADD CATS HERE */}
    </main>
  );
}
