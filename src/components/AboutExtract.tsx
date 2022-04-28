import React from 'react';
import { Link } from 'react-router-dom';
import AboutMeImage from '../assets/about-me-image-cluster.png';

const AboutExtract = () => {
  return (
    <section>
      <div className='grid grid-cols-3 col-span-1 gap-4 sm:gap-14 items-center'>
        <div className='col-span-3 sm:col-span-2 flex flex-col gap-6'>
          <h1 className='text-2xl font-semibold'>
            I’ve been working as a designer and developer for 4 years in the
            e-ccomerce, marketing, medical technologies and educational
            technologies fields
          </h1>
          <h3 className='text-2xl font-semibold flex flex-wrap gap-4 '>
            <Link to='/resume' className='text-cyan-500 hover:text-cyan-700'>
              My CV
            </Link>
          </h3>
        </div>
        <div className='col-span-3 flex justify-center sm:col-span-1'>
          <img src={AboutMeImage} alt='' className='h-full' />
        </div>
      </div>
    </section>
  );
};

export default AboutExtract;
