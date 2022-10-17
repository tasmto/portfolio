import React from 'react'
import Typography from '@/components/typography/Typography'

export type CustomListType = {
  description?: string
  heading?: string
  listItems: string[]
  numbered: boolean
}

type Props = {
  content: CustomListType
}

const CustomListBlock = ({ content }: Props) => {
  return (
    <section className='w-full grid gap-6 container-2'>
      {content.heading && (
        <Typography as='h2' size='h3'>
          {content.heading}
        </Typography>
      )}
      {content.description && (
        <Typography as='p' size='body1'>
          {content.description}
        </Typography>
      )}
      <ol className={`pl-4 mt-[-15px] ${content.numbered && 'list-decimal'}`}>
        {content?.listItems.map((item, i) => (
          <Typography
            key={i}
            as='li'
            size='body2'
            className={
              !content.numbered
                ? 'relative before:block before:absolute  before:left-[-24px] before:content-[">"] before:text-gray-400 before:font-bold before:text-xs before:top-[5px]'
                : ''
            }
          >
            {item}
          </Typography>
        ))}
      </ol>
    </section>
  )
}

export default CustomListBlock
