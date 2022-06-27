import React from 'react';

const IframeEmbedPreviewer = ({ value }) => {
  const { iframeLink, link, linkText, description, heading } = value;

  if (!iframeLink) return null;

  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {heading && <h3 className='heading m-0'>{heading}</h3>}
      <div className='iframe-container'>
        <iframe border='0' loading='lazy' src={iframeLink}></iframe>
      </div>
      <div className='row items-center justify-between'>
        {link && (
          <a href={link} target='_blank' className='button-secondary col-1-4 '>
            {linkText || 'Learn More'}
          </a>
        )}
        {description && (
          <p className={'annotation-text col-3-4'}>{description}</p>
        )}
      </div>
      <style jsx>{`
        .heading {
          font-size: 1.15rem;
          width: 100%;
          font-weight: bold;
          color: darkgray;
        }

        .button-secondary {
          color: #273773;
          font-size: 0.6rem;
          background-color: #cbd3ee;
          padding: 10px 15px;
          margin: 0;
          text-decoration: none;
          max-width: 250px;
          text-align: center;
          color: #273773;
          display: block;
        }
        .iframe-container {
          position: relative;
          overflow: hidden;
          padding-top: 56.25%;
        }
        .iframe-container iframe {
          position: absolute;
          top: 0;
          border: 0;
          height: 100%;
          width: 100%;
        }

        .code-embed {
          max-height: 200px;
          overflow: hidden;
          background-color: darkgray;
          padding: 5px;
          color: white;
          border-radius: 2px;
          border: 5px solid darkgray;
          font-size: 0.6rem;
        }
        .code-embed pre {
          font-size: 0.6rem;
        }

        .annotation-text {
          color: #0c1022;
          font-size: 0.6rem;
        }

        /* Grid system */
        .row {
          display: flex;
          gap: 1rem;
        }

        gap-2 {
          gap: 2rem;
        }

        gap-4 {
          gap: 4rem;
        }

        .col-1 {
          flex-basis: 100%;
        }
        .col-1-2 {
          flex-basis: 50%;
        }
        .col-1-3 {
          flex-basis: 33%;
        }
        .col-2-3 {
          flex-basis: 66%;
        }
        .col-1-4 {
          flex-basis: 25%;
        }
        .col-3-4 {
          flex-basis: 75%;
        }

        .justify-between {
          justify-content: space-between;
        }

        .justify-center {
          justify-content: center;
        }

        .items-center {
          align-items: center;
        }
        .items-start {
          align-items: start;
        }
        .items-end {
          align-items: end;
        }

        .w-full {
          width: 100%;
        }
        .h-full {
          height: 100%;
        }
        .m-0 {
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default IframeEmbedPreviewer;
