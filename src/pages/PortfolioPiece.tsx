import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Portfolio4 from '../assets/portfolio-card04.jpg';
import { portfolio } from '../context/portfolio/PortfolioData';
import { motion } from 'framer-motion';
import PortfolioPieceCard from '../components/portfolio/PortfolioPieceCard';
import { FiClock, FiCalendar } from 'react-icons/fi';
import PortfolioContent from '../components/portfolio/PortfolioContent';
import { pageOpacityShift } from '../features/transitions/Transitions';

const PortfolioPiece = () => {
  const params = useParams();
  const navigate = useNavigate();
  const portfolioId = params.id;
  const [portfolioData, setPortfolioData] = useState(portfolio[portfolioId]);

  useEffect(() => {
    setPortfolioData(portfolio[portfolioId]);
  }, [params.id]);

  interface image {
    url: string;
    background?: string;
  }
  interface content {
    heading?: string;
    body?: string | Array<string>;
  }

  if (!portfolioData.header) return <>Loading</>;
  return (
    <motion.div
      initial={pageOpacityShift.initial}
      animate={pageOpacityShift.animate}
      exit={pageOpacityShift.exit}
    >
      <div className=' lg:mx-auto overflow-hidden w-screen flex flex-col gap-[-5rem] mt-[-6rem] lg:mt-[-10rem] max-w-[98vw]'>
        <div
          className=' overflow-hidden col-span-6 w-[98vw] sm:h-[80vh] max-h-[34rem] lg:col-span-6'
          style={{ background: portfolioData?.header?.background || '#fefefe' }}
        >
          <PortfolioPieceCard
            image={portfolioData?.header.url}
            stack={portfolioData.stack}
            title={portfolioData.title}
            id={portfolioData.id}
            showTitle={false}
            showStack={true}
            alwaysShowStack={true}
          />
        </div>
      </div>
      <div className=' mx-4  sm:mx-8 lg:mx-auto max-w-screen-xl flex flex-col gap-[6rem] sm:mt-[6rem]'>
        <article className='grid sm:grid-cols-5 gap-6 '>
          {portfolioData.title && (
            <h1 className='text-2xl font-semibold col-span-2'>
              {portfolioData.title}
            </h1>
          )}
          <div className='col-span-3 grid gap-8'>
            {portfolioData.extract && (
              <p className='text-xl font-semibold'>{portfolioData.extract}</p>
            )}
            <div className='flex flex-wrap gap-10 '>
              <p className='flex gap-3 items-center text-lg'>
                <FiClock className='w-10 h-10 bg-teal-400 rounded-full p-2' />
                <span>{portfolioData.time || 'Ongoing'}</span>
              </p>
              <p className='flex gap-3 items-center text-lg'>
                <FiCalendar className='w-10 h-10 bg-teal-400 rounded-full p-2' />
                <span>{portfolioData.launched || 'Ongoing'}</span>
              </p>
            </div>
          </div>
        </article>
        {portfolioData?.content &&
          portfolioData.content.map((content, index) => (
            <PortfolioContent key={`prt-${index}`} content={content} />
          ))}
      </div>
    </motion.div>
  );
};

export default PortfolioPiece;
