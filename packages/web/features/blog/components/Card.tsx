import React from 'react';
import { BlogPostType } from '../types';
import GetResourceUrl from '../../../utilities/GetResourceURL';
import Typography from '../../../components/typography/Typography';
import Link from 'next/link';
import Tag from '../../../components/tags/Tag';
import Image from 'next/image';

type Props = {
  post: BlogPostType;
  className?: string;
};

const BlogCard = ({ post, className = '' }: Props) => {
  return (
    <Link href={`/blog/${post?.slug?.current}`}>
      <a
        className={`px-6 relative min-h-[200px] h-full py-10  overflow-hidden sm:grid-cols-1 grid-cols-5 grid gap-3 rounded-xl sm:rounded-2xl cursor-eye bg-[#f8f8f8]  border border-slate-200 hover:bg-slate-100 transition-all  text-slate-700  ${className}`}
      >
        <div className='hidden sm:flex absolute top-4 left-6 gap-2 flex-wrap'>
          {post?.categories?.map((category, i) => (
            <Tag color='secondary' key={i}>{`${category}`}</Tag>
          ))}
        </div>

        <div className='col-span-2 order-last sm:order-first sm:col-span-1 justify-self-center self-center max-w-[300px]'>
          <Image
            src={GetResourceUrl(post.coverImage.asset)
              .width(400)
              .height(400)
              .fit('max')
              .auto('format')
              .url()}
            height={400}
            width={400}
            alt=''
          />
        </div>

        <div className='z-10 col-span-3 sm:col-span-1 self-center  grid gap-1 max-w-md'>
          <Typography size='body3' as='p' className='tracking-tight'>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </Typography>
          <Typography size='h2' as='h1' className='tracking-tight'>
            {post.title}
          </Typography>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
