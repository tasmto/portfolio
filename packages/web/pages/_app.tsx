import '../styles/styles.css';
import type { AppProps } from 'next/app';
import SiteWrapper from '../components/Layout';
import React from 'react';
import Footer from '../features/navigation/components/Footer';
import NavBar from '../features/navigation/components/NavBar';
import LogRocket from 'logrocket';

import { AnimatePresence, motion } from 'framer-motion';
import PageMeta from '../components/seo/Seo';

function MyApp({ Component, pageProps }: AppProps) {
  if (process.env.NEXT_PUBLIC_NODE_ENV === 'production')
    LogRocket.init('fjdwny/portfolio');

  return (
    <div
      id='main'
      className='min-h-[80vh] max-w-[100vw] mb-[80px] md:mb-0 md:gap-32 selection:bg-primary-100 selection:text-primary-800 relative'
    >
      <PageMeta />
      <NavBar />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default MyApp;
