import groq from 'groq';
import client from '../../client';
import FooterSecondaryContactCard from '../../features/navigation/components/FooterCard';
import PageMeta from '../../components/seo/Seo';
import PageTitle from '../../features/pages/components/Title';
import BlogCard from '../../features/blog/components/Card';
import { BlogPostType } from '../../features/blog/types';

type Props = {
  posts: Array<BlogPostType>;
};

const PortfolioCollectionsPage = ({ posts }: Props) => {
  return (
    <div className='mt-8 md:mt-32 lg:mt-36 grid gap-16 md:gap-24 container-1 text-gray-900'>
      <PageMeta title={'Blog'} />

      <PageTitle title='My thoughts and experiences with/on all things dev and design.' />

      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {posts?.map((piece, i) => (
          <BlogCard
            key={i}
            post={piece}
            className={
              i % 2 === 0 || i % 3 === 0 ? 'lg:col-span-1' : 'lg:col-span-2'
            }
          />
        ))}
      </section>

      {/* <Divider type='dotted' prominent /> */}
      <div className=''>
        <FooterSecondaryContactCard />
      </div>
    </div>
  );
};

const query = groq`*[_type == "post"][0..5] | order(featured desc){
  ...,
  "categories": categories[]->title,
}`;

export const getStaticProps = async () => {
  const posts = await client.fetch(query);
  return {
    props: { posts },
  };
};

export default PortfolioCollectionsPage;
