import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

import Landing from '@/app/routes/landing';
import Games from '@/app/routes/games';
import Players from '@/app/routes/players';
import Lists from '@/app/routes/lists';
import Search from '@/app/routes/search';
import About from '@/app/routes/about';
import Account from '@/app/routes/account';
import Design from '@/app/routes/design';

function AppRouter() {
  return (
    <>
      <Router>
        <div id="website-container">
          <Nav />
          <div id="content-container">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/games" element={<Games />} />
              <Route path="/lists" element={<Lists />} />
              <Route path="/players" element={<Players />} />
              <Route path="/account" element={<Account />} />
              <Route path="/about" element={<About />} />
              <Route path="/search" element={<Search />} />
              <Route path="/design" element={<Design />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default AppRouter;
