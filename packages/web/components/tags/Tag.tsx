import React from 'react';
import Typography from '../typography/Typography';

type Props = {
  color?: 'primary' | 'secondary' | 'tertiary';
  children: React.ReactNode;
};

const Tag = ({ color, children }: Props) => {
  return (
    <Typography
      size='body3'
      as='p'
      className={`py-1 text-sm text-white justify-self-start self-start tracking-tight  ${
        color === 'primary'
          ? 'bg-primary-700'
          : color === 'secondary'
          ? 'bg-secondary-700'
          : color === 'tertiary'
          ? 'bg-tertiary-700'
          : 'bg-slate-400'
      } backdrop-blur-xl max-w-2xl px-2 py-1 rounded-xl m-0 flex gap-3`}
    >
      {children}
    </Typography>
  );
};

export default Tag;
