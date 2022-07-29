import Link from 'next/link';
import React, { useEffect } from 'react';
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io5';
import { FaGithubSquare, FaWhatsappSquare } from 'react-icons/fa';
import Divider from '../divider/Divider';
import Typography from '../typography/Typography';
import FooterSecondaryContactCard from './FooterSecondaryContactCard';

type Props = {};

const Footer = (props: Props) => {
  const [currentYear, setCurrentYear] = React.useState(2111);

  useEffect(() => {
    const conFirmCurrentYear = async () => {
      try {
        const res = await fetch('http://worldclockapi.com/api/json/utc/now');
        const data = await res.json();
        const year = data?.currentDateTime?.substring(0, 4);
        if (year && Number(year) && Number(year) !== currentYear) {
          setCurrentYear(Number(year));
        }
      } catch (error) {}
    };
    conFirmCurrentYear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const links = [
    {
      title: 'About me',
      childLinks: [
        {
          title: 'Who am I?',
          href: '/about',
        },
        {
          title: 'Career history',
          href: '/career-highlights',
        },
        {
          title: 'Download my CV',
          href: '/Tashinga-Mtoko-Fullstack-Developer-CV.pdf',
        },
      ],
    },
    {
      title: 'My works',
      childLinks: [
        {
          title: 'My portfolio',
          href: '/portfolio',
        },
        {
          title: 'My blogs',
          href: '/blog',
        },
      ],
    },
    {
      title: 'Get in touch',
      childLinks: [
        {
          title: 'Contact me',
          href: '/contact',
        },
        {
          title: 'Book a meeting',
          href: '/hi',
        },
      ],
    },
  ];

  return (
    <footer className='grid gap-6 md:gap-14 my-12 container-1'>
      <Divider type='dashed' className='opacity-100 border-slate-900' />
      <nav className='grid md:grid-cols-3 gap-8 text-slate-500 text-center md:text-start'>
        {links.map((heading, i) => (
          <ul
            key={i}
            className='grid gap-2 w-full justify-stretch items-start content-start'
          >
            <li>
              <Typography
                size='body2'
                as='span'
                className='text-slate-600 !font-bold'
              >
                {heading.title}
              </Typography>
            </li>
            {heading.childLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.href}>
                  <Typography
                    size='body3'
                    as='a'
                    className='py-[2px] link text-slate-400'
                  >
                    {link.title}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </nav>
      <div className='text-slate-400 container-1 rounded-xl bg-slate-100 py-4 px-2 flex justify-between gap-5 flex-wrap'>
        <Typography as='p' size='body3'>
          &copy; Tashinga Mtoko {currentYear}. Built with{'  '}
          {'  '}
          <a
            href='https://nextjs.org/'
            target='_blank'
            rel='noopener noreferrer'
            className='link text-slate-400 border-slate-400'
          >
            Next.js
          </a>{' '}
          {'  '}
          and {'  '}
          <a
            href='https://www.sanity.io/'
            target='_blank'
            rel='noopener noreferrer'
            className='link text-slate-400 border-slate-400'
          >
            Sanity
          </a>
          .
        </Typography>

        <ul className='flex gap-2'>
          <li>
            <a
              href='https://www.linkedin.com/in/tasmto/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IoLogoLinkedin
                className='h-8 w-8 hover:text-slate-500'
                title='Linkedin'
              />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/tasmto'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithubSquare
                className='h-8 w-8 hover:text-slate-500'
                title='GitHub'
              />
            </a>
          </li>
          <li>
            <a
              href='https://wa.link/rab693'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaWhatsappSquare
                className='h-8 w-8 hover:text-slate-500'
                title='WhatsApp'
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
