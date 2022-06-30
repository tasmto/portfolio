import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import React from 'react';
import {
  CodeEmbedType,
  PortfolioPieceType,
  TextImageType,
} from '../../pages/portfolio/types';
import GetResourceUrl from '../sanityio/GetResourceURL';
import CodeTextEmbedBlock from './custom-blocks/CodeTextEmbedBlock';
import NormalTextBlock from './custom-blocks/NormalTextBlock';
import TextImageBlock from './custom-blocks/TextImageBlock';

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
            .width(1080)
            .fit('max')
            .auto('format')
            .url()}
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
  },
};
type Props = {
  content: PortfolioPieceType['body'];
};

const PortableTextParser = ({ content }: Props) => (
  <PortableText value={content} components={ptComponents} />
);

export default PortableTextParser;
