import client from '../../client';
import groq from 'groq';
import PortFolioPieceCover from '../../components/portfolio/PortFolioPieceCover';
import PageScrollLine from '../../components/pagescroll-tracker/PageScrollLine';
import { PortfolioPieceType } from './types';
import PortableTextParser from '../../components/portableTextBlocks/PortableTextParser';
import Typography from '../../components/typography/Typography';
import Divider from '../../components/divider/Divider';
import TechStacksCards from '../../components/tech-stacks/TechStacksCards';

// Guide: https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js#3085b10bbadd

type Props = {
  piece: PortfolioPieceType;
};

const PortfolioPiece = ({ piece }: Props) => {
  console.log(piece);
  return (
    <div className='bg-slate-50/20 text-gray-800'>
      <PageScrollLine />

      <div className='container-2 grid gap-16 mt-8 md:mt-24'>
        <PortFolioPieceCover portfolio={piece} />

        <div className='grid gap-10 container-3'>
          {piece?.brief && (
            <article className='grid gap-4'>
              <Typography
                size='body2'
                as='h3'
                className='text-primary-600 mb-[-10px]'
              >
                THE CHALLENGE
              </Typography>
              <Typography size='body2' as='div'>
                <PortableTextParser content={piece.brief} />
              </Typography>
            </article>
          )}
          <Divider type='dotted' prominent />
          {piece?.extract && (
            <article className='grid gap-3 '>
              <Typography
                size='h3'
                as='h3'
                className='text-gray-400 mb-[-10px]'
              >
                THE SOLUTION
              </Typography>
              <Typography size='body2' as='div'>
                {<PortableTextParser content={piece.extract} />}
              </Typography>
            </article>
          )}
          <Divider type='dotted' prominent />

          <TechStacksCards technologies={piece.technologies} />
        </div>

        <PortableTextParser
          content={piece.body}
          className={'grid gap-14 md:gap-22 lg:gap-28 container-3'}
        />
      </div>
    </div>
  );
};

const query = groq`*[_type == "portfolio" && slug.current == $slug][0]{
  ...,
 "technologies": technologies[]->{name, icon, description,featured},
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
  return { props: { piece } };
};

export default PortfolioPiece;
