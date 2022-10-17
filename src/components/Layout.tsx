import React from 'react'
import { motion } from 'framer-motion'

import PageMeta from '@/components/seo/Seo'
import Footer from '@/features/navigation/components/Footer'
import NavBar from '@/features/navigation/components/NavBar'

type Props = {
  children: React.ReactNode
}

/**
 * @description Wrapper for the site, includes global stuff Redux stores etc if needed.
 */
const Layout = ({ children }: Props) => {
  const variants = {
    hidden: { opacity: 0, x: -200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 200 },
  }

  return (
    <div
      id='main'
      className='min-h-[80vh] max-w-[100vw] mb-[80px] md:mb-0 md:gap-32 selection:bg-primary-100 selection:text-primary-800 relative  overflow-x-hidden'
    >
      <PageMeta />
      <NavBar />
      <motion.main
        id='#content'
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        transition={{ ease: 'easeOut', duration: 0.3 }}
        className='text-slate-600'
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}

export default Layout
