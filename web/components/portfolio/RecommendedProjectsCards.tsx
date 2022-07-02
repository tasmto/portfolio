import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PortfolioPieceType } from '../../pages/portfolio/types';
import GetResourceUrl from '../sanityio/GetResourceURL';
import Typography from '../typography/Typography';

type Props = {
  projects: PortfolioPieceType['relatedProjects'];
};

const RecommendedProjectsCards = ({ projects }: Props) => {
  if (!projects) return null;

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      <Typography as='h2' size='h1' className='md:col-span-2 mb-2'>
        Related Projects:
      </Typography>
      {projects.map((project, i) => (
        <Link key={i} href={`/portfolio/${project?.slug.current}`}>
          <a className='grid gap-4'>
            <figure className='grid gap-4'>
              {(project?.productImage?.asset ||
                project?.bannerImage?.asset) && (
                <Image
                  src={GetResourceUrl(
                    project?.productImage?.asset || project?.bannerImage?.asset
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
              )}

              <Typography as='figcaption' size='h2'>
                {project.projectName} — {project.projectSubtitle}
              </Typography>
            </figure>
          </a>
        </Link>
      ))}
    </section>
  );
};

export default RecommendedProjectsCards;
