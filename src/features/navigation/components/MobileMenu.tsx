import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { mobileLinks } from '../routes';

type Props = {};

const MobileMenu = (props: Props) => {
  const router = useRouter();

  return (
    <nav
      aria-hidden={true}
      className='md:hidden block fixed bottom-0 py-3 w-full bg-slate-50/95 backdrop-blur border-t border-slate-300 text-primary-800 overflow-hidden  max-w-[100vw] z-[1000]'
    >
      <ul className='flex-initial flex text-lg tracking-tight w-full justify-center overflow-auto '>
        {mobileLinks.map((link, i, arr) => (
          <li key={i}>
            <Link href={link.href} scroll={false}>
              <a
                className={`px-8 md:px-10 flex flex-col items-center gap-1 text-lg hover:text-primary-700 hover:bg-primary-100/20 before:border-t-2 before:absolute before:w-full before:h-2 before:border-slate-700 before:max-w-[35px] before:origin-[100% 50%] before:top-[-0.05rem] before:z-10 before:scale-0 before:transition-transform  hover:before:scale-75 before:duration-500 ${
                  router.pathname === link.href &&
                  'text-tertiary-800 hover:text-tertiary-900 before:border-tertiary-500 before:scale-100 hover:before:scale-75 font-medium '
                } ${i !== arr.length - 1 && 'border-r border-slate-300'}`}
              >
                <span className='h-8 w-8'>
                  <link.icon className='w-full h-full' />
                </span>
                <span className='text-sm'>{link.text}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
