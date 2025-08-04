import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';

import Home from './pages/Home';
import Search from './pages/Search';
import About from './pages/About';
import Account from './pages/Account';

function App() {
  return (
    <Router>
      <header>
        <h1 id="banner-title">GOT GAMER CRED?</h1>
      </header>
      <Nav />
      <main>
        <Routes>
          {/* <div className="top-border" /> */}
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
