import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import {
  FiBriefcase,
  FiFileText,
  FiCoffee,
  FiHome,
  FiMoon,
  FiSun,
  FiMoreHorizontal,
  FiX,
} from 'react-icons/fi';
import { DiNodejsSmall } from 'react-icons/di';

const Navbar = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => setMenuOpen((prev) => !prev);
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);

  const links = [
    { name: 'Portfolio', to: '/portfolio', icon: FiBriefcase },
    { name: 'Resume', to: '/resume', icon: FiFileText },
    { name: 'Contact', to: '/get-in-touch', icon: FiCoffee },
  ];
  const portfolioLinks = [
    { name: 'FutureAgent', to: '/portfolio/futureagent', icon: DiNodejsSmall },
  ];
  useEffect(() => {
    if (menuOpen) setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className='sm:mr-3 sm:min-h-screen z-50 w-screen sm:w-auto fixed bottom-0 sm:relative'>
      <div className='h-full sm:h-screen overflow-y-auto  z-50 sticky top-0 w-100 border-r-2 bg-slate-50 dark:bg-slate-800  border-t-2 shad sm:border-t-0 sm:shadow-xl shadow-[0_-10px_18px_-15px_rgb(0,0,0,0.5)] border-solid border-slate-300 dark:border-slate-700 sm:border-slate-300 sm:dark:border-slate-700  sm:pt-10 px-5 flex sm:flex-col justify-center items-center sm:justify-between'>
        <div>
          <button
            className='hidden m-auto mt-2 sm:px-2 lg:px-3 py-3 text-lg sm:text-2xl lg:text-3xl font-medium group cursor-pointer sm:flex items-center relative text-slate-700 hover:text-cyan-600 dark:text-slate-200 '
            onClick={handleToggleMenu}
          >
            {!menuOpen ? <FiMoreHorizontal /> : <FiX />}
          </button>
          {menuOpen && (
            <>
              <hr className='mt-5' />
              <p className='mt-2 mb-2 text-xs text-slate-500 dark:text-slate-400 text-center '>
                Tashinga Mtoko
              </p>
              <hr />
            </>
          )}
          <nav className='flex flex-row w-full sm:w-auto overflow-x-auto justify-center sm:block justify-self-center'>
            <Link
              title={'Home Page'}
              to='/'
              className={`sm:mt-2  sm:mx-0  px-2 sm:px-3 py-3 text-lg  sm:text-2xl lg:text-3xl font-medium group cursor-pointer flex  items-center relative text-slate-700 dark:text-slate-200 sm:bg-slate-200 sm:dark:bg-slate-700 rounded-lg hover:bg-cyan-700  dark:hover:bg-cyan-600 hover:text-white ${
                menuOpen ? 'flex-row' : 'flex-col'
              }  ${
                location.pathname === '/' &&
                'bg-cyan-800 dark:bg-cyan-800 sm:bg-cyan-800 sm:dark:bg-cyan-800 text-slate-200'
              } `}
            >
              <FiHome className={`${menuOpen && 'mr-2'}`} />

              <span
                className={` sm:block ml-0 ${
                  menuOpen ? 'ml-4 text-xl' : 'mt-2 text-xs'
                }  bg-slate-300 dark:bg-slate-600  text-slate-700 dark:text-slate-200 rounded-lg px-3 ${
                  location.pathname === '/' &&
                  'bg-cyan-900 dark:bg-cyan-900 text-slate-200 dark:text-slate-200'
                }`}
              >
                Home
              </span>
            </Link>

            {links.map((link, i) => (
              <Link
                title={link.name}
                to={link.to}
                key={i}
                className={`sm:mt-2  px-2 sm:px-3 py-3 text-lg  sm:text-2xl lg:text-3xl font-medium group cursor-pointer flex  items-center relative text-slate-700 dark:text-slate-200 sm:bg-slate-200 sm:dark:bg-slate-700 rounded-lg hover:bg-cyan-700  dark:hover:bg-cyan-600 hover:text-white ${
                  menuOpen ? 'flex-row' : 'flex-col'
                } ${
                  location.pathname === link.to &&
                  'bg-cyan-800 dark:bg-cyan-800 sm:bg-cyan-800 sm:dark:bg-cyan-800 text-slate-200'
                }`}
              >
                <link.icon className={`${menuOpen && 'mr-2'}`} />

                <span
                  className={` sm:block ml-0 ${
                    menuOpen ? 'ml-4 text-xl' : 'mt-2 text-xs'
                  }  bg-slate-300 dark:bg-slate-600  text-slate-700 dark:text-slate-200 rounded-lg px-3 ${
                    location.pathname === link.to &&
                    'bg-cyan-900 dark:bg-cyan-900 text-slate-200 dark:text-slate-200'
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
            {menuOpen && (
              <div className='hidden sm:block'>
                <>
                  <hr className='mt-5' />
                  <p className='mt-2 mb-2 text-xs text-slate-500 dark:text-slate-400 text-center '>
                    Portfolio pieces
                  </p>
                  <hr />
                </>
                {portfolioLinks.map((link, i) => (
                  <Link
                    title={link.name}
                    to={link.to}
                    key={i}
                    className={`sm:mt-2  px-2 sm:px-3 py-3 text-lg  sm:text-2xl lg:text-3xl font-medium group cursor-pointer flex  items-center relative text-slate-700 dark:text-slate-200 sm:bg-slate-200 sm:dark:bg-slate-700 rounded-lg hover:bg-cyan-700  dark:hover:bg-cyan-600 hover:text-white ${
                      menuOpen ? 'flex-row' : 'flex-col'
                    } ${
                      location.pathname === link.to &&
                      'bg-cyan-800 dark:bg-cyan-800 sm:bg-cyan-800 sm:dark:bg-cyan-800 text-slate-200'
                    }`}
                  >
                    <link.icon className={`${menuOpen && 'mr-2'}`} />

                    <span
                      className={` sm:block ml-0 ${
                        menuOpen ? 'ml-4 text-xl' : 'mt-2 text-xs'
                      }  bg-slate-300 dark:bg-slate-600  text-slate-700 dark:text-slate-200 rounded-lg px-3 ${
                        location.pathname === link.to &&
                        'bg-cyan-900 dark:bg-cyan-900 text-slate-200 dark:text-slate-200'
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </nav>
        </div>
        {/* // ! Still need to make a class based toggler for dark and light mode */}
        {/* <button
          type='button'
          className='justify-self-end m-auto  mb-2 px-2 sm:px-3 py-5 w-100 sm:text-2xl text-lg lg:text-3xl font-medium group cursor-pointer hidden sm:flex items-center relative text-slate-700 hover:text-cyan-600 dark:text-slate-200'
        >
          {false ? <FiMoon /> : <FiSun />}
        </button> */}
      </div>
      {menuOpen && (
        <div
          className='h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-75 z-30'
          onClick={handleToggleMenu}
          style={{ backdropFilter: 'blur(2px)' }}
        >
          <h1 className='text-slate-300 absolute top-1/2 left-1/3 translate-1/2 font-bold text-4xl w-1/2 m-auto'>
            Click here to close the menu
          </h1>
        </div>
      )}
    </div>
  );
};

export default Navbar;
