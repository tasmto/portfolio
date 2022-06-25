import Head from 'next/head';
import Link from 'next/link';
import client from '../client';
import Image from 'next/image';
import NavBar from '../components/navigation/NavBar';
import TechSlider from '../components/technologies-sliders/TechSlider';
import Button from '../components/button/Button';
import { IoDownloadOutline } from 'react-icons/io5';
import Divider from '../components/divider/Divider';
import FeaturedBlockElement from '../components/portfolio/FeaturedBlockElement';
import Typography from '../components/typography/Typography';
import OtherPiecesBlockElement from '../components/portfolio/OtherPiecesBlockElement';

type Props = {};

const Home = ({}: Props) => {
  return (
    <div>
      <Head>
        <title>Tashinga</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NavBar />

      <main id='main' className='min-h-[80vh] mb-[80px] md:mt-[80px] md:mb-0 '>
        <div className='w-full h-full bg-primary-700  pt-10 pb-20 text-white'>
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
                    kickass software on the web.
                  </Typography>
                  <div className='flex flex-wrap-reverse gap-3 mt-10'>
                    <Link href='/'>
                      <a>
                        <Button type='secondary' size='large'>
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
      </main>
    </div>
  );
};

export default Home;
