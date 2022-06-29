import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = { code: string; language: string };

const convertLanguageNameToAlias = (language: string): string => {
  const lowerCaseLanguage = language?.toLowerCase();
  switch (lowerCaseLanguage) {
    case 'typescript':
      return 'ts';
    case 'javascript':
      return 'js';
    case 'html':
      return 'html';
    case 'css':
      return 'css';
    case 'csharp':
      return 'c#';
    default:
      return language;
  }
};
const CodeParser = ({ code, language }: Props) => {
  console.log(language, '🔥');
  return (
    <div className='relative max-w-full w-full h-full max-h-full '>
      <span
        className='z-10 max-w-[100px] px-2 pt-5 pb-4 rounded-b-lg bg-tertiary-400  text-white   absolute top-0 left-1 shadow-xl'
        style={{
          textShadow: '0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575',
        }}
        title={language}
        aria-hidden={true}
      >
        {convertLanguageNameToAlias(language).toUpperCase()}
      </span>
      <SyntaxHighlighter
        language={language}
        style={materialDark}
        wrapLines
        wrapLongLines
        showLineNumbers
        className='h-full max-h-full rounded-lg  !mt-0'
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeParser;
