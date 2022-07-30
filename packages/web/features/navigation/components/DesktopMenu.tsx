import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoDownloadOutline } from 'react-icons/io5';
import Button from '../../../components/button/Button';
import { primaryLinks } from '../routes';

type Props = {};

const DesktopMenu = (props: Props) => {
  const router = useRouter();

  const { scrollYProgress } = useScroll();
  const translateMenuUpAnim = useTransform(
    scrollYProgress,
    [0, 0.02],
    [0, -200]
  );
  const translateMenuDownAnim = useTransform(
    scrollYProgress,
    [0, 0.02],
    [800, 0]
  );

  return (
    <div className='sr-only md:not-sr-only '>
      <motion.nav
        style={{
          y: translateMenuUpAnim,
        }}
        className='md:py-3 md:mb-1
       flex justify-between items-center gap-8 bg-white/95  !container-1 z-50 md:border-b backdrop-blur md:border-slate-300 overflow-hidden max-w-screen'
      >
        <h1 className='flex-none font-bold text-primary-900 tracking-tighter text-3xl'>
          <Link href='/'>
            <a>
              tash<span className='text-primary-400'>i</span>nga
            </a>
          </Link>
        </h1>
        <ul className='flex-initial flex gap-6  tracking-tight '>
          {primaryLinks.map((link, i) => (
            <li key={i}>
              <Link href={link.href}>
                <a
                  className={` text-slate-600 font-medium hover:text-primary-500 transition-colors ${
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
            <Link href='/contact'>
              <a>
                <Button type='primary' size='small'>
                  Contact
                </Button>
              </a>
            </Link>
          </li>
        </ul>
      </motion.nav>
    </div>
  );
};

export default DesktopMenu;
