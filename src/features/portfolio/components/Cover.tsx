import React from 'react';
import {
  IoArrowForwardOutline,
  IoLogoGithub,
  IoPlayOutline,
  IoTodayOutline,
} from 'react-icons/io5';
import { motion } from 'framer-motion';

import Button from '@/components/button/Button';
import Tag from '@/components/tags/Tag';
import Typography from '@/components/typography/Typography';
import { urlFor } from '@/lib/sanity';

import { PortfolioPieceType } from '../types';

type Props = {
  portfolio: PortfolioPieceType;
};

const PortFolioPieceCover = ({ portfolio }: Props) => {
  if (!portfolio?.coverImage?.asset && !portfolio?.coverImage?.asset)
    return null;
  return (
    <div className='grid gap-6 md:gap-10 w-full m-auto md:mb-14'>
      <div
        className=' bg-gradient-to-tr  bg-slate-900  from-slate-900/80 to-slate-900 border px-2 grid pt-16 md:pt-32 bg-fixed shadow-inner'
        // style={{ backgroundImage: 'url("/images/section-bg.webp")' }}
      >
        <div className='container-1 w-full'>
          <div className='z-10 grid gap-2'>
            <Tag color={portfolio?.completedAt ? 'secondary' : 'tertiary'}>
              <>
                <IoTodayOutline className='h-5 w-5' />
                <span>
                  {portfolio?.completedAt
                    ? `Completed: 
            ${new Date(portfolio?.completedAt).toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric',
            })}`
                    : 'Ongoing'}
                </span>
              </>
            </Tag>
            <Typography
              size='display1'
              as='h1'
              className='text-white tracking-tight drop-shadow-md max-w-3xl'
            >
              <strong>{portfolio.projectName}</strong> —{' '}
              {portfolio.projectSubtitle}
            </Typography>
          </div>
          <div className='z-10 self-end justify-self-start  mt-8 flex flex-wrap gap-4 '>
            {portfolio?.liveUrl && (
              <Button
                type='primary'
                className='drop-shadow-md transition-colors'
                href={portfolio.liveUrl}
                externalLink
                icon={IoArrowForwardOutline}
              >
                View live project
              </Button>
            )}
            {portfolio?.repoUrl && (
              <Button
                type='tertiary'
                href={portfolio.repoUrl}
                className='drop-shadow-md'
                externalLink
                icon={IoLogoGithub}
              >
                View the code
              </Button>
            )}
            {portfolio?.walkthrough && (
              <Button
                type='secondary'
                href={portfolio.walkthrough}
                className='drop-shadow-md'
                externalLink
                icon={IoPlayOutline}
              >
                Video Walkthrough
              </Button>
            )}
          </div>
        </div>

        <article className='w-full mt-[-10px] translate-y-10 md:translate-y-14 container-1 px-6 relative py-16 md:pt-24 lg:pt-32 md:pb-20  grid content-center gap-6 min-h-[300px] md:min-h-[450px] lg:min-h-[600px]'>
          <motion.div
            className='w-full h-full absolute top-0 left-0 bg-cover bg-top
            bg-no-repeat rounded-3xl bg-fixed shadow-lg '
            style={{
              // y: y2,
              backgroundImage: `url(${
                urlFor(
                  portfolio?.coverImage?.asset
                    ? portfolio?.coverImage?.asset
                    : portfolio.coverImage?.asset
                )
                  ?.width(1500)
                  ?.height(1080)
                  ?.fit('max')
                  ?.auto('format')
                  ?.url() ?? ''
              })`,
            }}
          ></motion.div>
        </article>
      </div>
    </div>
  );
};

export default PortFolioPieceCover;
