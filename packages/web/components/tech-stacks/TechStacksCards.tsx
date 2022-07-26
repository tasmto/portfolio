import Image from 'next/image';
import { title } from 'process';
import React from 'react';
import { PortfolioPieceType } from '../portfolio/types';
import GetResourceUrl from '../sanityio/GetResourceURL';
import Typography from '../typography/Typography';

type Props = {
  technologies: PortfolioPieceType['technologies'];
};

const TechStacksCards = ({ technologies }: Props) => {
  if (!technologies) return null;

  return (
    <section className='grid sm:grid-cols-2 gap-4' style={{}}>
      {technologies.map((tech, i) => (
        <article
          key={i}
          className='p-3 py-4 md:p-6 bg-slate-100 border border-slate-200 bg-gradient-to-tr from-slate-100 to-slate-50 rounded-xl grid gap-4 items-start'
        >
          <img
            src={GetResourceUrl(tech.icon.asset)
              .width(40)
              .height(40)
              .fit('max')
              .auto('format')
              .url()}
            alt=''
            loading='lazy'
            className=' self-start'
            width={40}
            height={40}
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
