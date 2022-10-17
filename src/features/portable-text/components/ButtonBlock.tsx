import React from 'react'
import Button from '@/components/button/Button'
import Typography from '@/components/typography/Typography'
import { IoArrowForward } from 'react-icons/io5'
import { ButtonType } from '../../portfolio/types'

type Props = {
  content: ButtonType
}

const ButtonBlock = ({ content }: Props) => {
  if (!content.link) return null

  return (
    <section className='p-8 md:px-14 md:py-10 bg-primary-50/50 rounded-2xl flex flex-col md:flex-row justify-between gap-6 w-full container-2'>
      <div className='grid gap-3'>
        {content?.subheading && (
          <Typography as='h3' size='body2' bold className='opacity-80'>
            {content.subheading}
          </Typography>
        )}
        {content?.heading && (
          <Typography as='h1' size='h2'>
            {content.heading}
          </Typography>
        )}
      </div>
      <Button
        icon={IoArrowForward}
        type='text'
        className='!items-center shrink-0'
        href={content?.link}
        externalLink={content?.externalLink || false}
      >
        {content?.linkText || 'Learn More'}
      </Button>
    </section>
  )
}

export default ButtonBlock
