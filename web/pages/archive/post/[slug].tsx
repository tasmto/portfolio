import client from '../../../client';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';
import { SanityReference } from '@sanity/image-url/lib/types/types';
import Image from 'next/image';

// Guide: https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js#3085b10bbadd

type Props = {
  post: {
    title: string;
    name: string;
    categories: string[];
    authorImage: SanityReference;
    body: any;
  }; // todo: change this
};

const urlFor = (source: SanityReference) => {
  return imageUrlBuilder(client).image(source);
};
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <Image
          alt={value.alt || ''}
          loading='lazy'
          src={urlFor(value)
            .width(320)
            .height(240)
            .fit('max')
            .auto('format')
            .url()}
          height={240}
          width={320}
        />
      );
    },
  },
};

const Post = ({ post }: Props) => {
  return (
    <article>
      <h1>{post.title}</h1>
      <span>By {post.name}</span>
      {post.categories && (
        <ul>
          {post?.categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}
      {post.authorImage && (
        <div>
          <Image
            src={urlFor(post.authorImage)
              .width(200)
              .height(200)
              .fit('max')
              .auto('format')
              .url()}
            alt={post.name}
            loading='lazy'
            width={200}
            height={200}
          />
        </div>
      )}
      <PortableText value={post.body} components={ptComponents} />
    </article>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title, 
  "name":author->name, 
  "categories":categories[]->title,
  "authorImage": author->image,
  body  
}`;

// This validates whether the slug is correct, exists and makes it available for getStaticProps.
export const getStaticPaths = async () => {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
};

// Fetched the post from sanity.
export const getStaticProps = async (context: any) => {
  // Its important to default the slug so that it doesn't return undefined
  const { slug = '' }: { slug: string } = context.params;
  const post = await client.fetch(query, { slug });
  return { props: { post } };
};

export default Post;
