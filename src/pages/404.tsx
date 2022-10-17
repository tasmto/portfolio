import React from 'react'
import groq from 'groq'
import Link from 'next/link'

import Layout from '@/components/Layout'
import PageMeta from '@/components/seo/Seo'
import PageTitle from '@/features/pages/components/Title'
import FeaturedBlockElement from '@/features/portfolio/components/FeaturedBlockElement'
import { PortfolioPieceType } from '@/features/portfolio/types'
import { getClient } from '@/lib/sanity.server'

type Props = {
  portfolioPieces: PortfolioPieceType[]
}

const PageNotFound = ({ portfolioPieces }: Props) => {
  return (
    <Layout>
      <div className='mt-8 md:mt-32 grid gap-16 md:gap-24 container-1 text-gray-900'>
        <PageMeta title={'Whoooops'} />
        <PageTitle
          title='Ummmmmm.'
          body={
            <>
              Unfortunately I couldn't find the page you were looking for. You
              could go{' '}
              <Link href='/' scroll={false}>
                <strong className='link'>back to the homepage</strong>
              </Link>{' '}
              {portfolioPieces ? (
                <>
                  buuuut don't worry I always have a backup plan 😋...
                  <strong> Here is a random case study.</strong>
                </>
              ) : (
                '...'
              )}
            </>
          }
        />
        {portfolioPieces && (
          <section className='grid  gap-8  container-1'>
            <FeaturedBlockElement
              piece={
                portfolioPieces[
                  Math.floor(Math.random() * portfolioPieces.length)
                ]
              }
            />
          </section>
        )}
      </div>
    </Layout>
  )
}

const projectsQuery = groq`*[_type == "portfolio" && featured]{
  ...,
  "technologies": technologies[]->name,
}`
export const getStaticProps = async (context: any) => {
  const portfolioPieces = await getClient().fetch(projectsQuery)
  return { props: { portfolioPieces } }
}

export default PageNotFound
