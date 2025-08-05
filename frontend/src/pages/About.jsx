import InfoBox from '../components/UI/InfoBox';
import WaveText from '../components/UI/WaveText';

export default function About() {
  return (
    <>
      <div className="content about-content">
        <AboutWebsite />
        <AboutMyself />
      </div>
      <aside>
        <Contact />
        <OneManTeam />
      </aside>
    </>
  );
}

function AboutWebsite() {
  return (
    <>
      <h1 className="page-header">About</h1>
      <p>
        I lack gamer cred. For the majority of my gaming career I have played
        various online multiplayer games with toxic communities. No longer. I
        decided that I wanted to take my gaming career to another level. I want
        to play games that actually pack a punch and would leave a lasting
        impression on who I am as a person. I made this website to make it
        easier to find those types of games and build a{' '}
        <span className="purple">nice community</span> amongst gamers.
      </p>
      <p>
        I want to be able to find cool games more easily, and to do so you have
        to let gamers rate the games. I feel that this is a more{' '}
        <span className="purple">reliable</span> and{' '}
        <span className="purple">trust-worthy</span> approach rather than taking
        ratings from corporations that probably get kick backs for giving games
        a higher rating. I also created this website to let gamers create an
        account to show off to their friends how much gamer cred they truly
        possess.
      </p>
    </>
  );
}

function AboutMyself() {
  return (
    <>
      <h2 className="page-subheader">About Me</h2>
      <p>
        I am a <span className="purple">web developer</span> who likes making
        cool websites. I am also a gamer who has been playing video games for my
        entire life. I don't have a favorite game but some of my top rated games
        in my opinion are Elden Ring, Batman: Arkham Asylum and Modded Minecraft
        FTB Infinity. I am in my early twenties and love fitness.
      </p>
      <p>
        As for my gamer cred, it is very low. I plan to get it up with the help
        of the scores of games I find on this website made by you guys and gals
        (if people even find this website).
      </p>
    </>
  );
}

function Contact() {
  return (
    <InfoBox header="Contact">
      <p className="purple">Email:</p>
      <p>
        mygamercred
        <wbr />
        @gmail.com
      </p>
    </InfoBox>
  );
}

function OneManTeam() {
  return (
    <InfoBox header="QUICK NOTE !!!">
      <p className="sm">
        I am solo <WaveText text={'solo developer'} /> on this project. Part of why I am
        making this website is to help build my web development skills. This
        website will not be perfect but you can be 100% certain that I will try
        to make it so.
      </p>
    </InfoBox>
  );
}
