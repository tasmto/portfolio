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

type Props = {};

const TechSlider = (props: Props) => {
  type TechType = {
    name: string;
    icon: any;
  };
  const technologies: Array<TechType> = [
    {
      name: 'React',
      icon: DiReact,
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
    },
    {
      name: 'Node.js',
      icon: DiNodejsSmall,
    },
    {
      name: 'Express.js',
      icon: SiExpress,
    },
    {
      name: 'MongoDB',
      icon: DiMongodb,
    },
    {
      name: 'Next.js',
      icon: SiNextdotjs,
    },
    {
      name: 'Firebase',
      icon: SiFirebase,
    },
    {
      name: 'Redux',
      icon: SiRedux,
    },
    {
      name: 'MUI (Material UI)',
      icon: SiMaterialui,
    },
    {
      name: 'Bootstrap',
      icon: DiBootstrap,
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
    },
    {
      name: 'HTML',
      icon: DiHtml5,
    },
    {
      name: 'CSS',
      icon: DiCss3Full,
    },
  ];
  return (
    <ScrollContainer
      hideScrollbars={false}
      className={`${styles.horizontalScroll} max-w-lg md:max-w-[100%] flex py-2 px-2 scroll-container cursor-grab active:cursor-grabbing focus:cursor-grabbing`}
    >
      <ul className='transition-transform duration-500 flex gap-8 text-gray-400 flex-nowrap w-full  snap-x'>
        {technologies.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <li
              key={i}
              className='flex-shrink-0 flex gap-2 snap-center hover:text-gray-300/80'
            >
              <Icon className='w-6 h-6' />
              <span>{tech.name}</span>
            </li>
          );
        })}
      </ul>
    </ScrollContainer>
  );
};

export default TechSlider;
