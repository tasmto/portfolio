import React from 'react'

import { PortfolioPieceType } from '../types'

import PortfolioCard from './Card'

type Props = {
  projects: PortfolioPieceType['relatedProjects']
}

const RecommendedProjectsCards = ({ projects }: Props) => {
  if (!projects) return null

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
      {projects.map((project, i) => (
        // @ts-expect-error: Portfolio type required
        <PortfolioCard key={i} portfolio={project} />
      ))}
    </section>
  )
}

export default RecommendedProjectsCards
