import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  IoDownloadOutline,
  IoChatbubble,
  IoChatbubbleOutline,
  IoNewspaper,
  IoNewspaperOutline,
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
      href: '/',
      text: 'Portfolio',
    },
    {
      href: '/',
      text: 'Career Highlights',
    },
    {
      href: '/about',
      text: 'About me',
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
      href: '/cv',
      text: 'My CV',
      icon: <IoNewspaperOutline className='w-full h-full' />,
      iconActive: IoNewspaper,
    },
    {
      href: '/',
      text: 'Connect',
      icon: <IoChatbubbleOutline className='w-full h-full' />,
      iconActive: IoChatbubble,
    },
  ];

  return (
    <header
      className={`fixed bottom-0 md:bottom-[initial] md:top-0 md:py-4 md:border-b bg-white/95 backdrop-blur md:border-slate-300 w-screen z-[1000] max-w-full`}
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
        <h1 className='flex-none font-bold text-primary-800 tracking-tighter text-3xl lg:text-4xl'>
          <Link href='/'>
            <a>
              tash<span className='text-primary-500'>i</span>nga
            </a>
          </Link>
        </h1>
        <ul className='flex-initial flex gap-6 lg:gap-8 text-lg tracking-tight '>
          {primaryLinks.map((link, i) => (
            <li key={i}>
              <Link href={link.href}>
                <a
                  className={` text-slate-500 hover:text-primary-700 transition-colors ${
                    router.pathname === link.href &&
                    'text-primary-500 font-medium'
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
            <Link href='/'>
              <a>
                <Button size='small' type='secondary' icon={IoDownloadOutline}>
                  My CV
                </Button>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a>
                <Button type='primary' size='small'>
                  Button 2
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
        <ul className='flex-initial flex gap-8  sm:gap-10 lg:gap-8 text-lg tracking-tight w-full justify-center overflow-auto '>
          {mobileLinks.map((link, i) => (
            <li key={i}>
              <Link href={link.href}>
                <a
                  className={`flex flex-col items-center gap-1 text-lg hover:text-primary-700 hover:bg-primary-100/20 before:border-t-2 before:absolute before:w-full before:h-2 before:border-slate-700 before:max-w-[35px] before:origin-[100% 50%] before:top-[-0.05rem] before:z-10 before:scale-0 before:transition-transform  hover:before:scale-75 before:duration-500 ${
                    router.pathname === link.href &&
                    'text-secondary-800 hover:text-secondary-900 before:border-secondary-500 before:scale-100 hover:before:scale-75 font-medium '
                  }`}
                >
                  <span className='h-6 w-5'>{link.icon}</span>
                  <span>{link.text}</span>
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
