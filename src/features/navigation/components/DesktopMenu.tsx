import React from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoDownloadOutline } from 'react-icons/io5'
import Button from '../../../components/button/Button'
import { primaryLinks } from '../routes'
import Logo from '../assets/ts-logo.svg'

type Props = {}

const DesktopMenu = (props: Props) => {
  const router = useRouter()

  const { scrollYProgress } = useScroll()
  const translateMenuUpAnim = useTransform(
    scrollYProgress,
    [0, 0.005],
    [0, -200]
  )

  return (
    <div className='sr-only md:not-sr-only '>
      <motion.nav
        style={{
          y: translateMenuUpAnim,
        }}
        className='md:py-3 md:mb-1 sticky
       flex justify-between items-center gap-8 bg-white/95  !container-1 z-[10000] md:border-b backdrop-blur md:border-slate-300 overflow-hidden max-w-screen'
      >
        <h1 className='flex-none font-bold text-slate-800 tracking-tighter text-2xl'>
          <Link href='/' scroll={false}>
            <a className='flex items-center gap-3'>
              <Logo className='ml-2 w-10 h-10 opacity-90 invert' />
              <span>tashinga</span>
            </a>
          </Link>
        </h1>
        <ul className='flex-initial flex gap-6  tracking-tight '>
          {primaryLinks.map((link, i) => (
            <li key={i}>
              <Link href={link.href} scroll={false}>
                <a
                  className={` text-slate-600 text-lg font-medium hover:text-primary-500 transition-colors ${
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
              type='secondary'
              icon={IoDownloadOutline}
              href='/Tashinga-Mtoko-Fullstack-Developer-CV.pdf'
              download
            >
              My CV
            </Button>
          </li>
          <li>
            <Link scroll={false} href='/contact'>
              <a>
                <Button type='primary'>Contact</Button>
              </a>
            </Link>
          </li>
        </ul>
      </motion.nav>
    </div>
  )
}

export default DesktopMenu
