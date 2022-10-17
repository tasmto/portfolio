import React from 'react'

import Button from '@/components/button/Button'
import Typography from '@/components/typography/Typography'

import PortableTextParser from '../PortableTextParser'

export type PlainTextType = {
  description?: any
  heading?: string
  subheading?: string
  link?: string
  linkText?: string
}

type Props = {
  content: PlainTextType
}

const NormalTextBlock = ({ content }: Props) => {
  console.log(content)
  return (
    <section className='w-full grid gap-4 container-1'>
      {content?.heading && (
        <Typography as='h2' size='h1'>
          {content.heading}
        </Typography>
      )}
      {content?.subheading && (
        <Typography as='h3' size='h3'>
          {content.subheading}
        </Typography>
      )}
      {content?.description && (
        <Typography as='div' size='body1'>
          <PortableTextParser content={content.description} />
        </Typography>
      )}
      {content?.link && (
        <Button href={content.link} externalLink size='large' type='tertiary'>
          {content.linkText || 'Learn More'}
        </Button>
      )}
    </section>
  )
}

export default NormalTextBlock
