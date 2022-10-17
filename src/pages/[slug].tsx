import { getClient } from '@/lib/sanity.server'
import groq from 'groq'
import PortableTextParser from '../features/portable-text/PortableTextParser'
import { pageType } from '../features/pages/types'
import FooterSecondaryContactCard from '../features/navigation/components/FooterCard'
import Layout from '../components/Layout'

// Guide: https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js#3085b10bbadd

type Props = {
  data: pageType
}

const PortfolioPiece = ({ data }: Props) => {
  return (
    <Layout>
      <div className='mt-16 grid gap-16 md:gap-24 container-1 text-gray-900'>
        {/* <PageMeta title={data?.projectName || 'Portfolio'} /> */}
        {data?.body && (
          <PortableTextParser
            content={data?.body}
            className={'grid gap-14 md:gap-22 lg:gap-24 w-full'}
          />
        )}

        <FooterSecondaryContactCard />
      </div>
    </Layout>
  )
}

const query = groq`*[_type == "page" && slug.current == $slug][0]`

// This validates whether the slug is correct, exists and makes it available for getStaticProps.
export const getStaticPaths = async () => {
  const paths = await getClient().fetch(
    groq`*[_type == "page" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: false,
  }
}

// Fetched the piece from sanity.
export const getStaticProps = async (context: any) => {
  // Its important to default the slug so that it doesn't return undefined
  const { slug = '' }: { slug: string } = context.params

  const data = await getClient().fetch(query, { slug })
  return { props: { data } }
}

export default PortfolioPiece
