import Image from 'next/image';
import { useState } from 'react';
import Divider from '../divider/Divider';
import { IoArrowForwardOutline } from 'react-icons/io5';

type Props = {
  description: string;
  image: string;
  title: string;
  logoImage?: string;
  stack?: string[];
  caseStudy?: string;
  liveLink?: string;
  githubLink?: string;
  textFirst?: boolean;
};

/**
 * @description - The primary full width block element that shows a featured project with a title, description, and a button to visit the project.
 * @param title - The title of the project
 * @param description - The description of the project
 * @param stack - The stack of technologies used in the project
 * @param image - The cover image of the project
 * @param caseStudy - The link to the case study/ the slug
 * @param liveLink - The link to the live version of the project
 * @param githubLink - The link to the github repo of the project
 * @param logoImage - The logo image of the project (shows instead of text title)
 * @returns {JSX.Element}
 */
const FeaturedBlockElement = ({
  description,
  stack,
  image,
  title,
  logoImage,
  caseStudy,
  liveLink,
  githubLink,
  textFirst,
}: Props) => {
  const [activeTab, setActiveTab] = useState('description');
  return (
    <article className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-y-3 gap-5 md:gap-7 lg:gap-10'>
      <div className='col-span-1 md:col-span-2 lg:col-span-3 cursor-eye'>
        <Image
          src={image}
          width={850}
          height={450}
          layout='responsive'
          className='object-center object-cover'
          alt=''
        />
      </div>
      <div
        className={`col-span-1 lg:col-span-2 grid gap-3 lg:gap-7  content-start ${
          textFirst && 'md:order-first'
        }`}
      >
        <h2 className='text-4xl md:text-5xl relative'>
          {logoImage && (
            <Image
              height={50}
              width={325}
              src={logoImage}
              layout='intrinsic'
              className='object-start object-contain'
              alt=''
            />
          )}
          <span className={`${logoImage && 'sr-only'}`}>{title}</span>
        </h2>
        {description && (
          <div>
            <h4
              onClick={() =>
                activeTab === 'description'
                  ? setActiveTab('')
                  : setActiveTab('description')
              }
              className='flex gap-4 text-xl items-center cursor-pointer py-2'
            >
              <span className='shrink-0'>Description</span>
              <Divider />
              <IoArrowForwardOutline
                aria-hidden={true}
                className={`h-8 w-8 transition-transform duration-500 delay-200  ${
                  activeTab === 'description' && 'rotate-[-270deg] delay-[0s]'
                }`}
              />
            </h4>
            <p
              className={`text-sm lg:text-md text-primary-300 origin-top
             transition-all duration-300 ease-in-out 
            ${
              activeTab === 'description'
                ? 'scale-y-1 opacity-100 max-h-full'
                : 'scale-y-0 opacity-0 max-h-0'
            }`}
            >
              {description}
            </p>
          </div>
        )}
        {stack?.length && (
          <div className=''>
            <h4
              className='flex gap-4 py-2 text-xl items-center cursor-pointer'
              onClick={() =>
                activeTab === 'stack' ? setActiveTab('') : setActiveTab('stack')
              }
            >
              <span className='shrink-0'>Built using:</span>
              <Divider />
              <IoArrowForwardOutline
                aria-hidden={true}
                className={`h-8 w-8 transition-transform duration-500 delay-200  ${
                  activeTab === 'stack' && 'rotate-[450deg] delay-[0s]'
                }`}
              />
            </h4>
            <p
              className={`text-sm lg:text-md text-primary-300 origin-top
             transition-all duration-300 ease-in-out 
            ${
              activeTab === 'stack'
                ? 'scale-y-1 opacity-100 max-h-full'
                : 'scale-y-0 opacity-0 max-h-0'
            }`}
            >
              {stack.toString().replaceAll(',', ', ')}.
            </p>
          </div>
        )}
      </div>
    </article>
  );
};

export default FeaturedBlockElement;
