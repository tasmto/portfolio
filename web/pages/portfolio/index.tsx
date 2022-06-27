import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import groq from 'groq';
import client from '../../client';
import Image from 'next/image';

type Props = {
  portfolioPieces: Array<{
    _id: string;
    title: string;
    slug: any;
    publishedAt: string;
  }>;
};

const Home = ({ portfolioPieces }: Props) => {
  console.log(portfolioPieces);
  return (
    <>
      <h1>Portfolio Collection page</h1>
    </>
  );
};

export const getStaticProps = async () => {
  const portfolioPieces = await client.fetch(
    groq`*[_type == "_type:portfolio" && publishedAt < now()] | order(publishedAt desc)`
  );
  return {
    props: { portfolioPieces },
  };
};

export default Home;
