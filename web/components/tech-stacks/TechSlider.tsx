import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import styles from '../../styles/ScrollBar.module.css';
import {
  DiBootstrap,
  DiCss3Full,
  DiHtml5,
  DiMongodb,
  DiNodejsSmall,
  DiReact,
} from 'react-icons/di';
import {
  SiExpress,
  SiFirebase,
  SiMaterialui,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { PortfolioPieceType } from '../../pages/portfolio/types';
import GetResourceUrl from '../sanityio/GetResourceURL';

type Props = {
  technologies: PortfolioPieceType['technologies'];
};

const TechSlider = ({ technologies }: Props) => {
  if (!technologies) return null;

  return (
    <ScrollContainer
      hideScrollbars={false}
      className={`${styles.horizontalScroll} max-w-lg md:max-w-[100%] flex py-2 px-2 scroll-container cursor-grab active:cursor-grabbing focus:cursor-grabbing`}
    >
      <ul className='transition-transform duration-500 flex gap-8 text-gray-400 flex-nowrap w-full  snap-x'>
        {technologies.map((tech, i) => (
          <li
            key={i}
            className='flex-shrink-0 flex gap-2 snap-center items-center hover:text-gray-300/80'
          >
            <img
              src={GetResourceUrl(tech.icon.asset)
                .width(20)
                .height(20)
                .fit('max')
                .auto('format')
                .url()}
              alt=''
              loading='lazy'
              className='opacity-40 grayscale brightness-[400]'
              width={20}
              height={20}
            />
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>
    </ScrollContainer>
  );
};

export default TechSlider;
