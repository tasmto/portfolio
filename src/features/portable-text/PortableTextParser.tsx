import React from 'react'
import PortableText from 'react-portable-text'

import Typography from '@/components/typography/Typography'

import {
  ButtonType,
  CodeEmbedType,
  IframeEmbedType,
  PortfolioPieceType,
  TextImageType,
} from '../portfolio/types'

import ButtonBlock from './components/ButtonBlock'
import CodeTextEmbedBlock from './components/CodeTextEmbedBlock'
import CustomListBlock, { CustomListType } from './components/CustomList.tsx'
import IframeEmbed from './components/IframeEmbed'
import NormalTextBlock, { PlainTextType } from './components/NormalTextBlock'
import TextImageBlock from './components/TextImageBlock'

interface Props {
  content: PortfolioPieceType['body'] | any
  className?: string
}

const PortableTextParser = ({ content, className }: Props) => {
  if (!content) return null
  return (
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
        normal: (props: any) => (
          <Typography size='body1' as='p' className='mb-8' {...props} />
        ),
        li: ({ children }: any) => (
          <li className='ml-8 relative before:block before:absolute  before:left-[-24px] before:content-[">"] before:text-gray-400 before:font-bold before:text-xs before:top-[5px]'>
            {children}
          </li>
        ),
        ul: ({ children }: any) => <ul className=''>{children}</ul>,
        textImage: (value: TextImageType) => <TextImageBlock content={value} />,
        customList: (value: CustomListType) => (
          <CustomListBlock content={value} />
        ),
        plainText: (value: PlainTextType) => (
          <NormalTextBlock content={value} />
        ),
        codeEmbed: (value: CodeEmbedType) => (
          <CodeTextEmbedBlock content={value} />
        ),
        iframeEmbed: (value: IframeEmbedType) => (
          <IframeEmbed content={value} />
        ),
        button: (value: ButtonType) => <ButtonBlock content={value} />,
        link: ({ children, href }: any) => (
          <a href={href} target='_blank' rel='noreferrer' className='link'>
            {children}
          </a>
        ),
      }}
    />
  )
}

export default PortableTextParser
