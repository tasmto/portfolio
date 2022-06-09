import React from 'react';
import Portfolio1 from '../../assets/portfolio-card01.jpg';
import Portfolio2 from '../../assets/portfolio-card02.jpg';
import Portfolio3 from '../../assets/portfolio-card03.jpg';
import Portfolio4 from '../../assets/portfolio-card04.jpg';
import Portfolio5 from '../../assets/portfolio-card05.jpg';
import PortfolioPieceCard from './PortfolioPieceCard';
import { portfolio } from '../../context/portfolio/PortfolioData';

const PortfolioGrid = () => {
  const portFolioCardImages = [
    Portfolio1,
    Portfolio2,
    Portfolio3,
    Portfolio4,
    Portfolio5,
  ];
  return (
    <section>
      <div className='grid grid-cols-6 col-span-2 gap-4'>
        <div
          className=' overflow-hidden rounded-2xl col-span-6 max-h-[30rem] lg:col-span-3 view-large'
          id='inteligets'
          style={{
            background: portfolio.inteligets.header.background || '',
          }}
        >
          <PortfolioPieceCard
            image={portfolio.inteligets?.header.url}
            stack={portfolio.inteligets.stack}
            title={portfolio.inteligets.title}
            id={portfolio.inteligets.id}
          />
        </div>
        <div
          className=' overflow-hidden rounded-2xl col-span-6 max-h-[30rem] lg:col-span-3 view-large'
          id='blogr'
          style={{
            background: portfolio.blogr.header.background || '',
          }}
        >
          <PortfolioPieceCard
            image={portfolio.blogr?.header.url}
            stack={portfolio.blogr.stack}
            title={portfolio.blogr.title}
            id={portfolio.blogr.id}
          />
        </div>
        <div
          className=' overflow-hidden rounded-2xl col-span-6 max-h-[30rem] lg:col-span-3 view-large'
          id='futureAgent'
          style={{
            background: portfolio.futureagent.header.background || '',
          }}
        >
          <PortfolioPieceCard
            image={portfolio.futureagent?.header.url}
            stack={portfolio.futureagent.stack}
            title={portfolio.futureagent.title}
            id={portfolio.futureagent.id}
          />
        </div>

        <div
          className=' overflow-hidden rounded-2xl col-span-6 max-h-[30rem] lg:col-span-3 view-large'
          id='mortgagely'
          style={{
            background: portfolio.mortgagely.header.background || '',
          }}
        >
          <PortfolioPieceCard
            image={portfolio.mortgagely?.header.url}
            stack={portfolio.mortgagely.stack}
            title={portfolio.mortgagely.title}
            id={portfolio.mortgagely.id}
          />
        </div>
        <div
          className=' overflow-hidden rounded-2xl col-span-6 max-h-[30rem] lg:col-span-3 view-large'
          id='flavorfestival'
          style={{
            background: portfolio.flavorfestival?.header.background || '',
          }}
        >
          <PortfolioPieceCard
            image={portfolio.flavorfestival?.header.url || ''}
            stack={portfolio.flavorfestival.stack}
            title={portfolio.flavorfestival.title}
            id={portfolio.flavorfestival.id}
          />
        </div>
        <div
          className=' overflow-hidden rounded-2xl col-span-6 max-h-[30rem] lg:col-span-3 view-large'
          id='drsetati'
          style={{
            background: portfolio.drsetati.header.background || '',
          }}
        >
          <PortfolioPieceCard
            image={portfolio.drsetati?.header.url}
            stack={portfolio.drsetati.stack}
            title={portfolio.drsetati.title}
            id={portfolio.drsetati.id}
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
