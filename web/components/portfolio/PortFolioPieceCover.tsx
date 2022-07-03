import { SanityReference } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import React from 'react';
import { PortfolioPieceType } from './types';
import GetResourceUrl from '../sanityio/GetResourceURL';
import Typography from '../typography/Typography';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Button from '../button/Button';
import {
  IoArrowForwardOutline,
  IoLogoGithub,
  IoPlayOutline,
  IoTodayOutline,
} from 'react-icons/io5';

type Props = {
  portfolio: PortfolioPieceType;
};

const PortFolioPieceCover = ({ portfolio }: Props) => {
  if (!portfolio?.bannerImage?.asset || portfolio?.productImage?.asset)
    return null;
  return (
    <div className='grid gap-6 md:gap-10'>
      <div className='bg-primary-900 shadow-xl overflow-hidden rounded-2xl border'>
        <article className='px-6 relative min-h-[250px] py-16 md:pt-24 lg:pt-32 md:pb-20 overflow-hidden grid content-center gap-6'>
          <motion.div
            className='w-full h-full absolute top-0 left-0 bg-cover bg-center
            bg-no-repeat opacity-60 '
            style={{
              // y: y2,
              backgroundImage: `url(${GetResourceUrl(
                portfolio?.bannerImage?.asset
                  ? portfolio.bannerImage?.asset
                  : portfolio?.productImage?.asset
              )
                .width(1080)
                .height(500)
                .fit('max')
                .blur(5)
                .auto('format')
                .url()})`,
            }}
          ></motion.div>
          <div className='z-10 grid gap-2'>
            <Typography
              size='body3'
              as='p'
              className='text-white justify-self-start self-start tracking-tight drop-shadow-xl bg-secondary-900/70 backdrop-blur-xl max-w-2xl px-2 rounded-b-sm rounded-t-md m-0 flex gap-3'
            >
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
            </Typography>
            <Typography
              size='display1'
              as='h1'
              className='text-white tracking-tight drop-shadow-md max-w-2xl'
            >
              {portfolio.projectName} — {portfolio.projectSubtitle}
            </Typography>
          </div>
          <div className='z-10 self-end justify-self-start mt-6'>
            {portfolio?.liveUrl ? (
              <Button
                type='text-light'
                size='large'
                className='pl-0 drop-shadow-md !text-slate-200 hover:!text-white transition-colors'
                href={portfolio.liveUrl}
                externalLink
                icon={IoArrowForwardOutline}
              >
                View live project
              </Button>
            ) : portfolio?.repoUrl ? (
              <Button
                type='text-light'
                href={portfolio.repoUrl}
                className='pl-0 drop-shadow-md'
                externalLink
                icon={IoLogoGithub}
              >
                View the code
              </Button>
            ) : portfolio?.walkthrough ? (
              <Button
                type='text-light'
                href={portfolio.walkthrough}
                className='pl-0 drop-shadow-md'
                externalLink
                icon={IoPlayOutline}
              >
                View Walkthrough
              </Button>
            ) : null}
          </div>
        </article>
      </div>
    </div>
  );
};

export default PortFolioPieceCover;
