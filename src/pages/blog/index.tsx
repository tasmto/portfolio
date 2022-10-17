import groq from 'groq'

import Layout from '@/components/Layout'
import PageMeta from '@/components/seo/Seo'
import BlogCard from '@/features/blog/components/Card'
import { BlogPostType } from '@/features/blog/types'
import FooterSecondaryContactCard from '@/features/navigation/components/FooterCard'
import PageTitle from '@/features/pages/components/Title'
import { getClient } from '@/lib/sanity.server'

type Props = {
  posts: Array<BlogPostType>
}

const PortfolioCollectionsPage = ({ posts }: Props) => {
  return (
    <Layout>
      <div className='mt-8 md:mt-32 lg:mt-36 grid gap-16 md:gap-24 container-1 text-gray-900'>
        <PageMeta title={'Blog'} />

        <PageTitle title='My thoughts and experiences with/on all things dev and design.' />

        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {posts?.map((piece, i) => (
            <BlogCard key={i} post={piece} />
          ))}
        </section>

        {/* <Divider type='dotted' prominent /> */}
        <div className=''>
          <FooterSecondaryContactCard />
        </div>
      </div>
    </Layout>
  )
}

const query = groq`*[_type == "post"][0..5] | order(publishedAt  desc){
  ...,
  "categories": categories[]->title,
}`

export const getStaticProps = async () => {
  const posts = await getClient().fetch(query)
  return {
    props: { posts },
  }
}

export default PortfolioCollectionsPage
