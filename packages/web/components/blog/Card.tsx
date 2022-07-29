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
        className={`px-6 relative min-h-[250px] h-full py-16 md:py-20 overflow-hidden grid gap-6 rounded-xl md:rounded-3xl cursor-eye bg-secondary-100 text-primary-900`}
      >
        <Tag color={post?.publishedAt ? 'secondary' : 'tertiary'}>
          <>
            <IoTodayOutline className='h-5 w-5' />
            <span>
              {post?.publishedAt
                ? `Completed: 
            ${new Date(post?.publishedAt).toLocaleDateString('en-US', {
              month: 'long',
              year: 'numeric',
            })}`
                : 'Ongoing'}
            </span>
          </>
        </Tag>
        <Image
          src={GetResourceUrl(post.coverImage.asset)
            .width(600)
            .height(600)
            .blur(1)
            .fit('max')
            .auto('format')
            .url()}
          height={600}
          width={600}
          alt=''
        />
        <div className='z-10 grid gap-2 max-w-md'>
          <Typography
            size='h2'
            as='h1'
            className='tracking-tight drop-shadow-md max-w-2xl'
          >
            {post.title}
          </Typography>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;
