import React, { useState } from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import LogoImage from '../assets/logo.png';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Navbar.scss';

const Navbar = ({ sticky = true }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => setMenuOpen((prev) => !prev);
  /**
   * @todo remove scrollbar on mobile menu
   */

  const [logo, setLogo] = useState('tasmto');

  const links = [
    { name: 'Portfolio', to: '/portfolio', id: 2 },
    { name: 'My CV', to: '/resume', id: 3 },
    { name: 'Get in touch', to: '/get-in-touch', id: 4 },
  ];

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  const [open, cycleOpen] = useCycle(false, true);
  const navigate = useNavigate();

  return (
    <>
      <motion.header
        id='navbar'
        transition={{ duration: 0.5, type: 'spring' }}
        initial={{ opacity: 0, y: -5, x: '40%' }}
        animate={{ opacity: [0, 1], y: [-5, 0], x: '50%' }}
        className={`w-[95%] fixed flex justify-between py-4  print:hidden z-50 max-w-screen-2xl right-1/2 translate-x-1/2`}
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
        <AnimatePresence>
          {open && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{
                width: 300,
              }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
              className='fixed top-0 right-0 h-screen w-[18.75rem] bg-slate-300 '
            >
              <motion.div
                className='grid gap-2 sm:gap-10 mx-6 my-10 sm:my-20 '
                initial='closed'
                animate='open'
                exit='closed'
                variants={sideVariants}
              >
                {links.map(({ name, to, id }) => (
                  <motion.button
                    role='link'
                    key={id}
                    onClick={() => {
                      navigate(to);
                      cycleOpen();
                    }}
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                    className='bg-transparent text-xl sm:text-3xl font-bold hover:bg-cyan-700 py-2 sm:py-4'
                  >
                    {name}
                  </motion.button>
                ))}
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
        <div className=' z-50'>
          <button
            onClick={() => {
              cycleOpen();
            }}
          >
            {open ? (
              <FiX className='h-10 w-10' />
            ) : (
              <FiMenu className='h-10 w-10' />
            )}
          </button>
        </div>
      </motion.header>
      {open && (
        <motion.div
          className='w-screen h-screen backdrop-blur-sm bg-gray-800/30 fixed top-0 right-0 cursor-pointer z-30'
          variants={itemVariants}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          onClick={() => cycleOpen()}
        ></motion.div>
      )}
    </>
  );
};

export default Navbar;
