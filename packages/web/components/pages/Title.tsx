import React from 'react';
import reactSyntaxHighlighter from 'react-syntax-highlighter';
import Divider from '../divider/Divider';
import Typography from '../typography/Typography';

type Props = {
  title: string;
  body?: React.ReactNode | string;
};

const PageTitle = ({ body, title }: Props) => {
  return (
    <>
      <article className=' grid gap-6 max-w-3xl'>
        <Typography size='display1' as='h1' className='tracking-tighter'>
          {title}
        </Typography>
        {body && (
          <Typography size='body2' as='p'>
            {body}
          </Typography>
        )}
      </article>
      <Divider type='dashed' className='opacity-100 border-slate-600' />
    </>
  );
};

export default PageTitle;
