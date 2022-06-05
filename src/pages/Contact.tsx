import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pageOpacityShift } from '../features/transitions/Transitions';

const Contact = () => {
  return (
    <motion.div
      initial={pageOpacityShift.initial}
      animate={pageOpacityShift.animate}
      exit={pageOpacityShift.exit}
      className=' mx-4  sm:mx-8 xl:mx-auto max-w-screen-xl  flex flex-col gap-[6rem] mt-[-2rem] lg:mt-[-5rem] '
    >
      <section className='flex flex-col gap-8 justify-center items-center py-10  bg-slate-100 dark:bg-slate-800 h-[70vh] max-h-[600px] px-3 text-center'>
        <h1 className='text-2xl sm:text-4xl font-bold'>
          You can contact me on the platforms below:
        </h1>
        <ul className='flex gap-4 md:flex-row flex-wrap justify-center'>
          <li>
            <a
              href='mailto:mtokotashinga@gmail.com'
              target='_blank'
              rel='no-referer'
              className='sup text-2xl font-bold hover:text-cyan-700 text-cyan-500'
            >
              eMail
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/tasmto'
              target='_blank'
              rel='no-referer'
              className='sup text-2xl font-bold hover:text-cyan-700 text-cyan-500'
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href='https://github.com/tasmto'
              target='_blank'
              rel='no-referer'
              className='sup text-2xl font-bold hover:text-cyan-700 text-cyan-500'
            >
              Github
            </a>
          </li>

          <li>
            <a
              href='https://www.linkedin.com/in/tasmto/'
              target='_blank'
              rel='no-referer'
              className='sup text-2xl font-bold hover:text-cyan-700 text-cyan-500'
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </motion.div>
  );
};

export default Contact;
