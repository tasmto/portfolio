import Image from 'next/image';
import { title } from 'process';
import React from 'react';
import { PortfolioPieceType } from '../../pages/portfolio/types';
import GetResourceUrl from '../sanityio/GetResourceURL';
import Typography from '../typography/Typography';

type Props = {
  technologies: PortfolioPieceType['technologies'];
};

const TechStacksCards = ({ technologies }: Props) => {
  return (
    <section className='grid grid-cols-2 gap-4'>
      {technologies.map((tech, i) => (
        <article
          key={i}
          className='p-3 py-4 md:p-6 bg-primary-50/50 rounded-xl  flex gap-2 items-start'
        >
          <Image
            src={GetResourceUrl(tech.icon.asset)
              .width(120)
              .height(120)
              .fit('max')
              .auto('format')
              .url()}
            alt=''
            loading='lazy'
            className='object-cover !h-full bg-slate-600 self-start'
            width={60}
            height={60}
          />
          <div className='grid gap-1'>
            <Typography size='h3' as='h2' className='text-primary-500'>
              {tech.name}
            </Typography>
            <Typography size='body3' as='p' className='text-gray-500'>
              {tech.description}
            </Typography>
          </div>
        </article>
      ))}
    </section>
  );
};

export default TechStacksCards;
