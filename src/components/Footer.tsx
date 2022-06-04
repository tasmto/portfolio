import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation().pathname;
  const [onContactPage, setContactPage] = useState(false);

  useEffect(() => {
    if (location.includes('get-in-touch')) setContactPage(true);
    else setContactPage(false);
  }, [location]);

  return (
    <footer className='print:hidden flex flex-col gap-10 mx-4 pt-[6rem] pb-8 sm:mx-8 2xl:mx-auto max-w-screen-2xl'>
      {!onContactPage && (
        <article className='flex flex-col gap-2 items-center justify-center text-center bg-gray-100 dark:bg-slate-800 dark:text-slate-200 rounded-xl py-[8rem] p-10 max-h-[300px]'>
          <h2 className='text-2xl sm:text-3xl font-semibold'>
            You can get in touch with me anyway you'd like:
          </h2>
          <Link
            to='/get-in-touch'
            className=' font-semibold text-cyan-500 hover:text-cyan-700 wave text-2xl sm:text-3xl'
          >
            Let's chat!
          </Link>
        </article>
      )}
      <nav className='flex flex-col md:flex-row justify-between gap-4 items-center'>
        <p className='text-lg dark:text-slate-400'>
          Tashinga Mtoko © Frontend Developer
        </p>
        <ul className='flex gap-4 md:flex-row flex-wrap'>
          <li>
            <a
              href='https://twitter.com/tasmto'
              target='_blank'
              rel='no-referer'
              className='sup dark:text-slate-300'
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href='https://github.com/tasmto'
              target='_blank'
              rel='no-referer'
              className='sup dark:text-slate-300'
            >
              Github
            </a>
          </li>
          <li>
            <a
              href='https://dribbble.com/tasmto'
              target='_blank'
              rel='no-referer'
              className='sup dark:text-slate-300'
            >
              Dribbble
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/tasmto/'
              target='_blank'
              rel='no-referer'
              className='sup dark:text-slate-300'
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
