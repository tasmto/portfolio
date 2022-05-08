import React, { useState } from 'react';
import { motion } from 'framer-motion';

import LogoImage from '../assets/logo.png';
import {
  IoSchool,
  IoReorderTwo,
  IoClose,
  IoChatbubbleEllipsesSharp,
  IoIceCream,
} from 'react-icons/io5'; //https://react-icons.github.io/react-icons/icons?name=io5
import { Link } from 'react-router-dom';

const Navbar = ({ sticky = true }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => setMenuOpen((prev) => !prev);
  /**
   * @todo remove scrollbar on mobile menu
   */

  const [logo, setLogo] = useState('tasmto');

  return (
    <motion.header
      className={`flex justify-between py-4  mx-4 sm:mx-8 2xl:mx-auto max-w-screen-2xl print:hidden ${
        sticky &&
        'sticky top-0 z-10 bg-slate-50/90 mx-0 sm:mx-0 px-4 sm:px-8 shadow pb-6'
      }`}
      style={{ backdropFilter: `${sticky && 'blur(5px)'} ` }}
      transition={{ duration: 0.5, type: 'spring' }}
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: [0, 1], y: [-5, 0] }}
    >
      <Link to='/'>
        <motion.h1
          className='text-3xl font-bold '
          onMouseEnter={() => setLogo('tashinga mtoko')}
          onMouseLeave={() => {
            setLogo('');
            setTimeout(() => {
              setLogo('tasmto');
            }, 0);
          }}
        >
          {logo}
        </motion.h1>
      </Link>
      <nav className='flex '>
        <button role='link' className='md:hidden' onClick={handleToggleMenu}>
          <IoReorderTwo className='h-16 w-16 ' style={{ marginTop: '-10px' }} />
        </button>

        <div
          className={`${
            !menuOpen && 'hidden pointer-events-none'
          } md:block md:pointer-events-auto`}
        >
          <ul
            className='flex flex-col gap-6 bg-gray-900 text-white h-screen p-8 w-screen fixed top-0 right-0 pt-6 justify-center z-50
          md:flex-row md:space-x-5 md:w-full items-center md:bg-transparent md:text-black md:static md:h-auto md:gap-0 md:p-0'
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            <li className='w-full md:hidden'>
              <button
                className='w-full text-center flex justify-center'
                onClick={handleToggleMenu}
              >
                <IoClose className='w-10 h-10' />
              </button>
            </li>
            <li>
              <Link to='/'>
                <h1
                  className='text-5xl font-bold md:hidden'
                  role='presentation'
                >
                  tasmto
                </h1>
              </Link>
            </li>
            <li className='w-full text-center md:w-auto'>
              <Link
                className='text-2xl  rounded-lg text-white hover:bg-gray-700 hover:text-white p-5 w-full flex flex-wrap gap-5 gap-y-3 items-center justify-center
                md:text-black md:text-lg md:py-2 md:px-4 md:w-auto md:gap-3'
                to='/resume'
              >
                <IoSchool className='w-7 h-7 md:w-5 md:h-5' />
                <span>My CV</span>
              </Link>
            </li>
            <li className='w-full text-center md:w-auto'>
              <Link
                className='text-2xl   rounded-lg text-white hover:bg-gray-700  hover:text-white  p-5 w-full flex flex-wrap gap-5 gap-y-3 items-center justify-center
                md:text-black md:text-lg md:py-2 md:px-4 md:w-auto md:gap-3'
                to='/portfolio'
              >
                <IoIceCream className='w-7 h-7 md:w-5 md:h-5' />
                <span>My Portfolio</span>
              </Link>
            </li>
            <li className='w-full text-center md:w-auto'>
              <Link
                className='text-2xl   rounded-lg text-white hover:bg-gray-700  hover:text-white  p-5 w-full flex flex-wrap gap-5 gap-y-3 items-center justify-center
                md:text-black md:text-lg md:py-2 md:px-4 md:w-auto md:gap-3'
                to='/get-in-touch'
              >
                <IoChatbubbleEllipsesSharp className='w-7 h-7 md:w-5 md:h-5' />
                <span> Get In Touch</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
