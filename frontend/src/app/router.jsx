import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

import Home from '@/app/routes/Home';
import Games from '@/app/routes/Games';
import Players from '@/app/routes/Players';
import Lists from '@/app/routes/Lists';
import Search from '@/app/routes/Search';
import About from '@/app/routes/About';
import Account from '@/app/routes/Account';
import Design from '@/app/routes/Design';

function AppRouter() {
  return (
    <>
      <Router>
        <div id="website-container">
          <Nav />
          <div id="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games" element={<Games />} />
              <Route path="/lists" element={<Lists />} />
              <Route path="/players" element={<Players />} />
              <Route path="/account" element={<Account />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/design" element={<Design />} />
              {/* need to add: */}
              {/* search(global), contact, help, terms, socials */}
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default AppRouter;
