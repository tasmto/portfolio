import { SanityReference } from '@sanity/image-url/lib/types/types'
import Image from 'next/image'
import React from 'react'
import Typography from '../../../components/typography/Typography'
import { urlFor } from '@/lib/sanity'

type Props = {
  content: {
    description?: string
    heading?: string
    image: { asset: { _ref: SanityReference; _type: string } }
    link?: string
    linkText?: string
    textLast?: boolean
  }
}

const TextImageBlock = ({ content }: Props) => {
  const { description, heading, image, link, linkText, textLast } = content
  if (!image?.asset?._ref) return null
  return (
    <section className='grid grid-cols-1 md:grid-cols-5 items-center gap-5 md:gap-10 relative  w-full max-w-[120rem] m-auto sm:px-4 px-2 md:px-0'>
      <div className='col-span-3 border border-gray-200 rounded-3xl w-full'>
        <Image
          src={urlFor(image?.asset?._ref)
            .width(1280)
            .height(720)
            .fit('max')
            .auto('format')
            .url()}
          alt=''
          loading='lazy'
          width={1280}
          height={720}
          className='object-cover !h-full'
        />
      </div>
      <div
        className={`col-span-2 grid gap-4 md:gap-8 md:max-w-sm md:self-center order-first ${
          textLast
            ? 'md:order-last md:justify-self-start  md:pr-8'
            : 'md:order-first md:justify-self-end md:pl-8 '
        }`}
      >
        {heading && (
          <Typography as='h2' size='h1'>
            {heading}
          </Typography>
        )}
        {description && (
          <Typography as='p' size='body2'>
            {description}
          </Typography>
        )}
      </div>
    </section>
  )
}

export default TextImageBlock
