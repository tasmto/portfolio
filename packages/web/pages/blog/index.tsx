import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import groq from 'groq';
import client from '../../client';
import Image from 'next/image';
import Typography from '../../components/typography/Typography';
import Divider from '../../components/divider/Divider';
import Button from '../../components/button/Button';
import { IoChevronDown } from 'react-icons/io5';
import FooterSecondaryContactCard from '../../components/navigation/FooterSecondaryContactCard';
import PageMeta from '../../components/seo/PageMeta';
import { BlogPostType } from '../../components/blog/types';
import GetResourceUrl from '../../components/sanityio/GetResourceURL';

type Props = {
  posts: Array<BlogPostType>;
};

const PortfolioCollectionsPage = ({ posts }: Props) => {
  return (
    <div className='mt-8 md:mt-32 lg:mt-36 grid gap-16 md:gap-24 container-1 text-gray-900'>
      <PageMeta title={'Blog'} />
      <article className=' grid gap-6 max-w-3xl'>
        <Typography size='display1' bold as='h1' className='tracking-tighter'>
          Here are some of my favorite projects I've ever worked on.
        </Typography>
        <Typography size='body2' as='p'>
          <Link href='contact'>
            <a className='link'>Let me know if you have any questions</a>
          </Link>{' '}
          or if you need a{' '}
          <Link href='/hi'>
            <a className='link'>in-person demo</a>
          </Link>{' '}
          of any of my projects.
        </Typography>
      </article>
      <Divider type='dashed' className='opacity-100 border-slate-600' />

      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {posts.map((piece, i) => (
          <Link key={i} href={`/blog/${piece?.slug?.current}`}>
            <a>
              <figure className='grid gap-6 grid-rows-1 group overflow-hidden rounded-3xl'>
                <div className=' row-start-1 row-end-1 col-start-1 col-end-1 z-0 group-hover:blur-[6px] blur-[1px] transition-all'>
                  <Image
                    width={1080}
                    height={750}
                    layout='intrinsic'
                    className='object-center object-contain'
                    alt=''
                    src={GetResourceUrl(piece?.coverImage?.asset)
                      .width(1080)
                      .height(750)
                      .fit('crop')
                      .auto('format')
                      .url()}
                  />
                </div>
                <figcaption className='grid gap-3 px-4 row-start-1 row-end-1 col-start-1 col-end-1 z-10 self-end pb-6 pt-10 bg-gradient-to-b from-primary-900/0 via-primary-900/80 to-primary-900/90 text-slate-50'>
                  <Typography
                    size='h1'
                    as='h2'
                    bold
                    className=' drop-shadow-md'
                  >
                    {piece.title}
                  </Typography>
                  <Typography
                    size='body2'
                    as='p'
                    className='text-slate-300 drop-shadow-md'
                  >
                    {piece.extract}
                  </Typography>
                </figcaption>
              </figure>
            </a>
          </Link>
        ))}
      </section>

      {/* <Divider type='dotted' prominent /> */}
      <div className=''>
        <FooterSecondaryContactCard />
      </div>
    </div>
  );
};

const query = groq`*[_type == "post"] | order(featured desc)`;

export const getStaticProps = async () => {
  const posts = await client.fetch(query);
  return {
    props: { posts },
  };
};

export default PortfolioCollectionsPage;
