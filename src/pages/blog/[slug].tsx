import groq from 'groq'
import Image from 'next/image'

import Divider from '@/components/divider/Divider'
import Layout from '@/components/Layout'
import PageMeta from '@/components/seo/Seo'
import Typography from '@/components/typography/Typography'
import { BlogPostType } from '@/features/blog/types'
import PageScrollLine from '@/features/pages/components/ScrollProgress'
import PortableTextParser from '@/features/portable-text/PortableTextParser'
import { urlFor } from '@/lib/sanity'
import { getClient } from '@/lib/sanity.server'

// Guide: https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js#3085b10bbadd

type Props = {
  piece: BlogPostType
}

const PortfolioPiece = ({ piece }: Props) => {
  if (!piece) return null
  return (
    <Layout>
      <PageMeta title={piece?.title || 'Post'} />
      <PageScrollLine />
      <div className='bg-slate-50/20 text-gray-800 snap-proximity snap-y  grid gap-16 md:gap-24 mt-14 '>
        <div className='container-1 grid gap-10 md:gap-24 md:grid-cols-2'>
          <article className=' grid gap-6 max-w-3xl content-center self-center'>
            <Typography size='display1' as='h1' className='tracking-tighter'>
              {piece?.title}
            </Typography>

            <Typography size='body2' as='p'>
              {piece.extract}
            </Typography>
          </article>
          <div className='border image-h-full border-gray-200 rounded-3xl w-full min-h-[400px] lg:min-h-[500px]'>
            <Image
              src={
                urlFor(piece?.coverImage?.asset?._ref)
                  ?.width(1280)
                  ?.height(720)
                  ?.fit('max')
                  ?.auto('format')
                  ?.url() ?? ''
              }
              alt=''
              loading='lazy'
              width={1280}
              height={720}
              className='object-cover !h-full'
            />
          </div>
          <Divider
            type='dashed'
            className='mt-6 md:mt-0 opacity-100 !border-slate-500 col-span-full'
          />
        </div>

        {piece?.body && (
          <PortableTextParser
            content={piece?.body}
            className={'grid gap-14 md:gap-22 lg:gap-24 '}
          />
        )}
      </div>
    </Layout>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{ ...,
  "categories": categories[]->name,}`

// This validates whether the slug is correct, exists and makes it available for getStaticProps.
export const getStaticPaths = async () => {
  const paths = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  }
}

// Fetched the piece from sanity.
export const getStaticProps = async (context: any) => {
  // Its important to default the slug so that it doesn't return undefined
  const { slug = '' }: { slug: string } = context.params
  const piece = await getClient().fetch(query, { slug })
  return { props: { piece }, fallback: 'blocking', revalidate: 400 }
}

export default PortfolioPiece
