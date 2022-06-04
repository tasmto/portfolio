import React from 'react';
import PortfolioPieceCard from './PortfolioPieceCard';

interface image {
  url: string;
  background?: string;
}
interface content {
  heading?: string;
  body?: string | Array<string>;
}

interface Props {
  content: any;
  // {
  //   image: { url: string; background: string };
  //   text: content;
  // };
}

const PortfolioContent: React.FC<Props> = ({ content }) => {
  return (
    <section className='flex flex-col gap-12'>
      {content.text && (
        <article className='grid gap-4 max-w-3xl mx-auto'>
          {content.text.heading && (
            <h2 className='text-2xl font-bold '>{content.text.heading}</h2>
          )}
          {content.text.body &&
            (typeof content.text.body === 'string' ? (
              <p className='text-xl text-slate-800 dark:text-slate-300'>
                {content.text.body}
              </p>
            ) : (
              <ul className='list-disc text-lg ml-5 text-slate-800 dark:text-slate-300'>
                {content.text.body.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            ))}
          {content.text.code && (
            <div className='h-[80vh] max-h-[300px] rounded-2xl'>
              <iframe
                width='100%'
                height='100%'
                className='rounded-2xl'
                src={content.text.code}
                allowFullScreen={true}
                frameBorder={0}
              ></iframe>
            </div>
          )}
        </article>
      )}
      {Array.isArray(content.image) && (
        <div className='grid grid-cols-2 gap-4'>
          {content.image.map((image, index) => (
            <div
              className=' col-span-2 overflow-hidden  h-[80vh] max-h-[300px] rounded-2xl  lg:col-span-1 bg-slate-200 dark:bg-slate-800'
              style={{
                background: image?.background || '',
              }}
              key={index}
            >
              <PortfolioPieceCard
                image={image.url}
                showTitle={false}
                showStack={false}
              />
            </div>
          ))}
        </div>
      )}
      {content.image && content.image.url && (
        <div
          className=' overflow-hidden col-span-6 h-[80vh] max-h-[500px] rounded-2xl  lg:col-span-6 bg-slate-200 dark:bg-slate-800'
          style={{
            background: content.image.background || '',
          }}
        >
          <PortfolioPieceCard
            image={content.image.url}
            showTitle={false}
            showStack={false}
          />
        </div>
      )}
    </section>
  );
};

export default PortfolioContent;
