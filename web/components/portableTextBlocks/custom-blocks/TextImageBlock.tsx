import { SanityReference } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import React from 'react';
import GetResourceUrl from '../../sanityio/GetResourceURL';
import Typography from '../../typography/Typography';

type Props = {
  content: {
    description?: string;
    heading?: string;
    image: { asset: { _ref: SanityReference; _type: string } };
    link?: string;
    linkText?: string;
    textLast?: boolean;
  };
};

const TextImageBlock = ({ content }: Props) => {
  const { description, heading, image, link, linkText, textLast } = content;
  if (!image?.asset?._ref) return null;
  return (
    <section className='grid grid-cols-1 md:grid-cols-5 items-center gap-10 md:gap-8'>
      <div className='col-span-3 shadow-xl border border-gray-200 rounded-lg'>
        <Image
          src={GetResourceUrl(image?.asset?._ref)
            .width(1280)
            .height(720)
            .fit('max')
            .auto('format')
            .url()}
          alt=''
          loading='lazy'
          width={1280}
          height={720}
          className='object-cover !h-full'
        />
      </div>
      <div
        className={`col-span-2 grid gap-5 md:gap-8 md:max-w-sm md:self-center md:justify-self-center ${
          textLast ? 'order-last' : 'order-first'
        }`}
      >
        {heading && (
          <Typography as='h2' size='h1'>
            {heading}
          </Typography>
        )}
        {description && (
          <Typography as='p' size='body2'>
            {description}
          </Typography>
        )}
      </div>
    </section>
  );
};

export default TextImageBlock;
