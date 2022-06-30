import client from '../../client';
import groq from 'groq';
import PortFolioPieceCover from '../../components/portfolio/PortFolioPieceCover';
import PageScrollLine from '../../components/pagescroll-tracker/PageScrollLine';
import { PortfolioPieceType } from './types';
import PortableTextParser from '../../components/portableTextBlocks/PortableTextParser';

// Guide: https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js#3085b10bbadd

type Props = {
  piece: PortfolioPieceType;
};

const PortfolioPiece = ({ piece }: Props) => {
  console.log(piece);
  return (
    <div className='bg-slate-50/20 text-primary-700'>
      <PageScrollLine />

      <div className='container-2 grid gap-14 md:gap-22 lg:gap-28 mt-8 md:mt-32'>
        <PortFolioPieceCover portfolio={piece} />
        <PortableTextParser content={piece.body} />
      </div>
    </div>
  );
};

const query = groq`*[_type == "portfolio" && slug.current == $slug][0]`;

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
  return { props: { piece } };
};

export default PortfolioPiece;
