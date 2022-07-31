import Link from 'next/link';
import groq from 'groq';
import client from '../../client';
import PortfolioCard from '../../features/portfolio/components/Card';
import Typography from '../../components/typography/Typography';
import Button from '../../components/button/Button';
import { IoCalendar } from 'react-icons/io5';
import FooterSecondaryContactCard from '../../features/navigation/components/FooterCard';
import PageMeta from '../../components/seo/Seo';
import PageTitle from '../../features/pages/components/Title';
import { PortfolioPieceType } from '../../features/portfolio/types';
import Layout from '../../components/Layout';

type Props = {
  portfolioPieces: Array<PortfolioPieceType>;
};

const PortfolioCollectionsPage = ({ portfolioPieces }: Props) => {
  return (
    <Layout>
      <div className='mt-8 md:mt-32 grid gap-16 md:gap-24 container-1 text-gray-900'>
        <PageMeta title={'Portfolio'} />
        <PageTitle
          title="Here are some of my favorite projects I've ever worked on."
          body={
            <>
              <Link href='contact'>
                <a className='link'>Let me know if you have any questions</a>
              </Link>{' '}
              or if you need a{' '}
              <Link href='/hi'>
                <a className='link'>in-person demo</a>
              </Link>{' '}
              of any of my projects.
            </>
          }
        />

        <section className='grid  gap-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 custom-portfolio-grid'>
            {portfolioPieces.map((piece, i) => (
              <PortfolioCard
                key={i}
                portfolio={piece}
                className={
                  i % 2 === 0 || i % 3 === 0 ? 'lg:col-span-1' : 'lg:col-span-2'
                }
              />
            ))}
            <article className='hidden lg:flex w-full h-full p-8 md:px-10 md:py-10 bg-slate-100 rounded-xl md:rounded-3xl border-2 border-dashed border-slate-300  flex-col gap-4 justify-center '>
              <Typography size='body2' bold className='mb-[-13px] opacity-80'>
                Your project goes here:
              </Typography>
              <Typography size='h2' as='h1' className=''>
                Do you have project you think I could help you with?
              </Typography>
              <Button
                type='primary'
                href='/hi'
                className='justify-self-start self-start mt-5'
                icon={IoCalendar}
                iconPosition='left'
              >
                Book some time
                <span className='sr-only xl:not-sr-only'> with me</span>.
              </Button>
            </article>
          </div>
        </section>
        {/* <Divider type='dotted' prominent /> */}
        <FooterSecondaryContactCard />
        {''}
      </div>
    </Layout>
  );
};

const query = groq`*[_type == "portfolio"] | order(featured desc)`;

export const getStaticProps = async () => {
  const portfolioPieces = await client.fetch(query);
  return {
    props: { portfolioPieces },
  };
};

export default PortfolioCollectionsPage;
