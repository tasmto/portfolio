import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PortfolioPieceType } from './types';
import GetResourceUrl from '../sanityio/GetResourceURL';
import Typography from '../typography/Typography';

type Props = {
  projects: PortfolioPieceType['relatedProjects'];
};

const RecommendedProjectsCards = ({ projects }: Props) => {
  if (!projects) return null;

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      {projects.map((project, i) => (
        <Link key={i} href={`/portfolio/${project?.slug.current}`}>
          <a className='grid gap-4'>
            <figure className='grid gap-4 group'>
              {(project?.productImage?.asset ||
                project?.bannerImage?.asset) && (
                <span className='cursor-eye relative before:z-10 before:block before:absolute before:top-0 before:w-full before:h-full  group-hover:before:backdrop-blur-[1px] before:group-hover:bg-primary-900/30 before:transition-colors before:duration-300'>
                  <Image
                    src={GetResourceUrl(
                      project?.productImage?.asset ||
                        project?.bannerImage?.asset
                    )
                      .width(1280)
                      .height(720)
                      .fit('max')
                      .auto('format')
                      .url()}
                    alt=''
                    className='rounded-lg'
                    loading='lazy'
                    width={1280}
                    height={720}
                  />
                </span>
              )}

              <Typography
                as='figcaption'
                size='h2'
                className='text-slate-400 group-hover:text-slate-300'
              >
                {project?.projectName} — {project?.projectSubtitle}
              </Typography>
            </figure>
          </a>
        </Link>
      ))}
    </section>
  );
};

export default RecommendedProjectsCards;
