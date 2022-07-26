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
      <title>{`Tashinga | ${title}`}</title>
      <meta name='description' content={description} />
      <link rel='icon' href={favicon} />
    </Head>
  );
};

export default PageMeta;
