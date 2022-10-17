import React, { useState } from 'react'
import { motion, useScroll } from 'framer-motion'

type Props = {}

const PageScrollLine = (props: Props) => {
  const [scrollProgress, SetScrollProgress] = useState(0)
  const { scrollYProgress } = useScroll()

  scrollYProgress.onChange((x) => SetScrollProgress(x))

  return (
    <div className='relative h-0 w-full' aria-hidden='true'>
      <div className='fixed md:top-0 top-0 h-[4px] w-full bg-primary-100 shadow-inner z-[10000]'>
        <motion.div
          className='h-full bg-primary-600 origin-top-left'
          style={{ scaleX: scrollProgress }}
        ></motion.div>
      </div>
    </div>
  )
}

export default PageScrollLine
