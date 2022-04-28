import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './sass/main.scss';
import './sass/index.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Resume from './pages/Resume';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import PortfolioPiece from './pages/PortfolioPiece';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar sticky={false} />
        <main>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Home />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/get-in-touch' element={<Contact />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/portfolio/:id' element={<PortfolioPiece />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
