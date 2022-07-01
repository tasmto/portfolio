import PortableText from 'react-portable-text';
import Image from 'next/image';
import React from 'react';
import {
  CodeEmbedType,
  PortfolioPieceType,
  TextImageType,
} from '../../pages/portfolio/types';
import GetResourceUrl from '../sanityio/GetResourceURL';
import Typography from '../typography/Typography';
import CodeTextEmbedBlock from './custom-blocks/CodeTextEmbedBlock';
import NormalTextBlock from './custom-blocks/NormalTextBlock';
import TextImageBlock from './custom-blocks/TextImageBlock';

const ptComponents = {
  image: ({ value }: any) => {
    if (!value?.asset?._ref) {
      return null;
    }
    return (
      <Image
        alt={value.alt || ''}
        loading='lazy'
        src={GetResourceUrl(value).width(1080).fit('max').auto('format').url()}
        height={240}
        width={320}
      />
    );
  },
  textImage: ({ value }: { value: TextImageType }) => (
    <TextImageBlock content={value} />
  ),
  codeEmbed: ({ value }: { value: CodeEmbedType }) => (
    <CodeTextEmbedBlock content={value} />
  ),
  normalText: ({ value }: any) => <NormalTextBlock content={value} />,

  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }: any) => (
      <Typography size='h1' as='h1'>
        {children}
      </Typography>
    ),
    h2: ({ children }: any) => (
      <Typography size='h2' as='h2'>
        {children}
      </Typography>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }: any) => (
      <h2 className='text-lg text-primary text-purple-700'>{children}</h2>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <ul className='mt-2 list-disc'>{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className='mt-2 list-disc'>{children}</ol>
    ),

    // Ex. 2: rendering custom lists
    checkmarks: ({ children }: any) => (
      <ol className='m-auto text-lg'>{children}</ol>
    ),
  },

  marks: {
    em: ({ children }: any) => (
      <em className='text-gray-600 font-semibold'>{children}</em>
    ),
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
};

type Props = {
  content: PortfolioPieceType['body'] | any;
  className?: string;
};

const PortableTextParser = ({ content, className }: Props) => (
  <PortableText
    className={className}
    content={content}
    serializers={{
      h1: (props: any) => (
        <Typography size='h1' as='h1' className='mb-5' {...props} />
      ),
      h2: (props: any) => (
        <Typography size='h2' as='h2' className='mb-4' {...props} />
      ),
      h3: (props: any) => (
        <Typography size='h3' as='h3' className='mb-2' {...props} />
      ),
      li: ({ children }: any) => (
        <li className='ml-6 relative before:block before:absolute  before:left-[-24px] before:content-[">"] before:text-gray-400 before:font-bold before:text-sm'>
          {children}
        </li>
      ),
      ul: ({ children }: any) => <ul className=''>{children}</ul>,
      textImage: (value: TextImageType) => <TextImageBlock content={value} />,
      codeEmbed: (value: CodeEmbedType) => (
        <CodeTextEmbedBlock content={value} />
      ),
    }}
  />
);

export default PortableTextParser;
