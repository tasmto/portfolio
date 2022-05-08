import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface image {
  url: string;
  background?: string;
}
interface content {
  heading?: string;
  body?: string | Array<string>;
}
interface portfolioPiece {
  header: image;
  title: string;
  id: string;
  time: string;
  stack?: Array<string>;
  launched?: string;
  extract: string;
  repository?: string;
  production?: Array<{ label: string; link: string }>;
  content?: Array<{ image?: image; content?: content }>;
}

interface Props {
  data: portfolioPiece;
}

const PortfolioPieceCard: React.FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  const [hoverState, setHoverState] = useState(false);

  const [pos, setPos] = React.useState([0, 0]);

  const onMove = (e: any) => {
    // 1. get position information about the card
    const bounds = e.currentTarget.getBoundingClientRect();
    // 2. Transform the current pointer position so that it related
    //    to the top left corner of the Card.
    //    In addition make sure the value is between 0 and 1
    const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth;

    // 3. Perform same steps as for X Axis to the Y Axis
    const yValue = (e.clientY - bounds.y) / e.currentTarget.clientHeight;
    setPos([xValue, yValue]);
  };

  const resetPos = () => {
    setPos([0, 0]), setHoverState(false);
  };

  const handleClick = () => {
    navigate(`/portfolio/${data.id}`);
  };

  if (!data || !data.header.background) return null;

  return (
    <motion.div
      className='w-full h-full grid justify-items-center content-center relative'
      style={{
        background: data.header.background || '#F9F9F9',
        transform: `skew(${pos[0] * 2}deg, ${pos[1] * 1.25}deg)`,
        transition: 'transform 250ms ease',
      }}
      onPointerMove={onMove}
      onMouseLeave={resetPos}
      onMouseEnter={() => setHoverState(true)}
      onClick={handleClick}
    >
      <img
        className='h-[90%] w-[90%] object-contain m-auto'
        src={data.header.url}
        alt=''
      />
      {data.title && (
        <div className='absolute bottom-4 left-8 rounded-full px-6 py-1 bg-slate-50'>
          {data.title}
        </div>
      )}{' '}
      <AnimatePresence>
        {data.stack && hoverState && (
          <motion.div
            className={`absolute text-xs bottom-14 left-8 rounded-full px-6 py-1 bg-slate-50 `}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.8 }}
          >
            <span className='font-bold'>Built with:</span>{' '}
            {data.stack.join(' | ')}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PortfolioPieceCard;
