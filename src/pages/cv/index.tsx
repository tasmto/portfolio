import React from 'react';
import Link from 'next/link';

import Button from '@/components/button/Button';
import Layout from '@/components/Layout';
import PageMeta from '@/components/seo/Seo';
import PageTitle from '@/features/pages/components/Title';

type Props = {};

const index = (props: Props) => {
  const onDownloadCV = () => {
    window?.open(
      'https://github.com/tasmto/tasmto/releases/download/1.0/Tashinga.Mtoko.CV.pdf',
      '_blank'
    );
  };
  return (
    <Layout>
      <div className='mt-8 md:mt-32 grid gap-16 md:gap-24 container-1 text-gray-900'>
        <PageMeta title={'Portfolio'} />
        <PageTitle
          showDivider={false}
          title='Below is my most up-to-date CV/ Resume.'
          body={
            <>
              {' '}
              I reccomend having a look at my{' '}
              <Link href='/'>
                <a className='link'>portfolio projects</a>
              </Link>{' '}
              first but if you really need a PDF then you can download it below:
              <Button
                onClick={onDownloadCV}
                type='primary'
                width='block'
                className='mt-10'
              >
                Download CV
              </Button>
            </>
          }
        />
      </div>
    </Layout>
  );
};

export default index;
