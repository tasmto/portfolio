import client from '../../client';
import groq from 'groq';
import PortFolioPieceCover from '../../components/portfolio/Cover';
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
import { BlogPostType } from '../../components/blog/types';

// Guide: https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js#3085b10bbadd

type Props = {
  piece: BlogPostType;
};

const PortfolioPiece = ({ piece }: Props) => {
  if (!piece) return null;
  return (
    <>
      <PageMeta title={piece?.title || 'Post'} />
      <PageScrollLine />
      <div className='bg-slate-50/20 text-gray-800 snap-proximity snap-y  grid gap-16 md:gap-24 '>
        <div className='grid gap-16 mt-8 lg:gap-24 snap-start'>
          {/* <PortFolioPieceCover portfolio={piece} /> */}

          {piece?.body && (
            <PortableTextParser
              content={piece?.body}
              className={'grid gap-14 md:gap-22 lg:gap-24 '}
            />
          )}
        </div>
      </div>
    </>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]`;

// This validates whether the slug is correct, exists and makes it available for getStaticProps.
export const getStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
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
  // if (!piece?.relatedProjects) {
  //   piece.relatedProjects = await client.fetch(
  //     groq`*[_type == "portfolio" && slug.current != "${slug}"][0..1]{bannerImage,productImage, projectName, projectSubtitle, slug}`
  //   );
  // }
  return { props: { piece } };
};

export default PortfolioPiece;
