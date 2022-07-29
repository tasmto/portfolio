import React from 'react';
import { BlogPostType } from './types';
import GetResourceUrl from '../sanityio/GetResourceURL';
import Typography from '../typography/Typography';
import { IoTodayOutline } from 'react-icons/io5';
import Link from 'next/link';
import Tag from '../tags/Tag';
import Image from 'next/image';

type Props = {
  post: BlogPostType;
  className?: string;
};

const BlogCard = ({ post, className = '' }: Props) => {
  return (
    <Link href={`/blog/${post?.slug?.current}`}>
      <a
        className={`px-6 relative min-h-[200px] h-full py-10 overflow-hidden grid gap-6 rounded-xl md:rounded-3xl cursor-eye bg-gray-100 border border-slate-200 hover:bg-secondary-100 transition-all  text-slate-700 ${className}`}
      >
        <div className='flex gap-2 flex-wrap'>
          {post?.categories?.map((category, i) => (
            <Tag color='secondary' key={i}>{`${category}`}</Tag>
          ))}
        </div>

        <div className='justify-self-center self-center max-w-[250px]'>
          <Image
            src={GetResourceUrl(post.coverImage.asset)
              .width(200)
              .height(200)
              .fit('max')
              .auto('format')
              .url()}
            height={200}
            width={200}
            alt=''
          />
        </div>

        <div className='z-10 grid gap-1 max-w-md'>
          <Typography size='body3' as='p' className='tracking-tight'>
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </Typography>
          <Typography size='h3' as='h1' className='tracking-tight'>
            {post.title}
          </Typography>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
