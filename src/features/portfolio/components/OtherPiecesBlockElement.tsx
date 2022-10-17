import Image from 'next/image'
import React, { Ref, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { PortfolioPieceType } from '../types'
import Link from 'next/link'
import Typography from '@/components/typography/Typography'
import { urlFor } from '@/lib/sanity'
import subDivideArray from '../../../utilities/subDivideArray'

type Props = {
  pieces: Array<PortfolioPieceType>
}

const getRelativeCoordinates = (
  event: React.MouseEvent<HTMLElement, MouseEvent>,
  referenceElement: any
): number => {
  const position = event.pageX
  const { right } = referenceElement.getBoundingClientRect() // getBoundingClientRect() returns the position of the element relative to the viewport

  // Don't ask me why I have to subtract the right position from the position of the element.
  // It works, but I don't know why.
  return Math.round(((position - right / 2) / 8) * -1)
}

const OtherPiecesBlockElement = ({ pieces }: Props) => {
  const [mousePosition, setMousePosition] = useState(0)
  const containerRef = useRef()

  type PortfolioRowContent = {
    image: string
    title?: string
    width: '1/1' | '1/2' | '1/3' | '2/3' | '1/4' | '3/4' | '1/5' | '2/5' | '3/5'
  }

  const portfolioRows: PortfolioPieceType[][] = subDivideArray(pieces, 3)

  const calculateStaticWidth = (width: number): number =>
    width === 2
      ? 900
      : width === 3
      ? 600
      : width === 4
      ? 450
      : width === 5
      ? 360
      : 1800

  const calculateStaticHeight = (width: number): number =>
    width === 3 ? 350 : width === 2 ? 490 : 600

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition(getRelativeCoordinates(e, containerRef.current))
  }

  return (
    <div
      // @ts-ignore: cant have refs in functional components
      ref={containerRef}
      className='relative'
      onMouseMove={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        handleMouseMove(e)
      }
      style={{
        perspective: 400,
      }}
    >
      <motion.div
        className='w-[110vw] relative grid auto-rows-min gap-4 overflow-x-auto origin-center right-[6vw]'
        style={{ transform: `translateX(${mousePosition}%)` }}
        animate={{ x: mousePosition }}
        transition={{ ease: 'linear' }}
      >
        {portfolioRows.map((row, i, arr) => {
          return (
            <div
              className={`grid ${
                row.length === 1
                  ? 'grid-cols-1'
                  : row.length === 2
                  ? 'grid-cols-2'
                  : row.length === 3
                  ? 'grid-cols-3'
                  : 'grid-cols-4'
              } auto-rows-fr gap-4 w-full h-full`}
              key={i}
            >
              {row.map((content, j) => {
                return (
                  <Link key={j} href={`/portfolio/${content.slug.current}`}>
                    <a
                      className={`col-span-1 relative overflow-hidden cursor-eye group`}
                    >
                      <article className='w-full h-full absolute top-0 grid content-center bg-primary-900/70 z-10 text-center  backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:duration-1000'>
                        <Typography
                          as='h4'
                          size='h3'
                          className='text-primary-100'
                        >
                          View Project
                        </Typography>
                      </article>
                      <Image
                        src={urlFor(
                          content?.coverImage?.asset
                            ? content?.coverImage?.asset
                            : content?.coverImage?.asset
                        )
                          .height(calculateStaticHeight(row.length))
                          .width(calculateStaticWidth(row.length))
                          .fit('min')
                          .auto('format')
                          .url()}
                        width={calculateStaticWidth(row.length)}
                        height={calculateStaticHeight(row.length)}
                        layout='responsive'
                        className='h-full w-full object-contain object-center'
                        alt=''
                      />
                    </a>
                  </Link>
                )
              })}
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default OtherPiecesBlockElement
