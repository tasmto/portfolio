import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import './sass/main.scss';
import './sass/index.css';
import Footer from './components/Footer';
import Navbar from './features/navbar/Navbar';
import Resume from './pages/Resume';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import PortfolioPiece from './pages/PortfolioPiece';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { AnimatePresence, motion } from 'framer-motion';
import ScrollToTop from './features/scrollToTop/ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar sticky={false} />

        <main className='pt-24 lg:pt-[10rem]'>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route path='/' element={<Home />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/get-in-touch' element={<Contact />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/portfolio/:id' element={<PortfolioPiece />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </Router>
    </>
  );
}

export default App;
