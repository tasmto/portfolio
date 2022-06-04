import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Props {
  image: string;
  stack?: Array<string>;
  title?: string;
  id?: string;
  showStack?: boolean;
  showTitle?: boolean;
  alwaysShowTitle?: boolean;
  alwaysShowStack?: boolean;
}

const PortfolioPieceCard: React.FC<Props> = ({
  image,
  stack,
  title,
  id,
  showStack = true,
  showTitle = true,
  alwaysShowTitle = false,
  alwaysShowStack = false,
}) => {
  const navigate = useNavigate();
  const [hoverState, setHoverState] = useState(alwaysShowStack);

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
    setPos([0, 0]),
      alwaysShowStack ? setHoverState(true) : setHoverState(false);
  };

  const handleClick = () => {
    navigate(`/portfolio/${id}`);
  };

  if (!image) return null;

  return (
    <motion.div
      className='w-full h-full grid justify-items-center content-center relative opacity-85 hover:opacity-100 transition-opacity '
      style={{
        transform: `skew(${pos[0] * 2}deg, ${pos[1] * 1.25}deg)`,
        transition: 'transform 250ms ease',
      }}
      onPointerMove={onMove}
      onMouseLeave={resetPos}
      onMouseEnter={() => setHoverState(true)}
      onClick={() => {
        if (id) handleClick();
      }}
    >
      <img
        className={`h-[85%] max-h-[30rem] object-contain m-auto pointer-events-none`}
        role='presentation'
        src={image}
      />
      {title && showTitle && (
        <div className='absolute bottom-4 left-8 rounded-full px-6 py-1 bg-slate-50 dark:text-slate-800'>
          {title}
        </div>
      )}{' '}
      <AnimatePresence>
        {stack && showStack && hoverState && (
          <motion.div
            className={`absolute text-xs  ${
              showTitle ? 'bottom-14' : 'bottom-4'
            } left-8 rounded-full px-6 py-1 bg-slate-50 dark:text-slate-800`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.8 }}
          >
            <span className='font-bold'>Built with:</span> {stack.join(' | ')}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PortfolioPieceCard;
