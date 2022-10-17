import { getClient } from '@/lib/sanity.server'
import groq from 'groq'
import PageScrollLine from '../../features/pages/components/ScrollProgress'
import PortableTextParser from '../../features/portable-text/PortableTextParser'
import Typography from '../../components/typography/Typography'
import Divider from '../../components/divider/Divider'
import TechStacksCards from '../../components/tech-stacks/TechStacksCards'
import Button from '../../components/button/Button'
import PageMeta from '../../components/seo/Seo'
import RecommendedProjectsCards from '../../features/portfolio/components/RecommendedProjectsCards'
import { PortfolioPieceType } from '../../features/portfolio/types'
import PortFolioPieceCover from '../../features/portfolio/components/Cover'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'

// Guide: https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js#3085b10bbadd

type Props = {
  piece: PortfolioPieceType
}

const PortfolioPiece = ({ piece }: Props) => {
  if (!piece) return null
  return (
    <Layout>
      <PageMeta title={piece?.projectName || 'Portfolio'} />
      <PageScrollLine />
      <div className='bg-slate-50/20 text-gray-800 snap-proximity snap-y  grid gap-16 md:gap-24 '>
        <div className='grid gap-16 lg:gap-24 snap-start'>
          <PortFolioPieceCover portfolio={piece} />

          <div className='grid gap-10 md:gap-14 container-2'>
            {piece?.brief && (
              <article className='grid gap-6'>
                <Typography
                  size='body3'
                  as='h3'
                  className='text-primary-800 !font-medium'
                >
                  The brief/ challenge
                </Typography>
                <Typography size='body2' as='div' className='text-gray-700'>
                  <PortableTextParser content={piece?.brief} />
                </Typography>
              </article>
            )}
            <Divider type='dotted' prominent />
            {piece?.extract && (
              <article className='grid gap-6 '>
                <Typography
                  size='body3'
                  as='h3'
                  className='text-primary-800 !font-medium'
                >
                  The solution
                </Typography>
                <Typography size='body2' as='div'>
                  {<PortableTextParser content={piece?.extract} />}
                </Typography>
              </article>
            )}

            <TechStacksCards technologies={piece?.technologies} />
            <Divider type='dotted' prominent />
          </div>

          {piece?.body && (
            <PortableTextParser
              content={piece?.body}
              className={'grid gap-14 md:gap-22 lg:gap-24 '}
            />
          )}
        </div>
        <div className='w-full h-full max-w-[100vw] min-h-[80vh] 2xl:min-h-full grid items-center gap-10 overflow-x-hidden bg-slate-900 bg-gradient-to-tr bg-[radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))]  from-slate-900/70 to-slate-900 py-20 text-white snap-start'>
          <section className='container-1 grid gap-4 w-full'>
            <Divider type='solid' />
            <div className='flex flex-wrap gap-4 md:gap-10 justify-between items-center'>
              <Typography size='h3' as='h3'>
                Thank you so much for checking out this project!
              </Typography>
              <div className='flex gap-4'>
                {piece?.repoUrl && (
                  <Button type='tertiary' href={piece?.repoUrl} externalLink>
                    View the code
                  </Button>
                )}
                {piece?.liveUrl && (
                  <Button type='primary' href={piece?.liveUrl} externalLink>
                    View the live project
                  </Button>
                )}
              </div>
            </div>

            <Divider type='solid' className='mb-10' />
            <RecommendedProjectsCards projects={piece?.relatedProjects} />
          </section>
        </div>
      </div>
    </Layout>
  )
}

const query = groq`*[_type == "portfolio" && slug.current == $slug][0]{
  ...,
  "technologies": technologies[]->{name, icon, description,featured},
"relatedProjects": relatedProjects[]->{coverImage,coverImage,projectName, projectSubtitle, completedAt,slug, technologies[]-> {name, icon}}
 }`

// This validates whether the slug is correct, exists and makes it available for getStaticProps.
export const getStaticPaths = async () => {
  const paths = await getClient().fetch(
    groq`*[_type == "portfolio" && defined(slug.current)][].slug.current`
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

  // Query 2 random pieces to show as related projects if there aren't any related projects
  if (!piece?.relatedProjects) {
    piece.relatedProjects = await getClient().fetch(
      groq`*[_type == "portfolio" && slug.current != "${slug}"][0..1]{coverImage,coverImage, projectName, projectSubtitle, slug}`
    )
  }
  return { props: { piece } }
}

export default PortfolioPiece
