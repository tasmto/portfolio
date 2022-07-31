import client from '../../client';
import groq from 'groq';
import PageScrollLine from '../../features/pages/components/ScrollProgress';
import PageMeta from '../../components/seo/Seo';
import PortableTextParser from '../../features/portable-text/PortableTextParser';
import { BlogPostType } from '../../features/blog/types';
import Layout from '../../components/Layout';

// Guide: https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js#3085b10bbadd

type Props = {
  piece: BlogPostType;
};

const PortfolioPiece = ({ piece }: Props) => {
  if (!piece) return null;
  return (
    <Layout>
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
    </Layout>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{ ...,
  "categories": categories[]->name,}`;

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
  return { props: { piece } };
};

export default PortfolioPiece;
