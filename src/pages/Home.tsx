import React from 'react';
import { Link } from 'react-router-dom';
import AboutExtract from '../components/AboutExtract';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import { motion } from 'framer-motion';
import { FiMinus, FiGitCommit, FiColumns } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { pageOpacityShift } from '../features/transitions/Transitions';

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      transition={{ type: 'spring', damping: 25, stiffness: 50 }}
      initial={pageOpacityShift.initial}
      animate={pageOpacityShift.animate}
      exit={pageOpacityShift.exit}
      className=' mx-4  sm:mx-8 xl:mx-auto max-w-screen-xl flex flex-col gap-[6rem]'
    >
      <section className='text-center flex flex-col gap-6  sm:pb-12 '>
        <motion.h1
          className='text-2xl font-semibold sm:text-3xl sm:leading-relaxed md:text-4xl md:leading-relaxed mb-6'
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 50,
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: [0, 0.4, 1], y: [-50, 20, -10] }}
          exit={{ opacity: 0, y: -50 }}
        >
          Heya, I'm Tashinga, a Cape Town based Frontend JavaScript developer
          currently in the real estate technologies field.
        </motion.h1>
        <motion.h3
          className='text-2xl sm:text-3xl font-semibold flex flex-wrap gap-4 justify-center'
          transition={{
            duration: 0.6,
            delay: 0.25,
            type: 'spring',
            damping: 25,
            stiffness: 500,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 1], y: [20, 0] }}
        >
          <motion.button
            onClick={() => navigate('/portfolio')}
            className='text-slate-700 hover:text-cyan-700 flex gap-4 items-center view-large'
            transition={{
              duration: 0.3,
              delay: 0.25,
              type: 'spring',
              damping: 25,
              stiffness: 500,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1], y: [20, 0] }}
          >
            <span>
              <FiGitCommit className='w-10 h-10 bg-cyan-500 rounded-full text-white p-2' />
            </span>
            <span>Have a look at my portfolio</span>
          </motion.button>

          <motion.span
            className='text-slate-700 '
            transition={{
              duration: 0.7,
              delay: 0.35,
              type: 'spring',
              damping: 25,
              stiffness: 500,
            }}
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: [0, 1], rotate: [0, 180, 270] }}
          >
            <FiMinus className='h-10 w-10 ' />
          </motion.span>
          <motion.button
            onClick={() => navigate('/resume')}
            className='text-slate-700 view-large hover:text-cyan-700 flex gap-4 items-center'
            transition={{
              duration: 0.9,
              delay: 0.5,
              type: 'spring',
              damping: 25,
              stiffness: 500,
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: [0, 1], y: [-20, 10, 0] }}
          >
            <span>
              <FiColumns className='w-10 h-10 bg-cyan-500 rounded-full text-white p-2' />
            </span>
            <span>My CV</span>
          </motion.button>
        </motion.h3>
      </section>
      <motion.div
        className=' flex flex-col gap-[6rem]'
        transition={{ duration: 2, delay: 1 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: [0, 1], y: [100, 0, 10, 0] }}
      >
        <PortfolioGrid />

        <AboutExtract />
      </motion.div>
    </motion.div>
  );
};

export default Home;
