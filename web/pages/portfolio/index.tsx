import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import groq from 'groq';
import client from '../../client';
import Image from 'next/image';
import PortFolioPieceCover from '../../components/portfolio/PortFolioPieceCover';
import { PortfolioPieceType } from './types';
import PortfolioCard from '../../components/portfolio/PortfolioCard';
import Typography from '../../components/typography/Typography';
import Divider from '../../components/divider/Divider';
import Button from '../../components/button/Button';
import {
  IoChatbubbleEllipsesOutline,
  IoChatbubbleEllipsesSharp,
} from 'react-icons/io5';

type Props = {
  portfolioPieces: Array<PortfolioPieceType>;
};

const PortfolioCollectionsPage = ({ portfolioPieces }: Props) => {
  return (
    <div className='mt-32 grid gap-16 md:gap-24 container-1 text-gray-900'>
      <article className='max-w-2xl grid gap-6'>
        <Typography size='display1' as='h1'>
          Some of my past projects and work.
        </Typography>
        <Typography size='body1' as='p'>
          Below are some of my publicly available work, whether they are design
          only, design and development or development only projects. Please feel
          free to get in touch with me if you need more information.
        </Typography>
      </article>
      <section className='grid  gap-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {portfolioPieces.map((piece, i) => (
            <PortfolioCard
              portfolio={piece}
              className={
                i % 2 === 0 || i % 3 === 0 ? 'lg:col-span-1' : 'lg:col-span-2'
              }
            />
          ))}
        </div>
      </section>
      <Divider type='dotted' prominent />
      <section className='p-10 md:p-14 bg-primary-50/50 rounded-2xl flex flex-col md:flex-row justify-between md:items-center gap-6'>
        <Typography as='h2' size='h2' className='flex gap-4 items-center'>
          <IoChatbubbleEllipsesSharp className='h-8 w-8 text-secondary-500' />
          <span>You can get in touch with me any way you'd like.</span>
        </Typography>
        <Button
          type='tertiary'
          size='large'
          className='!items-center'
          href='/#contact'
        >
          Get in touch
        </Button>
      </section>
    </div>
  );
};

const query = groq`*[_type == "portfolio"] | order(featured desc)`;

export const getStaticProps = async () => {
  const portfolioPieces = await client.fetch(query);
  return {
    props: { portfolioPieces },
  };
};

export default PortfolioCollectionsPage;
