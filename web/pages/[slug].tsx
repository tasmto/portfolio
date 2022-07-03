import client from '../client';
import groq from 'groq';
import PortableTextParser from '../components/portableTextBlocks/PortableTextParser';
import PageMeta from '../components/seo/PageMeta';
import { pageType } from '../components/static-pages/types';
import Divider from '../components/divider/Divider';
import FooterSecondaryContactCard from '../components/navigation/FooterSecondaryContactCard';

// Guide: https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js#3085b10bbadd

type Props = {
  data: pageType;
};

const PortfolioPiece = ({ data }: Props) => {
  return (
    <div className='mt-32 grid gap-16 md:gap-24 container-1 text-gray-900'>
      {/* <PageMeta title={data?.projectName || 'Portfolio'} /> */}
      {data?.body && (
        <PortableTextParser
          content={data?.body}
          className={'grid gap-14 md:gap-22 lg:gap-24 w-full'}
        />
      )}
      <Divider type='dotted' prominent />
      <FooterSecondaryContactCard />
    </div>
  );
};

const query = groq`*[_type == "page" && slug.current == $slug][0]`;

// This validates whether the slug is correct, exists and makes it available for getStaticProps.
export const getStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "page" && defined(slug.current)][].slug.current`
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

  const data = await client.fetch(query, { slug });
  return { props: { data } };
};

export default PortfolioPiece;
