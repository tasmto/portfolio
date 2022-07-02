import Image from 'next/image';
import { useState } from 'react';
import Divider from '../divider/Divider';
import { IoArrowForwardOutline } from 'react-icons/io5';
import { BiLinkExternal } from 'react-icons/bi';
import { TbRainbow } from 'react-icons/tb';
import Button from '../button/Button';
import Link from 'next/link';
import Typography from '../typography/Typography';
import { PortfolioPieceType } from '../../pages/portfolio/types';
import GetResourceUrl from '../sanityio/GetResourceURL';
import PortableTextParser from '../portableTextBlocks/PortableTextParser';
import { blockContentToPlainText } from 'react-portable-text';
import trimString from '../../utilities/trimString';

type Props = {
  piece: PortfolioPieceType;
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
const FeaturedBlockElement = ({ piece, textFirst = false }: Props) => {
  const [activeTab, setActiveTab] = useState('description');
  return (
    <article className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center  gap-y-3 gap-5 md:gap-7 lg:gap-10'>
      <Link href={`/portfolio/${piece.slug.current}`}>
        <div className='col-span-1 md:col-span-2 lg:col-span-3 cursor-eye'>
          <Image
            src={GetResourceUrl(
              piece?.productImage?.asset
                ? piece?.productImage?.asset
                : piece?.bannerImage?.asset
            )
              .width(850)
              .height(450)
              .fit('max')
              .auto('format')
              .url()}
            width={850}
            height={450}
            layout='responsive'
            className='object-center object-cover rounded-xl shadow-xl'
            alt=''
          />
        </div>
      </Link>
      <div
        className={`col-span-1 lg:col-span-2 grid gap-4 content-start ${
          textFirst && 'md:order-first'
        }`}
      >
        <Typography as='h2' size='display3' className='relative mb-4'>
          {piece?.logo && (
            <img
              height={30}
              width={325}
              src={GetResourceUrl(piece?.logo?.asset)
                .width(325)
                .height(30)
                .fit('min')
                .auto('format')
                .url()}
              // layout='intrinsic'
              className='object-start object-contain h-8 object-left brightness-150'
              alt=''
            />
          )}
          <span className={`${piece?.logo && 'sr-only'} text-slate-200`}>
            {piece.projectName}
          </span>
        </Typography>
        {piece.extract && (
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
              className='w-full flex gap-4 items-center cursor-pointer py-1'
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
              as='div'
              size='caption'
              className={` text-primary-200 md:text-primary-200 origin-top
             transition-all duration-300 ease-in-out  
            ${
              activeTab === 'description'
                ? 'scale-y-1 opacity-100 max-h-full'
                : 'scale-y-0 opacity-0 max-h-0'
            }`}
            >
              {/* @ts-ignore: Block content to plain text requires one input */}
              {trimString(blockContentToPlainText(piece.extract), 200)}
            </Typography>
          </div>
        )}
        {piece.technologies?.length && (
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
              className={` text-primary-200 md:text-primary-200 origin-top
             transition-all duration-300 ease-in-out 
            ${
              activeTab === 'stack'
                ? 'scale-y-1 opacity-100 max-h-full'
                : 'scale-y-0 opacity-0 max-h-0'
            }`}
            >
              {piece.technologies.toString().replaceAll(',', ', ')}.
            </Typography>
          </div>
        )}
        {(piece?.slug?.current || piece?.liveUrl) && (
          <div className='grid gap-1 mt-5'>
            {piece?.liveUrl && (
              <Button
                type='text-light'
                icon={BiLinkExternal}
                iconPosition='right'
                href={piece?.liveUrl}
                externalLink
              >
                View Live Project
              </Button>
            )}
            <Divider />
            {piece?.slug?.current && (
              <Button
                type='text-light'
                icon={TbRainbow}
                iconPosition='right'
                href={`/portfolio/${piece?.slug?.current}`}
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
