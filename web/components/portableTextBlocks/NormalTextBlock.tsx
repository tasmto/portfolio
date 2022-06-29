import React from 'react';
import Button from '../button/Button';
import Typography from '../typography/Typography';

type Props = {
  content: {
    description?: string;
    heading?: string;
    link?: string;
    linkText?: string;
  };
};

const NormalTextBlock = ({ content }: Props) => {
  return (
    <section className='max-w-2xl mx-auto grid gap-6 '>
      {content.heading && (
        <Typography as='h2' size='h2'>
          {content.heading}
        </Typography>
      )}
      {content.description && (
        <Typography as='p' size='body1'>
          {content.description}
        </Typography>
      )}
      {content.link && (
        <Button href={content.link} externalLink size='large' type='tertiary'>
          {content.linkText || 'Learn More'}
        </Button>
      )}
    </section>
  );
};

export default NormalTextBlock;
