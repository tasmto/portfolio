import { SanityReference } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import React from 'react';
import { PortfolioPieceType } from '../../pages/portfolio/types';
import GetResourceUrl from '../sanityio/GetResourceURL';
import Typography from '../typography/Typography';

type Props = {
  portfolio: PortfolioPieceType;
};

const PortFolioPieceCover = ({ portfolio }: Props) => {
  return (
    <div className='grid gap-6 md:gap-10'>
      <div className='bg-slate-100 shadow-xl overflow-hidden rounded-2xl border'>
        <article className='px-6 py-8 md:py-14 relative h-[85vh] min-h-[250px] max-h-[400px]  grid align-center'>
          <div
            className='w-full h-full absolute top-0 left-0 opacity-10'
            style={{
              backgroundImage: `url(${GetResourceUrl(
                portfolio.productImage.asset
              )
                .width(500)
                .height(500)
                .fit('max')
                .auto('format')
                .blur(40)
                .url()})`,
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
            }}
          ></div>
          <div className='z-10 grid gap-2 self-center'>
            {/* <Typography
              size='body3'
              as='p'
              className='text-primary-400 mb-6'
              bold
            >
              {startDateString} — {endDateString}
            </Typography> */}
            <Typography
              size='display1'
              as='h1'
              className='text-primary-600 !font-regular'
            >
              {portfolio.projectName} — {portfolio.projectSubtitle}
            </Typography>
            {/* <Typography size='h2' as='h1' className='text-primary-400'>
              {subtitle}
            </Typography> */}
          </div>
        </article>
      </div>
    </div>
  );
};

export default PortFolioPieceCover;
