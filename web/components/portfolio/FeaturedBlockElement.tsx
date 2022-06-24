import Image from 'next/image';
import Divider from '../divider/Divider';

type Props = {
  description: string;
  image: string;
  title: string;
  logoImage?: string;
  stack?: string[];
  caseStudy?: string;
  liveLink?: string;
  githubLink?: string;
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
  caseStudy,
  liveLink,
  githubLink,
}: Props) => {
  return (
    <article className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-7 lg:gap-10'>
      <div className='col-span-1 md:col-span-2 lg:col-span-3'>
        <Image
          src={image}
          width={850}
          height={450}
          layout='responsive'
          className='object-center object-cover'
          alt=''
        />
      </div>
      <div className='col-span-1 lg:col-span-2 grid gap-5 lg:gap-7  content-start'>
        <h2 className='text-5xl '>Inteligets</h2>
        {description && (
          <div className='grid gap-2'>
            <h4 className='flex gap-4 text-xl items-center'>
              <span>Description</span>
              <Divider />
            </h4>
            <p className='text-sm lg:text-md text-primary-300'>{description}</p>
          </div>
        )}
        {stack?.length && (
          <div className='grid gap-2'>
            <h4 className='flex gap-4 text-xl items-center'>
              <span>Stack</span>
              <Divider />
            </h4>
            <p className='text-sm text-primary-300'>
              {stack.toString().replaceAll(',', ', ')}.
            </p>
          </div>
        )}
      </div>
    </article>
  );
};

export default FeaturedBlockElement;
