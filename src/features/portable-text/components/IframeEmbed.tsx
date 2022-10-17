import React from 'react'
import Button from '@/components/button/Button'
import Typography from '@/components/typography/Typography'
import { IframeEmbedType } from '../../portfolio/types'
import PortableTextParser from '../PortableTextParser'

type Props = {
  content: IframeEmbedType
}

const IframeEmbed = ({ content }: Props) => {
  if (!content.iframeLink) return null
  return (
    <section className='grid gap-6 md:gap-7 container-1 w-full'>
      {content?.heading && (
        <Typography as='h2' size='h2' bold>
          {content?.heading}
        </Typography>
      )}
      <div className='overflow-hidden relative max-h-94 pt-[56.25%] rounded-lg border-slate-200 border'>
        <iframe
          src={content?.iframeLink}
          className='border-0 w-full h-full top-0 absolute'
        ></iframe>
      </div>
      <div className='flex gap-4'>
        {content?.link && (
          <Button
            href={content?.link}
            externalLink
            size='large'
            type='tertiary'
          >
            {content?.linkText || 'Learn More'}
          </Button>
        )}
        {content?.description && (
          <Typography as='p' size='body2'>
            <PortableTextParser content={content?.description} />
          </Typography>
        )}
      </div>
    </section>
  )
}

export default IframeEmbed
