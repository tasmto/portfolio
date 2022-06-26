import React from 'react';
import Typography from '../typography/Typography';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='mt-4 border-t border-slate-300 py-4 md:py-6 text-center '>
      <Typography as='p' size='body3' className=' container-1'>
        &copy; Tashinga Mtoko 2021
      </Typography>
    </footer>
  );
};

export default Footer;
