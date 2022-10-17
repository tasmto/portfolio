import React from 'react'

import Typography from '../typography/Typography'

type Props = {
  color?: 'primary' | 'secondary' | 'tertiary'
  children: React.ReactNode
}

const Tag = ({ color, children }: Props) => {
  return (
    <Typography
      aria-hidden='true'
      size='body3'
      as='p'
      className={`py-1 text-sm text-white justify-self-start self-start tracking-tight shadow-sm ${
        color === 'primary'
          ? 'bg-primary-700'
          : color === 'secondary'
          ? 'bg-secondary-900'
          : color === 'tertiary'
          ? 'bg-tertiary-700'
          : 'bg-slate-400'
      } backdrop-blur-xl max-w-2xl px-2 py-1 rounded-xl m-0 flex gap-1 items-center`}
    >
      {children}
    </Typography>
  )
}

export default Tag
