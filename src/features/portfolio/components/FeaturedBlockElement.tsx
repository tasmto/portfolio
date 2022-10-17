import {
  IoArrowForwardOutline,
  IoBookmarks,
  IoTodayOutline,
} from 'react-icons/io5'
import Link from 'next/link'

import Button from '@/components/button/Button'
import Tag from '@/components/tags/Tag'
import Typography from '@/components/typography/Typography'
import { urlFor } from '@/lib/sanity'

import trimString from '../../../utilities/trimString'
import generatePlainText from '../../portable-text/lib/generatePlainText'
import { PortfolioPieceType } from '../types'
// import {urlFor} from '@/lib/sanity'
type Props = {
  piece: PortfolioPieceType
  textFirst?: boolean
  className?: string
}
const FeaturedBlockElement = ({
  piece,
  textFirst = false,
  className = '',
}: Props) => {
  return (
    <Link href={`/portfolio/${piece?.slug?.current}`}>
      <a
        className={`px-6 relative min-h-[250px] h-full py-16 md:py-24  overflow-hidden grid sm:grid-cols-2 lg:grid-cols-5 gap-6 bg-cover bg-top bg-no-repeat rounded-xl md:rounded-2xl before:block before:absolute before:top-0 before:w-full before:h-full before:bg-slate-900/80 hover:before:backdrop-blur-sm  before:hover:bg-primary-900/80 before:transition-colors before:duration-300 cursor-eye ${className}`}
        style={{
          backgroundImage: `url(${
            urlFor(piece?.coverImage?.asset)
              ?.width(1080)
              ?.height(500)
              ?.blur(10)
              ?.fit('max')
              ?.auto('format')
              ?.url() ?? ''
          })`,
        }}
      >
        <div className='grid gap-6 lg:col-span-3'>
          <div className='z-10 grid gap-2 max-w-2xl'>
            <div className='flex gap-4'>
              <Tag color={piece?.completedAt ? 'secondary' : 'tertiary'}>
                <>
                  <IoTodayOutline className='h-5 w-5' />
                  <span>
                    {piece?.completedAt
                      ? new Date(piece?.completedAt).toLocaleDateString(
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
              <Tag color={'primary'}>
                <>
                  <IoBookmarks className='h-5 w-5' />
                  <span>Featured</span>
                </>
              </Tag>
            </div>
            <Typography
              size='display2'
              as='h1'
              className='text-white tracking-tight drop-shadow-md max-w-2xl'
            >
              <strong>{piece.projectName}</strong> — {piece.projectSubtitle}
            </Typography>
          </div>
          <div className='z-10 self-end justify-self-start mt-[-15px] sm:mt-6'>
            {piece?.slug && (
              <Button
                aria-hidden='true'
                type='text-light'
                size='large'
                className='pl-0 drop-shadow-md !text-slate-100 hover:!text-slate-200 transition-colors'
                // href={`/piece/${piece?.slug.current}`}
                icon={IoArrowForwardOutline}
              >
                Project case-study
              </Button>
            )}
          </div>
        </div>
        <div className='grid gap-4 lg:col-span-2 self-center'>
          <Typography
            as='p'
            size='body1'
            className='sticky text-slate-100 drop-shadow'
          >
            {piece?.extract &&
              trimString(generatePlainText(piece.extract), 200)}
          </Typography>
          <Typography
            as='p'
            size='body3'
            className='sticky text-slate-300 drop-shadow'
          >
            Built with:{' '}
            {piece?.technologies.map((item) => item.name).join(' | ')}.
          </Typography>
        </div>
      </a>
    </Link>
  )
}

export default FeaturedBlockElement
