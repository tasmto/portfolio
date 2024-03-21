import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useWindowSize } from 'usehooks-ts';

const AboutMeImageCluster = () => {
  const [hovered, setHovered] = useState(false);
  const { width = 768 } = useWindowSize();

  if (width < 768) return null;
  return (
    <div
      className='max-w-full grid grid-cols-1 grid-rows-1 cursor-party'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {new Array(3).fill(null).map((_, i) => (
        <motion.div
          key={`/images/about-cluster/about-me-image-cluster-{i}`}
          //   animate={{
          //     scale: [0.95, 0.975, 1.025, 1],

          //     x: [0, 2, 0, -2],
          //     y: [2, 0, -2, 2],
          //     skewY: [0, 2, 0],
          //     skewX: [0, -2, 0],
          //   }}
          whileInView={{
            scale: [0.95, 0.975, 1.025, 1],

            x: [0, 2, 0, -2],
            y: [2, 0, -2, 2],
            skewY: [0, 2, 0],
            skewX: [0, -2, 0],
            transition: {
              duration: hovered ? 7 : 13,
              type: 'spring',
              stiffness: 100,
              repeat: Infinity,
              repeatType: 'mirror',
              delay: 4 * i,
            },
          }}
          className='col-span-1 row-span-1 col-start-1 col-end-1 row-start-1 row-end-1'
        >
          <Image
            // src='/images/guide.gif'
            src={`/images/about-cluster/about-me-image-cluster-${i + 1}${
              hovered ? '--active' : ''
            }.png`}
            width={450}
            height={450}
            layout='intrinsic'
            className='object-center object-contain pointer-events-none'
            priority={true}
            alt=''
            draggable={false}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AboutMeImageCluster;
