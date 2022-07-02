import Image from 'next/image';
import React, { Ref, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Typography from '../typography/Typography';
import { PortfolioPieceType } from '../../pages/portfolio/types';

type Props = {
  pieces: Array<PortfolioPieceType>;
};

const getRelativeCoordinates = (
  event: React.MouseEvent<HTMLElement, MouseEvent>,
  referenceElement: any
): number => {
  const position = event.pageX;
  const { right } = referenceElement.getBoundingClientRect(); // getBoundingClientRect() returns the position of the element relative to the viewport

  // Don't ask me why I have to subtract the right position from the position of the element.
  // It works, but I don't know why.
  return Math.round(((position - right / 2) / 8) * -1);
};

const OtherPiecesBlockElement = ({ pieces }: Props) => {
  const [mousePosition, setMousePosition] = useState(0);
  const containerRef = useRef();

  type PortfolioRowContent = {
    image: string;
    title?: string;
    width:
      | '1/1'
      | '1/2'
      | '1/3'
      | '2/3'
      | '1/4'
      | '3/4'
      | '1/5'
      | '2/5'
      | '3/5';
  };

  // const portfolioRows = (): Array<PortfolioRowContent>[] => {
  //   const divisions = pieces.length / 3;
  //   const portfolioRows = [];

  //   for (let index = 0; index < array.length; index++) {
  //     const element = array[index];

  //   }
  // };
  // portfolioRows();

  const contentRows: Array<PortfolioRowContent[]> = [
    [
      { image: '/images/future-agent-app-cover.jpg', width: '1/3' },
      { image: '/images/mortgagely-cover.jpg', width: '1/3' },
      { image: '/images/flavor-festival-cover.jpg', width: '1/3' },
    ],
    [
      { image: '/images/dr-setati-cover.jpg', width: '2/5' },
      { image: '/images/dropend-cover.jpg', width: '1/5' },
      { image: '/images/future-agent-form-cover.jpg', width: '2/5' },
    ],
    [
      { image: '/images/sanctuary-cover.jpg', width: '1/2' },
      { image: '/images/arch-studios-cover.jpg', width: '1/2' },
    ],
  ];

  const calculateStaticWidth = (width: string): number =>
    width === '1/2'
      ? 900
      : width === '1/3'
      ? 600
      : width === '2/3'
      ? 1200
      : width === '1/4'
      ? 450
      : width === '3/4'
      ? 1350
      : width === '1/5'
      ? 360
      : width === '2/5'
      ? 720
      : width === '3/5'
      ? 1080
      : 1800;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition(getRelativeCoordinates(e, containerRef.current));
  };

  return (
    <div
      // @ts-ignore: cant have refs in functional components
      ref={containerRef}
      className='relative'
      onMouseMove={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
        handleMouseMove(e)
      }
      style={{
        perspective: 400,
      }}
    >
      <motion.div
        className='w-[110vw] relative grid auto-rows-min gap-4 overflow-x-auto origin-center right-[6vw]'
        style={{ transform: `translateX(${mousePosition}%)` }}
        animate={{ x: mousePosition }}
        transition={{ ease: 'linear' }}
      >
        {contentRows.map((row, i) => {
          const columns = Number(row[0].width.at(-1)); // thank you boxing

          return (
            <div
              className={`grid ${
                columns === 5
                  ? 'grid-cols-5'
                  : columns === 4
                  ? 'grid-cols-4'
                  : columns === 3
                  ? 'grid-cols-3'
                  : columns === 2
                  ? 'grid-cols-2'
                  : 'grid-cols-1'
              }
              auto-rows-fr gap-4 w-full h-full`}
              key={i}
            >
              {row.map((content, j) => {
                const span = Number(content.width.at(0));
                return (
                  <div
                    key={j}
                    className={`col-span-${
                      span || '1'
                    } relative overflow-hidden cursor-eye group`}
                  >
                    <article className='w-full h-full absolute top-0 grid content-center bg-primary-800/70 z-10 text-center  backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:duration-1000'>
                      <Typography
                        as='h4'
                        size='h3'
                        className='text-primary-100'
                      >
                        View Project
                      </Typography>
                    </article>
                    <Image
                      src={content.image}
                      width={calculateStaticWidth(content.width)}
                      height={600}
                      layout='responsive'
                      className='object-center object-cover h-full w-full'
                      alt=''
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default OtherPiecesBlockElement;
