import Link from 'next/link';
import Image from 'next/image';
import TechSlider from '../components/technologies-sliders/TechSlider';
import Button from '../components/button/Button';
import { IoDownloadOutline } from 'react-icons/io5';
import Divider from '../components/divider/Divider';
import FeaturedBlockElement from '../components/portfolio/FeaturedBlockElement';
import Typography from '../components/typography/Typography';
import OtherPiecesBlockElement from '../components/portfolio/OtherPiecesBlockElement';
import ResumeTabsElement from '../components/resume/ResumeTabsElement';
import ContactForm from '../components/contact/ContactForm';

type Props = {};

const Home = ({}: Props) => {
  return (
    <div className='max-w-[100vw] grid gap-12 md:gap-24  relative'>
      <div className=' w-full h-full max-w-[100vw] overflow-x-hidden bg-primary-700  pt-10 pb-20 text-white'>
        <div className='container-1 grid gap-14 md:gap-28'>
          <section className='grid gap-10 justify-center'>
            <article className='w-full grid md:grid-cols-5 gap-10 content-center justify-items-center'>
              <div className='flex flex-col gap-5 self-center justify-self-center md:col-span-3 max-w-lg md:max-w-none'>
                <Typography size='display2' as='h1'>
                  Hi, im Tashinga, a full-stack JavaScript developer.
                </Typography>
                <Typography
                  size='body1'
                  className='max-w-[30rem] sm:text-xl  lg:text-2xl text-primary-100 font-light'
                >
                  I'm currently looking for my next opportunity to make more
                  kickass software for the web.
                </Typography>
                <div className='flex flex-wrap-reverse gap-3 mt-10'>
                  <Link href='/'>
                    <a>
                      <Button type='tertiary' size='large'>
                        My CV
                      </Button>
                    </a>
                  </Link>

                  <Link href='/'>
                    <a>
                      <Button type='primary' size='large'>
                        My Portfolio
                      </Button>
                    </a>
                  </Link>
                </div>
              </div>
              <div className='hidden md:block col-span-2'>
                <Image
                  src='/images/about-me-image-cluster.png'
                  width={500}
                  height={500}
                  layout='intrinsic'
                  className='object-center object-cover'
                  alt=''
                />
              </div>
            </article>
            <TechSlider />
          </section>
          <section className='grid gap-8'>
            <Typography size='h2' className='flex gap-4 items-center'>
              <span className='shrink-0'>Featured Projects</span>
              <Divider />
            </Typography>
            <div className='grid gap-10 md:gap-14'>
              <FeaturedBlockElement
                image='/images/inteligets-cover.png'
                title='Inteligets'
                stack={[
                  'React',
                  'Redux',
                  'Axios',
                  'Bootstrap 5',
                  'Sass',
                  'Express',
                  'MongoDB',
                  'Mongoose',
                  'Node.js',
                  'Framer Motion',
                ]}
                description='A fully functional fullstack e-commerce store that supports multiple
            user roles, the creation, reading, deletion and updating (CRUD) of
            user generated orders and reviews and management of products.'
                logoImage='/images/inteligets-logo.svg'
              />
              <FeaturedBlockElement
                image='/images/blogr-cover.png'
                title='Blogr'
                stack={[
                  'React',
                  'Redux',
                  'Axios',
                  'Bootstrap 5',
                  'Sass',
                  'Express',
                  'MongoDB',
                  'Mongoose',
                  'Node.js',
                  'Framer Motion',
                ]}
                description='A fully functional fullstack e-commerce store that supports multiple
            user roles, the creation, reading, deletion and updating (CRUD) of
            user generated orders and reviews and management of products.'
                textFirst
                logoImage='/images/blogr-logo.svg'
                liveLink='https://blogr.tashinga.com'
                githubLink='github.com/tashinga/blogr'
                caseStudy='/'
              />
            </div>
          </section>
        </div>
      </div>
      <section className='overflow-x-hidden'>
        <OtherPiecesBlockElement />
      </section>
      <div className='grid gap-5 container-1'>
        <section className=' text-gray-900 grid gap-10 w-full'>
          <article>
            <div className='grid gap-5'>
              <Typography size='h1' as='h2' bold>
                I have been in the industry for over 4 years....
              </Typography>
              <Typography size='body1' className='max-w-[30rem]'>
                Fast and scalable hosting, advanced secuNow we can update text
                and images on some of our.
              </Typography>
            </div>
          </article>
          <div className='hidden md:block'>
            <ResumeTabsElement />
          </div>
          <div
            aria-hidden='true'
            className='md:hidden flex justify-center
            '
          >
            <Button size='large' type='primary' icon={IoDownloadOutline}>
              Download My CV
            </Button>
          </div>
        </section>
        <section className=' w-full bg-secondary-100 bg-gradient-to-br from-secondary-50 to-secondary-100 py-10 px-4 md:px-10 md:py-28 grid gap-4 gap-y-8 md:grid-cols-2'>
          <div className='grid gap-5 content-start'>
            <Typography size='h1' as='h2' bold>
              You can get in touch with me any way you'd like.
            </Typography>
            <Typography size='body1' className='max-w-[30rem]'>
              I recommend using any of the social media avenues below but feel
              free to fill in the form as well :)
            </Typography>
            <ul className='flex gap-5 mt-3 md:mt-5'>
              <li>
                <a
                  href='https://github.com/tasmto'
                  target='_blank'
                  rel='noreferrer'
                  title='Visit my github profile'
                >
                  <Image
                    src='/icons/Github-icon.png'
                    width={50}
                    height={50}
                    layout='intrinsic'
                    className='object-contain'
                    alt=''
                  />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/tasmto/'
                  target='_blank'
                  rel='noreferrer'
                  title='Visit my Linkedin profile'
                >
                  <Image
                    src='/icons/Linkedin-icon.png'
                    width={50}
                    height={50}
                    layout='intrinsic'
                    className='object-contain'
                    alt=''
                  />
                </a>
              </li>
              <li>
                <a
                  href='mailto:mtokotashinga@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                  title='Email me'
                >
                  <Image
                    src='/icons/Gmail-icon.png'
                    width={50}
                    height={50}
                    layout='intrinsic'
                    className='object-contain'
                    alt=''
                  />
                </a>
              </li>
              <li>
                <a
                  href='https://dribbble.com/tasmto'
                  target='_blank'
                  rel='noreferrer'
                  title='Visit my Dribble profile'
                >
                  <Image
                    src='/icons/Dribbble-icon.png'
                    width={50}
                    height={50}
                    layout='intrinsic'
                    className='object-contain'
                    alt=''
                  />
                </a>
              </li>
              <li>
                <a
                  href='https://wa.link/rab693'
                  target='_blank'
                  rel='noreferrer'
                  title='send me a WhatsApp message'
                >
                  <Image
                    src='/icons/Whatsapp-icon.png'
                    width={50}
                    height={50}
                    layout='intrinsic'
                    className='object-contain'
                    alt=''
                  />
                </a>
              </li>
            </ul>
            <Typography
              size='caption'
              as='span'
              className='flex gap-0 items-center mt-[-15px]'
            >
              <Button
                href='https://harnoorbhullar.com/resources/'
                externalLink
                type='text'
                className='text-sm'
              >
                * Icons by Harnoor Bhullar.
              </Button>
            </Typography>
          </div>
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default Home;
