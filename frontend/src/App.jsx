import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';

import Home from './pages/Home';
import Search from './pages/Search';
import About from './pages/About';
import Account from './pages/Account';
import Design from './pages/Design';

function App() {
  return (
    <Router>
      <header>
        <h1 id="banner-title">GOT GAMER CRED?</h1>
      </header>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/design" element={<Design />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;