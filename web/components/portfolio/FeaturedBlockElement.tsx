import Image from 'next/image';
import { useState } from 'react';
import Divider from '../divider/Divider';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { BiLinkExternal } from 'react-icons/bi';
import { TbRainbow } from 'react-icons/tb';
import Button from '../button/Button';
import Link from 'next/link';
import Typography from '../typography/Typography';

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
      <Link href={caseStudy || ''}>
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
      </Link>
      <div
        className={`col-span-1 lg:col-span-2 grid gap-3 lg:gap-7  content-start ${
          textFirst && 'md:order-first'
        }`}
      >
        <Typography as='h2' size='display2' className='relative'>
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
        </Typography>
        {description && (
          <div>
            <Typography
              as='button'
              role='title'
              size='h3'
              onClick={() =>
                activeTab === 'description'
                  ? setActiveTab('')
                  : setActiveTab('description')
              }
              className='w-full flex gap-4 items-center cursor-pointer py-2'
            >
              <span className='shrink-0'>Description</span>
              <Divider />
              <IoArrowForwardOutline
                aria-hidden={true}
                className={`h-8 w-8 transition-transform duration-500 delay-200  ${
                  activeTab === 'description' && 'rotate-[-270deg] delay-[0s]'
                }`}
              />
            </Typography>
            <Typography
              as='p'
              size='caption'
              className={` text-primary-200 md:text-primary-100 origin-top
             transition-all duration-300 ease-in-out  
            ${
              activeTab === 'description'
                ? 'scale-y-1 opacity-100 max-h-full'
                : 'scale-y-0 opacity-0 max-h-0'
            }`}
            >
              {description}
            </Typography>
          </div>
        )}
        {stack?.length && (
          <div className=''>
            <Typography
              as='button'
              role='title'
              size='h3'
              className='w-full  flex gap-4 py-2 items-center cursor-pointer'
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
            </Typography>
            <Typography
              as='p'
              size='caption'
              className={` text-primary-200 md:text-primary-100 origin-top
             transition-all duration-300 ease-in-out 
            ${
              activeTab === 'stack'
                ? 'scale-y-1 opacity-100 max-h-full'
                : 'scale-y-0 opacity-0 max-h-0'
            }`}
            >
              {stack.toString().replaceAll(',', ', ')}.
            </Typography>
          </div>
        )}
        {(liveLink || caseStudy) && (
          <div className='grid gap-1'>
            {liveLink && (
              <Button
                type='text-light'
                icon={BiLinkExternal}
                iconPosition='right'
                href={liveLink}
                externalLink
              >
                View Live Project
              </Button>
            )}
            <Divider />
            {caseStudy && (
              <Button
                type='text-light'
                icon={TbRainbow}
                iconPosition='right'
                href={caseStudy}
                className='text-primary-100'
              >
                Case Study
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default FeaturedBlockElement;
