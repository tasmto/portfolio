import React from 'react';
import Footer from '../navigation/Footer';
import NavBar from '../navigation/NavBar';
import PageMeta from '../seo/PageMeta';
import LogRocket from 'logrocket';

type Props = {
  children: React.ReactNode;
};

/**
 * @description Wrapper for the site, includes global stuff Redux stores etc if needed.
 */
const SiteWrapper = ({ children }: Props) => {
  if (process.env.NODE_ENV === 'production') LogRocket.init('fjdwny/portfolio');
  return (
    <>
      <PageMeta />
      <div
        id='main'
        className='min-h-[80vh] max-w-[100vw] mb-[80px] md:mt-[70px] md:mb-0 md:gap-32 selection:bg-primary-500 selection:text-primary-100 relative'
      >
        <NavBar />
        <main id='#content'>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default SiteWrapper;
