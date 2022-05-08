import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='print:hidden flex flex-col gap-10 mx-4 pt-[6rem] pb-8 sm:mx-8 2xl:mx-auto max-w-screen-2xl'>
      <article
        className='flex flex-col gap-2 items-center justify-center text-center bg-gray-100 rounded-xl py-20 p-10'
        style={{ minHeight: '35vh', maxHeight: '350px' }}
      >
        <h2 className='text-2xl font-semibold'>
          You can get in touch with me anyway you'd like:
        </h2>
        <Link
          to='/get-in-touch'
          className='text-2xl font-semibold text-cyan-500 hover:text-cyan-700 wave'
        >
          Let’s chat!
        </Link>
      </article>
      <nav className='flex flex-col md:flex-row justify-between gap-4 items-center'>
        <p className='text-lg'>Tashinga Mtoko © Frontend Developer</p>
        <ul className='flex gap-4 md:flex-row flex-wrap'>
          <li>
            <a
              href='https://twitter.com/tasmto'
              target='_blank'
              rel='no-referer'
              className='sup'
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href='https://github.com/tasmto'
              target='_blank'
              rel='no-referer'
              className='sup'
            >
              Github
            </a>
          </li>
          <li>
            <a
              href='https://dribbble.com/tasmto'
              target='_blank'
              rel='no-referer'
              className='sup'
            >
              Dribbble
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/tasmto/'
              target='_blank'
              rel='no-referer'
              className='sup'
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
