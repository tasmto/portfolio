import React from 'react';
import {
  SiTypescript,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiFirebase,
  SiMongodb,
  SiNodedotjs,
  SiCss3,
  SiExpress,
} from 'react-icons/si';

const SkillsIcons = ({ layout = '' }) => {
  return (
    <ul
      className={`flex flex-wrap gap-4 sm:gap-6 col-span-10 items-center sm:col-span-8 ${layout}`}
    >
      <li className='flex gap-2 items-center hover:text-cyan-500 cursor-none'>
        <SiReact className='h-[25px] w-[25px]' />
        <span className='text-lg'>React.js</span>
      </li>
      <li className='flex gap-2 items-center hover:text-cyan-500 cursor-none'>
        <SiJavascript className='h-[25px] w-[25px]' />
        <span className='text-lg'>JavaScript</span>
      </li>
      <li className='flex gap-2 items-center hover:text-cyan-500 cursor-none'>
        <SiTypescript className='h-[25px] w-[25px]' />
        <span className='text-lg'>TypeScript</span>
      </li>
      <li className='flex gap-2 items-center hover:text-cyan-500 cursor-none'>
        <SiNodedotjs className='h-[25px] w-[25px]' />
        <span className='text-lg'>Node</span>
      </li>
      <li className='flex gap-2 items-center hover:text-cyan-500 cursor-none'>
        <SiMongodb className='h-[25px] w-[25px]' />
        <span className='text-lg'>MongoDB</span>
      </li>
      <li className='flex gap-2 items-center hover:text-cyan-500 cursor-none'>
        <SiExpress className='h-[25px] w-[25px]' />
        <span className='text-lg'>Express js</span>
      </li>
      <li className='flex gap-2 items-center hover:text-cyan-500 cursor-none'>
        <SiHtml5 className='h-[25px] w-[25px]' />
        <span className='text-lg'>Html5</span>
      </li>
      <li className='flex gap-2 items-center hover:text-cyan-500 cursor-none'>
        <SiCss3 className='h-[25px] w-[25px]' />
        <span className='text-lg'>CSS</span>
      </li>
      <li className='flex gap-2 items-center hover:text-cyan-500 cursor-none'>
        <SiFirebase className='h-[25px] w-[25px]' />
        <span className='text-lg'>Firebase</span>
      </li>
    </ul>
  );
};

export default SkillsIcons;
