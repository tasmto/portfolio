import client from '../../client';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';
import { SanityReference } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';
import Typography from '../../components/typography/Typography';
import CodeTextEmbedBlock from '../../components/portableTextBlocks/CodeTextEmbedBlock';
import GetResourceUrl from '../../components/sanityio/GetResourceURL';
import TextImageBlock from '../../components/portableTextBlocks/TextImageBlock';
import PortFolioPieceCover from '../../components/portfolio/PortFolioPieceCover';
import PageScrollLine from '../../components/pagescroll-tracker/PageScrollLine';

// Guide: https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js#3085b10bbadd

type textImage = {
  value: {
    _key: string;
    _type: string;
    description: string;
    heading: string;
    image: any;
    textLast: boolean;
  };
};

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <Image
          alt={value.alt || ''}
          loading='lazy'
          src={GetResourceUrl(value)
            .width(320)
            .height(240)
            .fit('max')
            .auto('format')
            .url()}
          height={240}
          width={320}
        />
      );
    },
    textImage: ({ value }: textImage) => <TextImageBlock content={value} />,
    codeEmbed: ({ value }: any) => <CodeTextEmbedBlock content={value} />,
    block: ({ value }: any) => {
      return (
        <section className='max-w-sm'>
          <PortableText value={value} />
        </section>
      );
    },
  },
};

type Props = {
  piece: any;
};

const PortfolioPiece = ({ piece }: Props) => {
  console.log(piece);
  return (
    <div className='bg-slate-50/50 text-primary-900'>
      <PageScrollLine />
      <PortFolioPieceCover
        coverVideo={piece.walkthrough}
        title={piece.title}
        subtitle={piece.subtitle}
        coverImage={piece.coverImage}
      />
      <div className='container-1 grid gap-14 md:gap-24 mt-10'>
        <PortableText value={piece.body} components={ptComponents} />
      </div>
    </div>
  );
};

const query = groq`*[_type == "portfolio" && slug.current == $slug][0]{
    projectSubtitle,
    projectName,
    liveUrl,repoUrl,
    "isFeatured": featured,
    "stack":technologies[]->name,
   coverImage,
    body,
    startedAt,completeAt,walkthrough,
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
