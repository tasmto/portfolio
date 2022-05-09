import React from 'react';
import SkillsIcons from '../components/skillsBlocks/SkillsIcons';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import { pageOpacityShift } from '../features/transitions/Transitions';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <motion.div
      initial={pageOpacityShift.initial}
      animate={pageOpacityShift.animate}
      exit={pageOpacityShift.exit}
      className=' mx-4  sm:mx-8 lg:mx-auto max-w-screen-lg flex flex-col gap-[6rem]'
    >
      <section className='flex flex-col gap-6 '>
        <h1 className='text-2xl font-semibold'>My Portfolio:</h1>
        <div className='flex flex-col gap-4'>
          <p className='text-xl font-medium'>Across these technologies:</p>
          <SkillsIcons />
        </div>
      </section>
      <PortfolioGrid />
    </motion.div>
  );
};

export default Portfolio;
