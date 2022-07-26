import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import groq from 'groq';
import client from '../../client';
import Image from 'next/image';
import PortFolioPieceCover from '../../components/portfolio/PortFolioPieceCover';
import { PortfolioPieceType } from '../../components/portfolio/types';
import PortfolioCard from '../../components/portfolio/PortfolioCard';
import Typography from '../../components/typography/Typography';
import Divider from '../../components/divider/Divider';
import Button from '../../components/button/Button';
import {
  IoCalendar,
  IoChatbubbleEllipsesOutline,
  IoChatbubbleEllipsesSharp,
} from 'react-icons/io5';
import FooterSecondaryContactCard from '../../components/navigation/FooterSecondaryContactCard';
import PageMeta from '../../components/seo/PageMeta';

type Props = {
  portfolioPieces: Array<PortfolioPieceType>;
};

const PortfolioCollectionsPage = ({ portfolioPieces }: Props) => {
  return (
    <div className='mt-8 md:mt-32 grid gap-16 md:gap-24 container-1 text-gray-900'>
      <PageMeta title={'Portfolio'} />
      <article className=' grid gap-6'>
        <Typography size='display2' as='h1' bold className='tracking-tighter'>
          Some of my past projects and work.
        </Typography>
        <Typography size='body1' as='p'>
          Below are some of my publicly available work, some are design only,
          design and development or development only projects. Please feel free
          to get in touch with me if you need more information.
        </Typography>
      </article>
      <section className='grid  gap-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 custom-portfolio-grid'>
          {portfolioPieces.map((piece, i) => (
            <PortfolioCard
              key={i}
              portfolio={piece}
              className={
                i % 2 === 0 || i % 3 === 0 ? 'lg:col-span-1' : 'lg:col-span-2'
              }
            />
          ))}
          <article className='w-full h-full p-8 md:px-10 md:py-10 bg-primary-50/20 rounded-xl md:rounded-3xl border-2 border-dashed border-primary-100 flex flex-col gap-4 justify-center '>
            <Typography size='body2' bold className='mb-[-13px] opacity-80'>
              Your project goes here:
            </Typography>
            <Typography size='h2' as='h1' className=''>
              Do you have project you think I could help you with?
            </Typography>
            <Button
              type='tertiary'
              href='/hi'
              size='large'
              className='justify-self-start self-start mt-5'
              icon={IoCalendar}
              iconPosition='left'
            >
              Book some time with me
            </Button>
          </article>
        </div>
      </section>
      {/* <Divider type='dotted' prominent /> */}
      <FooterSecondaryContactCard />
      {''}
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
