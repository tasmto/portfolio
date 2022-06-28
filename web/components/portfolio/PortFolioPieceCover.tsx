import { SanityReference } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import React from 'react';
import GetResourceUrl from '../sanityio/GetResourceURL';

type Props = {
  coverVideo: string;
  title: string;
  subtitle: string;
  coverImage: { asset: { _ref: SanityReference } };
};

const PortFolioPieceCover = ({
  coverVideo,
  title,
  subtitle,
  coverImage,
}: Props) => {
  console.log(coverVideo);
  return (
    <article className='py-8 md:py-14 bg-slate-400 relative h-[85vh] min-h-[350px] border-b border-slate-300 shadow-xl overflow-hidden'>
      <div className='w-full h-full absolute top-0 left-0 bg-primary-500'>
        {/* {coverVideo && (
          <div className='relative overflow-hidden  z-10 h-full w-full'>
            <iframe
              title='Cover Video going through the portfolio piece'
              loading='lazy'
              src={coverVideo}
              className='absolute top-0 left-0 w-full h-full pointer-events-none'
            ></iframe>
          </div>
        )} */}
        <Image
          src={GetResourceUrl(coverImage.asset._ref)
            .width(1920)
            .height(1080)
            .fit('max')
            .auto('format')
            .url()}
          alt=''
          layout='fill'
          loading='lazy'
          className='object-cover z-[1] !h-full pointer-events-none opacity-95'
        />
      </div>
    </article>
  );
};

export default PortFolioPieceCover;
