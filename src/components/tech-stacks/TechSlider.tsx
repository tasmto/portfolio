import React from 'react'

import { PortfolioPieceType } from '@/features/portfolio/types'
import { urlFor } from '@/lib/sanity'

import styles from '../../styles/ScrollBar.module.css'

type Props = {
  technologies: PortfolioPieceType['technologies']
}

const TechSlider = ({ technologies }: Props) => {
  if (!technologies) return null

  return (
    <div
      // draggable={true}
      // hideScrollbars={false}
      className={`${styles.horizontalScroll} max-w-lg md:max-w-[100%] flex py-2 px-2 scroll-container  overflow-x-auto`}
    >
      <ul className='transition-transform duration-500 flex gap-8 text-gray-400 flex-nowrap w-full  snap-x'>
        {technologies.map((tech, i) => (
          <li
            key={i}
            className='flex-shrink-0 flex gap-2 snap-center items-center hover:text-gray-300 group'
          >
            <img
              src={urlFor(tech.icon.asset)
                .width(20)
                .height(20)
                .fit('max')
                .auto('format')
                .url()}
              alt=''
              loading='lazy'
              className='opacity-40 group-hover:opacity-60 grayscale brightness-[400]'
              width={20}
              height={20}
            />
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TechSlider
