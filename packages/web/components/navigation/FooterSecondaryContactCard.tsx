import React from 'react';
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5';
import Button from '../button/Button';
import Typography from '../typography/Typography';

type Props = {};

const FooterSecondaryContactCard = (props: Props) => {
  return (
    <section className='p-10 md:p-14 bg-slate-100  border border-slate-200/50 rounded-xl md:rounded-3xl flex flex-col md:flex-row justify-between md:items-center gap-6'>
      <Typography as='h2' size='h2' className='flex gap-4 items-center'>
        <IoChatbubbleEllipsesSharp className='h-8 w-8 text-secondary-500' />
        <span>You can get in touch with me any way you'd like.</span>
      </Typography>
      <Button
        type='secondary'
        size='large'
        className='!items-center'
        href='/#contact'
      >
        Get in touch
      </Button>
    </section>
  );
};

export default FooterSecondaryContactCard;
