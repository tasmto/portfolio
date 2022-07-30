import React from 'react';
import Footer from '../features/navigation/components/Footer';
import NavBar from '../features/navigation/components/NavBar';
import LogRocket from 'logrocket';
import PageMeta from './seo/Seo';

type Props = {
  children: React.ReactNode;
};

/**
 * @description Wrapper for the site, includes global stuff Redux stores etc if needed.
 */
const SiteWrapper = ({ children }: Props) => {
  if (process.env.NEXT_PUBLIC_NODE_ENV === 'production')
    LogRocket.init('fjdwny/portfolio');
  return (
    <>
      <PageMeta />
      <div
        id='main'
        className='min-h-[80vh] max-w-[100vw] mb-[80px] md:mb-0 md:gap-32 selection:bg-primary-100 selection:text-primary-800 relative'
      >
        <NavBar />
        <main id='#content'>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default SiteWrapper;
