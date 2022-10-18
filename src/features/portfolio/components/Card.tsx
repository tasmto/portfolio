import React from 'react'
import { IoTodayOutline } from 'react-icons/io5'
import Image from 'next/image'
import Link from 'next/link'

import Tag from '@/components/tags/Tag'
import Typography from '@/components/typography/Typography'
import { urlFor } from '@/lib/sanity'

import { PortfolioPieceType } from '../types'

type Props = {
  portfolio: PortfolioPieceType
  className?: string
}

const PortfolioCard = ({ portfolio, className = '' }: Props) => {
  return (
    <article className='group'>
      <Link href={`/portfolio/${portfolio?.slug?.current}`}>
        <a className='relative grid gap-3 self-stretch group after:absolute after:w-full after:h-[50%] after:bottom-0 after:left-0 overflow-hidden after:rounded-xl rounded-xl after:bg-gradient-to-t after:from-primary-900/95 after:via-primary-900/30 sm:after:opacity-0 group-hover:after:opacity-100 after:to-slate-50/0 text-white  cursor-eye '>
          <span className='z-10 grid gap-2 max-w-md absolute top-6 left-10'>
            <Tag color={portfolio?.completedAt ? 'secondary' : 'tertiary'}>
              <>
                <IoTodayOutline className='h-4 w-4' />
                <span>
                  {portfolio?.completedAt
                    ? new Date(portfolio?.completedAt).toLocaleDateString(
                        'en-US',
                        {
                          month: 'long',
                          year: 'numeric',
                        }
                      )
                    : 'Ongoing'}
                </span>
              </>
            </Tag>
          </span>

          <div className='w-full  image-h-full border border-slate-200'>
            <Image
              alt=''
              src={
                urlFor(portfolio.coverImage?.asset)
                  ?.width(1000)
                  ?.height(800)
                  ?.blur(1)
                  ?.fit('max')
                  ?.auto('format')
                  ?.url() ?? ''
              }
              width={1000}
              height={800}
              className='w-full h-full rounded-xl cursor-eye group-hover:opacity-95 aspect-square'
            />
          </div>
          <div
            aria-hidden='true'
            className='absolute z-50 top-6 right-6 flex items-center gap-2 flex-wrap bg-slate-100/80 px-2 py-1 rounded-full  image-h-full shadow-sm border border-slate-300'
          >
            {portfolio?.technologies?.map((technology, i) =>
              technology?.icon?.asset ? (
                <img
                  key={i}
                  src={
                    urlFor(technology?.icon?.asset)
                      ?.width(20)
                      ?.height(20)
                      ?.fit('fillmax')
                      ?.auto('format')
                      ?.url() ?? ''
                  }
                  alt=''
                  className=' opacity-80'
                  loading='lazy'
                  width={20}
                  height={20}
                />
              ) : undefined
            )}
          </div>
          <div className='grid gap-2 z-50 w-3/4 right-1/2 translate-x-1/2 mx-3 absolute md:bottom-3 bottom-6  transition-all sm:translate-y-[50%] sm:group-hover:translate-y-0 origin-top '>
            <h1 className=' px-4 py-1 bg-slate-800/80 justify-self-start rounded-full tracking-tight max-w-2xl leading-tight font-bold  drop-shadow-md delay-[50ms] text-xl md:text-2xl'>
              {portfolio.projectName}
            </h1>

            <Typography
              size='body2'
              as='p'
              className='tracking-tight max-w-2xl leading-tight sm:opacity-0 group-hover:opacity-100 md:min-h-[45px]'
            >
              {portfolio.projectSubtitle}
            </Typography>
          </div>
        </a>
      </Link>
    </article>
  )
}

export default PortfolioCard
