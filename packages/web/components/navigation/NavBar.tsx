import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  IoDownloadOutline,
  IoChatbubble,
  IoChatbubbleOutline,
  IoNewspaper,
  IoDocumentTextOutline,
  IoBrowsers,
  IoBrowsersOutline,
} from 'react-icons/io5';
import Button from '../button/Button';

type Props = {};

const NavBar = ({}: Props) => {
  const tailWindBreakPoint = 'md';
  const router = useRouter();

  const primaryLinks = [
    {
      href: '/portfolio',
      text: 'Portfolio',
    },
    {
      href: '/#career-highlights',
      text: 'Career Highlights',
    },
    {
      href: '/hi',
      text: 'Book Meeting',
    },
  ];

  const mobileLinks = [
    {
      href: '/portfolio',
      text: 'Projects',
      icon: <IoBrowsersOutline className='w-full h-full' />,
      iconActive: IoBrowsers,
    },
    {
      href: '/#career-highlights',
      text: 'My CV',
      icon: <IoDocumentTextOutline className='w-full h-full' />,
      iconActive: IoNewspaper,
    },
    {
      href: '/#contact',
      text: 'Connect',
      icon: <IoChatbubbleOutline className='w-full h-full' />,
      iconActive: IoChatbubble,
    },
  ];

  return (
    <header
      className={`fixed bottom-0 md:bottom-[initial] md:top-0 md:py-3 md:border-b bg-white/95 backdrop-blur md:border-slate-300 w-screen z-[1000] max-w-[100vw]`}
    >
      {/* Large Screen Nav (Accessible) */}
      <a
        href='#content'
        className='h-[0] w-[0] text-[0rem] absolute top-0 translate-y-full'
      >
        Skip to content
      </a>
      <nav
        className={`sr-only ${tailWindBreakPoint}:not-sr-only md:not-sr-only 
       flex justify-between items-center gap-8 container-1 ${tailWindBreakPoint}:px-6 md:px-6 lg:px-8 xl:px-0 z-50`}
      >
        <h1 className='flex-none font-bold text-primary-900 tracking-tighter text-3xl'>
          <Link href='/'>
            <a>
              tash<span className='text-tertiary-600'>i</span>nga
            </a>
          </Link>
        </h1>
        <ul className='flex-initial flex gap-6 lg:gap-8 tracking-tight '>
          {primaryLinks.map((link, i) => (
            <li key={i}>
              <Link href={link.href}>
                <a
                  className={` text-slate-800 font-medium hover:text-primary-500 transition-colors ${
                    router.pathname === link.href && 'text-primary-800 '
                  }`}
                >
                  {link.text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className='align-self-center justify-self-center flex-initial flex gap-3'>
          <li>
            <Button
              size='small'
              type='secondary'
              icon={IoDownloadOutline}
              href='/Tashinga-Mtoko-Fullstack-Developer-CV.pdf'
              download
            >
              My CV
            </Button>
          </li>
          <li>
            <Link href='/#contact'>
              <a>
                <Button type='primary' size='small'>
                  Contact
                </Button>
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Nav for Small screens; invisible for screen readers even on mobile  */}
      <nav
        aria-hidden={true}
        className='md:hidden not-sr-only fixed bottom-0 py-3 w-full bg-slate-50/90   backdrop-blur border-t border-slate-300 text-primary-800 '
      >
        <ul className='flex-initial flex text-lg tracking-tight w-full justify-center overflow-auto '>
          {mobileLinks.map((link, i, arr) => (
            <li key={i}>
              <Link href={link.href}>
                <a
                  className={`px-8 md:px-10 flex flex-col items-center gap-1 text-lg hover:text-primary-700 hover:bg-primary-100/20 before:border-t-2 before:absolute before:w-full before:h-2 before:border-slate-700 before:max-w-[35px] before:origin-[100% 50%] before:top-[-0.05rem] before:z-10 before:scale-0 before:transition-transform  hover:before:scale-75 before:duration-500 ${
                    router.pathname === link.href &&
                    'text-tertiary-800 hover:text-tertiary-900 before:border-tertiary-500 before:scale-100 hover:before:scale-75 font-medium '
                  } ${i !== arr.length - 1 && 'border-r border-slate-300'}`}
                >
                  <span className='h-8 w-8'>{link.icon}</span>
                  <span className='text-sm'>{link.text}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
