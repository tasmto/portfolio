import React from 'react';
import { Link } from 'react-router-dom';
import AboutExtract from '../components/AboutExtract';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className=' mx-4  sm:mx-8 lg:mx-auto max-w-screen-lg flex flex-col gap-[6rem]'>
      <section className='text-center flex flex-col gap-6 pt-10 sm:py-12 '>
        <motion.h1
          className='text-2xl font-semibold'
          transition={{ duration: 0.4 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
        >
          Heya, I'm Tashinga, a Cape Town based JavaScript developer working on
          customer lead and user focused experiences and products currently in
          real estate technologies.
        </motion.h1>
        <motion.h3
          className='text-2xl font-semibold flex flex-wrap gap-4 justify-center'
          transition={{ duration: 0.6 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 0, 1], y: [20, 20, 0] }}
        >
          <Link to='/portfolio' className='text-cyan-500 hover:text-cyan-700'>
            Have a look at my portfolio
          </Link>
          <span className='text-gray-600'>|</span>
          <Link to='/resume' className='text-cyan-500 hover:text-cyan-700'>
            My CV
          </Link>
        </motion.h3>
      </section>
      <PortfolioGrid />
      <AboutExtract />
    </div>
  );
};

export default Home;
