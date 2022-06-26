import React from 'react';
import GoogleCaptchaWrapper from '../captcha/GoogleCaptchaWrapper';
import NavBar from '../navigation/NavBar';
import PageMeta from '../seo/PageMeta';

type Props = {
  children: React.ReactNode;
};

/**
 * @description Wrapper for the site, includes global stuff Redux stores etc if needed.
 */
const SiteWrapper = ({ children }: Props) => {
  return (
    <>
      <PageMeta />
      <div
        id='main'
        className='min-h-[80vh] max-w-[100vw] mb-[80px] md:mt-[80px] md:mb-4 md:gap-32 selection:bg-primary-500 selection:text-primary-100 relative'
      >
        <NavBar />
        <main id='#content'>
          <GoogleCaptchaWrapper>{children}</GoogleCaptchaWrapper>
        </main>
      </div>
    </>
  );
};

export default SiteWrapper;
