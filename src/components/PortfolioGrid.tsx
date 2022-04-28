import React from 'react';
import Portfolio1 from '../assets/portfolio-card01.jpg';
import Portfolio2 from '../assets/portfolio-card02.jpg';
import Portfolio3 from '../assets/portfolio-card03.jpg';
import Portfolio4 from '../assets/portfolio-card04.jpg';
import Portfolio5 from '../assets/portfolio-card05.jpg';

const PortfolioGrid = () => {
  return (
    <section>
      <div className='grid grid-cols-6 col-span-2 gap-4'>
        <div className=' overflow-hidden rounded-2xl col-span-6 max-h-[30rem] lg:col-span-6 '>
          <img className='h-full w-full object-cover' src={Portfolio4} alt='' />
        </div>
        <div className=' overflow-hidden rounded-2xl col-span-6 max-h-[30rem] lg:col-span-3 '>
          <img className='h-full w-full object-cover' src={Portfolio2} alt='' />
        </div>
        <div className=' overflow-hidden rounded-2xl col-span-6 max-h-[30rem] lg:col-span-3 '>
          <img className='h-full w-full object-cover' src={Portfolio3} alt='' />
        </div>
        <div className=' overflow-hidden rounded-2xl col-span-6 max-h-[30rem] lg:col-span-3 '>
          <img className='h-full w-full object-cover' src={Portfolio5} alt='' />
        </div>
        <div className=' overflow-hidden rounded-2xl col-span-6 max-h-[30rem] lg:col-span-3 '>
          <img className='h-full w-full object-cover' src={Portfolio1} alt='' />
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
