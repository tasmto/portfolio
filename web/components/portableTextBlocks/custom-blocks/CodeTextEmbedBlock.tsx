import React from 'react';
import Button from '../../button/Button';
import Typography from '../../typography/Typography';
import CodeParser from '../../code-embeds/CodeParser';
import { CodeEmbedType } from '../../portfolio/types';
import PortableTextParser from '../PortableTextParser';

type Props = {
  content: CodeEmbedType;
};

const CodeTextEmbedBlock = ({ content }: Props) => {
  const { heading, description, code, link, linkText } = content;
  return (
    <section className='grid gap-6 md:gap-7 container-2 w-full'>
      {heading && (
        <Typography as='h2' size='h2'>
          {heading}
        </Typography>
      )}
      <div className='overflow-hidden max-h-96 w-full rounded-lg border-slate-200 border'>
        <CodeParser code={code.code} language={code.language} />
      </div>
      <div className='flex gap-4'>
        {link && (
          <Button href={link} externalLink size='large' type='tertiary'>
            {linkText || 'Learn More'}
          </Button>
        )}
        {description && (
          <Typography as='p' size='body2'>
            <PortableTextParser content={description} />
          </Typography>
        )}
      </div>
    </section>
  );
};

export default CodeTextEmbedBlock;
