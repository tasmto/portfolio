import Head from 'next/head';
import React from 'react';

type Props = {
  title?: string;
  description?: string;
  favicon?: string;
};

const PageMeta = ({
  title = 'Full Stack Developer',
  description = 'Tashinga is a full stack developer who specializes in JavaScript, React, Node, and MongoDB.',
  favicon = '/favicon.ico',
}: Props) => {
  return (
    <Head>
      <title>Tashinga | {title}</title>
      <meta name='description' content={description} />
      <link rel='icon' href={favicon} />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='true'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap'
        rel='stylesheet'
      />
    </Head>
  );
};

export default PageMeta;
