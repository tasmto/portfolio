import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Portfolio4 from '../assets/portfolio-card04.jpg';

const PortfolioPiece = () => {
  const [portfolio, setPortfolioPice] = useState(null);
  const params = useParams();
  useEffect(() => {
    const portfolioId = params.id;
    console.log(portfolioId);
  }, []);
  return (
    <>
      <div className=' lg:mx-auto w-screen flex flex-col gap-[6rem] '>
        <div className=' overflow-hidden col-span-6 w-screen sm:h-[50vh] max-h-[30rem] lg:col-span-6 '>
          <img className='h-full w-full object-cover' src={Portfolio4} alt='' />
        </div>
      </div>
      <div className=' mx-4  sm:mx-8 lg:mx-auto max-w-screen-lg flex flex-col gap-[6rem]'>
        <section className='text-center flex flex-col gap-6 pt-10 sm:py-16 '>
          <h1 className='text-2xl font-semibold'>
            Heya, I'm Tashinga, a Cape Town based JavaScript developer working
            on customer lead and user focused experiences and products currently
            in real estate technologies.
          </h1>
        </section>
      </div>
    </>
  );
};

export default PortfolioPiece;
