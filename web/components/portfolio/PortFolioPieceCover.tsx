import { SanityReference } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import React from 'react';
import { PortfolioPieceType } from '../../pages/portfolio/types';
import GetResourceUrl from '../sanityio/GetResourceURL';
import Typography from '../typography/Typography';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Button from '../button/Button';
import {
  IoArrowForwardOutline,
  IoLogoGithub,
  IoPlayOutline,
} from 'react-icons/io5';

type Props = {
  portfolio: PortfolioPieceType;
};

const PortFolioPieceCover = ({ portfolio }: Props) => {
  const { scrollY } = useViewportScroll();
  // const y2 = useTransform(scrollY, [0, 10], [0, 10]);

  return (
    <div className='grid gap-6 md:gap-10'>
      <div className='bg-slate-900 shadow-xl overflow-hidden rounded-2xl border'>
        <article className='px-6 py-8 md:py-14 relative h-[85vh] min-h-[250px] max-h-[400px] overflow-hidden grid content-center gap-6'>
          <motion.div
            className='w-full h-full absolute top-0 left-0 bg-[120%] bg-center
            bg-no-repeat opacity-90'
            style={{
              // y: y2,
              backgroundImage: `url(${GetResourceUrl(
                portfolio?.bannerImage?.asset
                  ? portfolio.bannerImage.asset
                  : portfolio?.productImage?.asset
              )
                .width(1080)
                .height(500)
                .blur(10)
                .fit('max')
                .auto('format')
                .url()})`,
            }}
          ></motion.div>
          <div className='z-10 grid gap-2'>
            {/* <Typography
              size='body3'
              as='p'
              className='text-primary-400 mb-6'
              bold
            >
              {startDateString} — {endDateString}
            </Typography> */}
            <Typography size='display2' as='h1' className='text-white max-w-xl'>
              {portfolio.projectName} — {portfolio.projectSubtitle}
            </Typography>
          </div>
          <div className='z-10 self-end'>
            {portfolio?.liveUrl ? (
              <Button
                type='text-light'
                size='large'
                className='px-0'
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
                externalLink
                icon={IoLogoGithub}
              >
                View the code
              </Button>
            ) : portfolio?.walkthrough ? (
              <Button
                type='text-light'
                href={portfolio.walkthrough}
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
