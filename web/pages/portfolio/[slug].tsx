import client from '../../client';
import groq from 'groq';
import PortFolioPieceCover from '../../components/portfolio/PortFolioPieceCover';
import PageScrollLine from '../../components/pagescroll-tracker/PageScrollLine';
import { PortfolioPieceType } from '../../components/portfolio/types';
import PortableTextParser from '../../components/portableTextBlocks/PortableTextParser';
import Typography from '../../components/typography/Typography';
import Divider from '../../components/divider/Divider';
import TechStacksCards from '../../components/tech-stacks/TechStacksCards';
import Image from 'next/image';
import GetResourceUrl from '../../components/sanityio/GetResourceURL';
import { IoBowlingBall, IoCamera, IoCameraOutline } from 'react-icons/io5';
import Button from '../../components/button/Button';
import RecommendedProjectsCards from '../../components/portfolio/RecommendedProjectsCards';
import FooterSecondaryContactCard from '../../components/navigation/FooterSecondaryContactCard';
import PageMeta from '../../components/seo/PageMeta';

// Guide: https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js#3085b10bbadd

type Props = {
  piece: PortfolioPieceType;
};

const PortfolioPiece = ({ piece }: Props) => {
  if (!piece) return null;
  return (
    <>
      <PageMeta title={piece?.projectName || 'Portfolio'} />
      <PageScrollLine />
      <div className='bg-slate-50/20 text-gray-900 snap-proximity snap-y  grid gap-16 md:gap-24 '>
        <div className='container-1 grid gap-16 mt-8 lg:gap-24 snap-start'>
          <PortFolioPieceCover portfolio={piece} />

          <div className='grid gap-10 md:gap-20 container-3'>
            {piece?.brief && (
              <article className='grid gap-6'>
                <Typography
                  size='body3'
                  as='h3'
                  className='text-primary-500 !font-medium'
                >
                  The brief/ challenge
                </Typography>
                <Typography size='body2' as='div'>
                  <PortableTextParser content={piece?.brief} />
                </Typography>
              </article>
            )}
            <Divider type='dotted' prominent />
            {piece?.extract && (
              <article className='grid gap-6 '>
                <Typography
                  size='body3'
                  as='h3'
                  className='text-primary-500 !font-medium'
                >
                  The solution
                </Typography>
                <Typography size='body2' as='div'>
                  {<PortableTextParser content={piece?.extract} />}
                </Typography>
              </article>
            )}

            <TechStacksCards technologies={piece?.technologies} />
            <Divider type='dotted' prominent />
          </div>
          {piece?.productImage?.asset && (
            <figure className='grid gap-4'>
              <a
                href={piece?.liveUrl || piece?.repoUrl || 'javascript:void(0)'}
                target={(piece?.liveUrl || piece?.repoUrl) && '_blank'}
                rel='noreferrer'
                className='block'
              >
                <Image
                  src={GetResourceUrl(piece?.productImage.asset)
                    .width(1280)
                    .height(720)
                    .fit('max')
                    .auto('format')
                    .url()}
                  alt=''
                  className='rounded-xl shadow-primary-200/10 border border-gray-200'
                  loading='lazy'
                  width={1280}
                  height={720}
                />
              </a>
              <div className='flex gap-4 text-slate-400 items-center container-3 w-full'>
                <IoCamera className='w-5 h-5' />
                <Typography as='figcaption' size='body3'>
                  An Image of the final product
                  {(piece?.liveUrl || piece?.repoUrl) && (
                    <a
                      href={
                        piece?.liveUrl || piece?.repoUrl || 'javascript:void(0)'
                      }
                      target='_blank'
                      rel='noreferrer'
                      className='text-primary-200 hover:text-primary-300 font-medium underline underline-offset-8'
                    >
                      {piece?.liveUrl
                        ? ' view live project'
                        : ' view the github repo'}
                    </a>
                  )}
                  .
                </Typography>
              </div>
            </figure>
          )}

          {piece?.body && (
            <PortableTextParser
              content={piece?.body}
              className={'grid gap-14 md:gap-22 lg:gap-24 container-3'}
            />
          )}
        </div>
        <div className='w-full h-full max-w-[100vw] min-h-[80vh] grid items-center gap-10 overflow-x-hidden bg-primary-700 py-20 text-white snap-start'>
          <section className='container-2 grid gap-4 w-full'>
            <Divider type='solid' />
            <div className='flex flex-wrap gap-4 md:gap-10 justify-between items-center'>
              <Typography size='h3' as='h3'>
                Thank you so much for checking out this project!
              </Typography>
              <div className='flex gap-4'>
                {piece?.repoUrl && (
                  <Button
                    type='tertiary'
                    size='small'
                    href={piece?.repoUrl}
                    externalLink
                  >
                    View the code
                  </Button>
                )}
                {piece?.liveUrl && (
                  <Button
                    type='primary'
                    size='small'
                    href={piece?.liveUrl}
                    externalLink
                  >
                    View the live project
                  </Button>
                )}
              </div>
            </div>

            <Divider type='solid' className='mb-10' />
            <RecommendedProjectsCards projects={piece?.relatedProjects} />
          </section>
        </div>
        <div className='container-1  grid gap-16 md:gap-24 w-full'>
          <FooterSecondaryContactCard />
        </div>
      </div>
    </>
  );
};

const query = groq`*[_type == "portfolio" && slug.current == $slug][0]{
  ...,
  "technologies": technologies[]->{name, icon, description,featured},
"relatedProjects": relatedProjects[]->{bannerImage,productImage,projectName, projectSubtitle, slug}
 }`;

// This validates whether the slug is correct, exists and makes it available for getStaticProps.
export const getStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "portfolio" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
};

// Fetched the piece from sanity.
export const getStaticProps = async (context: any) => {
  // Its important to default the slug so that it doesn't return undefined
  const { slug = '' }: { slug: string } = context.params;

  const piece = await client.fetch(query, { slug });

  // Query 2 random pieces to show as related projects if there aren't any related projects
  if (!piece?.relatedProjects) {
    piece.relatedProjects = await client.fetch(
      groq`*[_type == "portfolio" && slug.current != "${slug}"][0..1]{bannerImage,productImage, projectName, projectSubtitle, slug}`
    );
  }
  return { props: { piece } };
};

export default PortfolioPiece;
