import React from 'react';

import Divider from '@/components/divider/Divider';
import Typography from '@/components/typography/Typography';

type Props = {
  title: string;
  body?: React.ReactNode | string;
  showDivider?: boolean;
};

const PageTitle = ({ body, title, showDivider = true }: Props) => {
  return (
    <>
      <article className=' grid gap-6 max-w-3xl'>
        <Typography size='display1' as='h1' className='tracking-tighter'>
          {title}
        </Typography>
        {body && (
          <Typography size='body2' as='p' className=' text-gray-700'>
            {body}
          </Typography>
        )}
      </article>
      {showDivider && (
        <Divider type='dashed' className='opacity-100 !border-slate-500' />
      )}
    </>
  );
};

export default PageTitle;
