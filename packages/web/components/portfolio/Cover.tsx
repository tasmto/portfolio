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
import Tag from '../tags/Tag';

type Props = {
  portfolio: PortfolioPieceType;
};

const PortFolioPieceCover = ({ portfolio }: Props) => {
  if (!portfolio?.bannerImage?.asset && !portfolio?.productImage?.asset)
    return null;
  return (
    <div className='grid gap-6 md:gap-10 w-full m-auto max-w-[100rem] md:mb-14'>
      <div
        className='bg-primary-900 rounded-3xl 2xl:rounded-[3rem] border px-2 grid pt-12 bg-fixed shadow-inner'
        style={{ backgroundImage: 'url("/images/section-bg.webp")' }}
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
              bold
              size='display2'
              as='h1'
              className='text-white tracking-tight drop-shadow-md max-w-3xl'
            >
              {portfolio.projectName} — {portfolio.projectSubtitle}
            </Typography>
          </div>
          <div className='z-10 self-end justify-self-start mt-4 flex flex-wrap gap-4 gap-y-0'>
            {portfolio?.liveUrl && (
              <Button
                type='text-light'
                size='large'
                className='px-0 py-2 drop-shadow-md transition-colors'
                href={portfolio.liveUrl}
                externalLink
                icon={IoArrowForwardOutline}
              >
                View live project
              </Button>
            )}
            {portfolio?.repoUrl && (
              <Button
                type='text-light'
                href={portfolio.repoUrl}
                className='px-0 py-2 drop-shadow-md'
                externalLink
                icon={IoLogoGithub}
              >
                View the code
              </Button>
            )}
            {portfolio?.walkthrough && (
              <Button
                type='text-light'
                href={portfolio.walkthrough}
                className='px-0 py-2 drop-shadow-md'
                externalLink
                icon={IoPlayOutline}
              >
                View Walkthrough
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
              backgroundImage: `url(${GetResourceUrl(
                portfolio?.productImage?.asset
                  ? portfolio?.productImage?.asset
                  : portfolio.bannerImage?.asset
              )
                .width(1066)
                .height(600)
                .fit('max')
                .auto('format')
                .url()})`,
            }}
          ></motion.div>
          {/* <div className='z-10 grid gap-2'>
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
              bold
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
          </div> */}
        </article>
      </div>
    </div>
  );
};

export default PortFolioPieceCover;
