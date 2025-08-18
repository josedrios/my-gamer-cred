import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';

import Home from './pages/Home';
import Games from './pages/Games';
import Players from './pages/Players';
import Lists from './pages/Lists';
import About from './pages/About';
import Account from './pages/Account';
import Design from './pages/Design';

function App() {
  return (
    <>
      <Router>
        <div id="website-container">
          <header>
            <h1 id="banner-title">GOT GAMER CRED?</h1>
          </header>
          <Nav />
          <div id="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games" element={<Games />} />
              <Route path="/players" element={<Players />} />
              <Route path="/account" element={<Account />} />
              <Route path="/about" element={<About />} />
              <Route path="/lists" element={<Lists />} />
              <Route path="/design" element={<Design />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
