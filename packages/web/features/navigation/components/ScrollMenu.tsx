import React, { useEffect } from 'react';
import {
  motion,
  useTransform,
  useScroll,
  AnimatePresence,
} from 'framer-motion';
import Logo from '../assets/ts-logo.svg';
import { HiMenuAlt4 } from 'react-icons/hi';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Typography from '../../../components/typography/Typography';
import { IoClose, IoCloseCircle, IoDownloadOutline } from 'react-icons/io5';
import { allLinks, primaryLinks } from '../routes';
import { CgCloseR } from 'react-icons/cg';
import Button from '../../../components/button/Button';
import styles from '../../../styles/ScrollBar.module.css';

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

  const variants = {
    hidden: { opacity: 0, x: -10 },
    enter: { opacity: 1, x: 0, y: 0, duration: 1 },
    exit: { opacity: 0, x: 10, duration: 1.5 },
  };

  return (
    <>
      <motion.h1
        aria-hidden='true'
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
      <div
        aria-hidden='true'
        className='hidden xs:block fixed container-1 mx-auto z-[1000] top-0 right-1/2 translate-x-1/2 text-end'
      >
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
      <AnimatePresence exitBeforeEnter={true} initial={false}>
        {menuOpen && (
          <motion.div
            initial='hidden'
            animate='enter'
            exit='exit'
            variants={variants}
            transition={{ type: 'spring', stiffness: 100 }}
            key='menu'
            aria-hidden='true'
            onClick={(e) => {
              setMenuOpen(false);
            }}
            className='hidden xs:block fixed mx-auto z-[10000] top-0 left-0 w-screen max-w-[100vw] h-screen bg-slate-700/60 md:pr-2 backdrop-blur-sm'
          >
            <nav className='w-full grid container-1 justify-end  md:max-w-[98vw]'>
              <ul
                className={`${styles.verticalScroll} mt-5 translate-x-[-10%] lg:col-start-3 w-full max-w-[80vw] max-h-[90vh] min-h-[80vh] min-w-[300px] md:min-w-[450px] sm:min-w-[350px] md:col-start-2 col-span-1 bg-slate-50 h-full pt-8 pb-10 px-8 sm:px-14 sm:pt-12 md:pb-14 rounded-xl md:rounded-3xl flex flex-col gap-8   justify-start items-center container-3  border border-slate-400 shadow-2xl overflow-y-auto`}
              >
                <Typography as='li' size='display2' className='self-end'>
                  <span
                    className='cursor-pointer'
                    onClick={() => setMenuOpen(false)}
                  >
                    <IoCloseCircle className='w-16 h-16  rounded-xl  text-slate-900 hover:text-primary-700' />
                  </span>
                </Typography>
                {allLinks.map((link, i) => (
                  <Typography
                    key={i}
                    as='li'
                    size='h2'
                    className='link text-slate-700 self-start'
                  >
                    <Link scroll={false} href={link.href}>
                      {link.text}
                    </Link>
                  </Typography>
                ))}
                <Typography as='li' size='h1' className=' self-stretch'>
                  <Button
                    type='secondary'
                    size='large'
                    icon={IoDownloadOutline}
                    href='/Tashinga-Mtoko-Fullstack-Developer-CV.pdf'
                    download
                    className='w-full self-stretch'
                  >
                    Download My CV
                  </Button>
                </Typography>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollMenu;
