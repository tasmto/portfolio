import React from 'react';
import { SanityReference } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import { PortfolioPieceType } from '../../pages/portfolio/types';
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
import Link from 'next/link';

type Props = {
  portfolio: PortfolioPieceType;
  className?: string;
};

const PortfolioCard = ({ portfolio, className = '' }: Props) => {
  return (
    <Link href={`/portfolio/${portfolio?.slug?.current}`}>
      <a
        className={`px-6 relative min-h-[250px] py-16 md:py-20 overflow-hidden grid gap-6 bg-cover bg-center bg-no-repeat rounded-xl before:block before:absolute before:top-0 before:w-full before:h-full before:bg-primary-900/40 hover:before:backdrop-blur-sm before:hover:bg-primary-900/70 before:transition-colors before:duration-300 cursor-eye ${className}`}
        style={{
          backgroundImage: `url(${GetResourceUrl(
            portfolio?.bannerImage?.asset
              ? portfolio.bannerImage.asset
              : portfolio?.productImage?.asset
          )
            .width(1080)
            .height(500)
            .blur(12)
            .fit('max')
            .auto('format')
            .url()})`,
        }}
      >
        <div className='z-10 grid gap-2 max-w-md'>
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
            size='display3'
            as='h1'
            className='text-white tracking-tight drop-shadow-lg max-w-2xl'
          >
            {portfolio.projectName} — {portfolio.projectSubtitle}
          </Typography>
        </div>
        <div className='z-10 self-end justify-self-start mt-6'>
          {portfolio?.slug && (
            <Button
              type='text-light'
              size='large'
              className='pl-0 drop-shadow-md !text-slate-200 hover:!text-white transition-colors'
              href={portfolio?.slug.current}
              externalLink
              icon={IoArrowForwardOutline}
            >
              View live project
            </Button>
          )}
        </div>
      </a>
    </Link>
  );
};

export default PortfolioCard;
