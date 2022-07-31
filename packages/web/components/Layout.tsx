import React from 'react';
import Footer from '../features/navigation/components/Footer';
import NavBar from '../features/navigation/components/NavBar';
import LogRocket from 'logrocket';
import PageMeta from './seo/Seo';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};

/**
 * @description Wrapper for the site, includes global stuff Redux stores etc if needed.
 */
const Layout = ({ children }: Props) => {
  const variants = {
    hidden: { opacity: 0, x: -200 },
    enter: { opacity: 1, x: 0, y: 0, duration: 1 },
    exit: { opacity: 0, x: 200, duration: 0.6 },
  };

  return (
    <motion.main
      id='#content'
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      {children}
    </motion.main>
  );
};

export default Layout;
