import React from 'react';
import Button from '../button/Button';
import Typography from '../typography/Typography';
import CodeParser from './CodeParser';

type Props = {
  content: {
    heading?: string;
    annotation?: 'string';
    code: {
      _type: 'code';
      code: string;
      language: string;
    };
    link?: string;
    linkText?: string;
    _key: string;
    _type: 'codeEmbed';
  };
};

const CodeTextEmbedBlock = ({ content }: Props) => {
  const { heading, annotation, code, link, linkText } = content;
  return (
    <section className='grid gap-6 md:gap-7'>
      {heading && (
        <Typography as='h2' size='h2'>
          {heading}
        </Typography>
      )}
      <div className='overflow-hidden max-h-96'>
        <CodeParser code={code.code} language={code.language} />
      </div>
      <div className='flex gap-4'>
        {link && (
          <Button href={link} externalLink size='large' type='tertiary'>
            {linkText || 'Learn More'}
          </Button>
        )}
        {annotation && (
          <Typography as='p' size='body1'>
            {annotation}
          </Typography>
        )}
      </div>
    </section>
  );
};

export default CodeTextEmbedBlock;
