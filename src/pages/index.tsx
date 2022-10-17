import { IoDownloadOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'
import groq from 'groq'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/components/button/Button'
import Layout from '@/components/Layout'
import TechSlider from '@/components/tech-stacks/TechSlider'
import Typography from '@/components/typography/Typography'
import BlogCard from '@/features/blog/components/Card'
import { BlogPostType } from '@/features/blog/types'
import ContactForm from '@/features/forms/components/ContactForm'
// import client from '../client'
import PortfolioCard from '@/features/portfolio/components/Card'
import FeaturedBlockElement from '@/features/portfolio/components/FeaturedBlockElement'
import { PortfolioPieceType } from '@/features/portfolio/types'
import ResumeTabsElement from '@/features/resume/components/ResumeTabsElement'
import { getClient } from '@/lib/sanity.server'

type Props = {
  portfolioPieces: Array<PortfolioPieceType>
  technologies: PortfolioPieceType['technologies']
  blogPosts: Array<BlogPostType>
}

const Home = ({ portfolioPieces, technologies, blogPosts }: Props) => {
  const featuredPieces = portfolioPieces.filter((piece) => piece.featured)
  const nonFeaturedPieces = portfolioPieces.filter((piece) => !piece.featured)

  return (
    <Layout>
      <div className='max-w-[100vw] grid gap-12 md:gap-24  relative '>
        <div className=' w-full h-full max-w-[100vw] overflow-x-hidden bg-slate-800  pt-10 pb-20 text-white bg-gradient-to-tr  from-slate-900/70 to-slate-900'>
          <div className='container-1 grid gap-14 md:gap-28'>
            <section className='grid gap-10 justify-center w-full'>
              <article className='w-full grid md:grid-cols-5 gap-10 content-center justify-items-center'>
                <div className='flex flex-col gap-5 self-center justify-self-center md:col-span-3 max-w-lg md:max-w-none'>
                  <Typography size='display1' as='h1'>
                    Hi, I'm Tashinga, a full-stack JavaScript developer.
                  </Typography>
                  <Typography
                    size='body1'
                    className='max-w-[30rem] text-slate-300'
                  >
                    I'm currently working as a React developer at{' '}
                    <a
                      href='https://www.warpdevelopment.com/'
                      target={'_blank'}
                      rel='noreferrer'
                      className='underline underline-offset-4 hover:opacity-80'
                    >
                      Warp development 🥰
                    </a>
                    .
                  </Typography>
                  <div className='flex flex-wrap-reverse gap-3 mt-4'>
                    <Link href='/#career-highlights'>
                      <a>
                        <Button type='secondary' size='large'>
                          My CV
                        </Button>
                      </a>
                    </Link>

                    <Link href='/portfolio'>
                      <a>
                        <Button type='primary' size='large'>
                          My Portfolio
                        </Button>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className='hidden md:block col-span-2 '>
                  <Image
                    // src='/images/guide.gif'
                    src='/images/about-me-image-cluster.png'
                    width={450}
                    height={450}
                    layout='intrinsic'
                    className='object-center object-contain'
                    priority={true}
                    alt=''
                  />
                </div>
              </article>
              <TechSlider technologies={technologies} />
            </section>
            <section className='grid gap-12'>
              <Typography size='h1' as='h2'>
                Featured Projects
              </Typography>
              <div className='grid gap-8'>
                {featuredPieces.map((piece, i) => (
                  <FeaturedBlockElement
                    key={i}
                    piece={piece}
                    textFirst={i % 2 === 0}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
        <section className='grid gap-8 gap-y-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 container-1 justify-start'>
          {nonFeaturedPieces.map((piece, i) => (
            <PortfolioCard portfolio={piece} key={i} />
          ))}
        </section>

        <section
          className=' grid gap-10 w-full container-1'
          id='career-highlights'
        >
          <article className='grid gap-3 '>
            <Typography
              size='h1'
              as='h2'
              className=' text-gray-900
'
            >
              My career highlights.
            </Typography>
            <Typography size='body2' as='p' className='max-w-3xl'>
              From e-commerce to ed-tech to marketing and even real estate
              technologies, I have a wealth of experience in developing user
              focussed and modern applications for the web.
            </Typography>
          </article>
          <div className='hidden md:block'>
            <ResumeTabsElement />
          </div>
          <div
            aria-hidden='true'
            className='md:hidden  mt-[-12px] flex justify-center
            '
          >
            <Button
              size='large'
              type='primary'
              width='block'
              icon={IoDownloadOutline}
              href='/Tashinga-Mtoko-Fullstack-Developer-CV.pdf'
              download
            >
              Download My CV
            </Button>
          </div>
        </section>
        <section
          className=' grid gap-10 w-full container-1'
          id='career-highlights'
        >
          <article className='grid gap-3 '>
            <Typography size='h1' as='h2' className=' text-gray-900'>
              My blog posts.
            </Typography>
            <Typography size='body2' as='p' className='max-w-3xl'>
              Here are the lessons I've learned throughout my career as a
              developer and a designer.
            </Typography>
          </article>
          <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {blogPosts?.map((piece, i) => (
              <motion.div
                key={i}
                // initial={{ opacity: 0 }}
                // whileInView={{ opacity: 1 }}
                // transition={{ duration: 2 }}
                // viewport={{ once: true }}
              >
                <BlogCard post={piece} />
              </motion.div>
            ))}
          </div>
        </section>
        <div className='container-1'>
          <section
            // border-slate-200 bg-gray-200 bg-gradient-to-br from-gray-50 to-gray-200 border px-4 md:px-10 md:py-28
            className=' w-full py-10  grid gap-4 gap-y-14 rounded-2xl md:grid-cols-2'
            id='contact'
          >
            <div className='grid gap-3 content-start'>
              <Typography size='h1' as='h2' className=' text-gray-900'>
                Get in touch with me.
              </Typography>
              <Typography size='body2' className='max-w-[30rem]'>
                I recommend using any of the social media/ avenues below but
                feel free to fill in the form as well :)
              </Typography>
              <ul className='flex gap-5 mt-3 md:mt-5'>
                <li>
                  <a
                    href='https://github.com/tasmto'
                    target='_blank'
                    rel='noreferrer'
                    title='Visit my github profile'
                  >
                    <Image
                      src='/icons/Github-icon.png'
                      width={65}
                      height={65}
                      layout='intrinsic'
                      className='object-contain'
                      alt=''
                    />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/tasmto/'
                    target='_blank'
                    rel='noreferrer'
                    title='Visit my Linkedin profile'
                  >
                    <Image
                      src='/icons/Linkedin-icon.png'
                      width={65}
                      height={65}
                      layout='intrinsic'
                      className='object-contain'
                      alt=''
                    />
                  </a>
                </li>
                <li>
                  <a
                    href='mailto:mtokotashinga@gmail.com'
                    target='_blank'
                    rel='noreferrer'
                    title='Email me'
                  >
                    <Image
                      src='/icons/Gmail-icon.png'
                      width={65}
                      height={65}
                      layout='intrinsic'
                      className='object-contain'
                      alt=''
                    />
                  </a>
                </li>
                <li>
                  <a
                    href='https://dribbble.com/tasmto'
                    target='_blank'
                    rel='noreferrer'
                    title='Visit my Dribble profile'
                  >
                    <Image
                      src='/icons/Dribbble-icon.png'
                      width={65}
                      height={65}
                      layout='intrinsic'
                      className='object-contain'
                      alt=''
                    />
                  </a>
                </li>
                <li>
                  <a
                    href='https://wa.link/rab693'
                    target='_blank'
                    rel='noreferrer'
                    title='send me a WhatsApp message'
                  >
                    <Image
                      src='/icons/Whatsapp-icon.png'
                      width={65}
                      height={65}
                      layout='intrinsic'
                      className='object-contain w-14 h-14'
                      alt=''
                    />
                  </a>
                </li>
              </ul>
              <Typography
                size='body3'
                as='p'
                className='flex gap-0 items-center'
              >
                <a
                  href='https://harnoorbhullar.com/resources/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link'
                >
                  * Icons by Harnoor Bhullar.
                </a>
              </Typography>
            </div>
            <ContactForm />
          </section>
        </div>
      </div>
    </Layout>
  )
}

const projectsQuery = groq`*[_type == "portfolio"] | order(featured desc){
  ...,
  "technologies": technologies[]->{name,icon}
}`
const technologiesQuery = groq`*[_type == "technologies" && featured][] | order(featured desc){
 name, icon, description,featured
}`
const blogQuery = groq`*[_type == "post"][0..5] | order(publishedAt  desc){
  ...,
  "categories": categories[]->title,
}`

export const getStaticProps = async () => {
  const portfolioPieces = await getClient().fetch(projectsQuery)
  const technologies = await getClient().fetch(technologiesQuery)
  const blogPosts = await getClient().fetch(blogQuery)

  return {
    props: { portfolioPieces, technologies, blogPosts },
  }
}

export default Home
