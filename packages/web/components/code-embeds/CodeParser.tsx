import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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
  return (
    <div className='relative max-w-full w-full h-full max-h-full '>
      <span
        className='z-10 max-w-[100px] px-2 pt-5 pb-4 rounded-b-lg bg-slate-400  text-white   absolute top-0 left-1 shadow-xl shadow-red-50'
        title={language}
        aria-hidden={true}
      >
        {convertLanguageNameToAlias(language).toUpperCase()}
      </span>
      <SyntaxHighlighter
        language={language}
        style={materialLight}
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
