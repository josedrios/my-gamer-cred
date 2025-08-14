import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';

import Home from './pages/Home';
import Games from './pages/Games';
import Players from './pages/Players';
import About from './pages/About';
import Account from './pages/Account';
import Design from './pages/Design';

function App() {
  return (
    <div id="website-container">
      <header>
        <h1 id="banner-title">GOT GAMER CRED?</h1>
      </header>
      <Router>
        <Nav />
        <div id='content-container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/players" element={<Players />} />

            <Route path="/design" element={<Design />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
