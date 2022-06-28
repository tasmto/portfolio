import { useTransform, useViewportScroll, motion } from 'framer-motion';
import React, { useState } from 'react';

type Props = {};

const PageScrollLine = (props: Props) => {
  const [scrollProgress, SetScrollProgress] = useState(0);
  const { scrollYProgress } = useViewportScroll();

  scrollYProgress.onChange((x) => SetScrollProgress(x));

  return (
    <div className='relative h-0 w-full' aria-hidden='true'>
      <div className='fixed md:top-[77px] top-0 h-1 w-full bg-primary-100 shadow-inner z-30'>
        <motion.div
          className='h-full bg-primary-500 origin-top-left rounded-r-lg'
          style={{ scaleX: scrollProgress }}
        ></motion.div>
      </div>
    </div>
  );
};

export default PageScrollLine;
