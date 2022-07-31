import React, { useEffect } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import Logo from '../assets/ts-logo.svg';
import { HiMenuAlt4 } from 'react-icons/hi';
import { useRouter } from 'next/router';

const ScrollMenu = () => {
  const { scrollYProgress } = useScroll();
  const translateMenuDownAnim = useTransform(
    scrollYProgress,
    [0, 0.01],
    [-300, 30]
  );

  const router = useRouter();
  const [menuOpen, setMenuOpen] = React.useState(false);
  useEffect(() => {
    setMenuOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.route]);

  return (
    <>
      <motion.h1
        style={{
          y: translateMenuDownAnim,
          mixBlendMode: 'difference',
          x: '-50%',
        }}
        className=' text-white fixed container-1 mx-auto z-[1000] top-0 left-1/2  pointer-events-none'
      >
        <Logo
          onClick={() => {
            if (router.pathname !== '/') router.push('/');
          }}
          title='back to home'
          className='w-10 h-10 cursor-pointer pointer-events-auto hover:rotate-6 transition-all duration-200'
        />
      </motion.h1>
      <div className=' fixed container-1 mx-auto z-[1000] top-0 right-1/2 translate-x-1/2 text-end'>
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            y: translateMenuDownAnim,
          }}
          className='cursor-pointer text-white bg-slate-900 p-2 h-12 w-12 rounded-xl hover:bg-primary-700 hover:text-primary-50 transition-colors border-2 border-slate-100'
        >
          <HiMenuAlt4 className='w-full h-full' />
        </motion.button>
      </div>
      {menuOpen && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setMenuOpen(false);
          }}
          className='fixed mx-auto z-[10000] top-0 left-0 w-screen max-w-[100vw] h-screen  bg-slate-700/80 md:pr-2 backdrop-blur-md'
        >
          <nav className='w-full  grid md:grid-cols-2 content-start  lg:grid-cols-3 container-1   md:max-w-[98vw]'>
            <ul className='lg:col-start-3  md:col-start-2 col-span-1 bg-slate-200 h-full py-4 rounded-xl md:rounded-3xl flex flex-col justify-center items-center'>
              Menu is open
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default ScrollMenu;
