import Link from 'next/link';
import React, { useEffect } from 'react';
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io5';
import Divider from '../../../components/divider/Divider';
import Typography from '../../../components/typography/Typography';
import { footerLinks } from '../routes';

const Footer = () => {
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

  return (
    <footer className='grid gap-6 md:gap-14 my-12 container-1'>
      <Divider type='dashed' className='opacity-100 !border-slate-500' />
      <nav className='grid md:grid-cols-3 items-center gap-8 text-slate-500 text-center md:text-start'>
        {footerLinks.map((heading, i) => (
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
                <Link href={link.href} scroll={false}>
                  <a>
                    <Typography
                      size='body3'
                      as='span'
                      className='py-[2px] link text-slate-400'
                    >
                      {link.title}
                    </Typography>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </nav>
      <div className='text-slate-400 container-1 rounded-xl bg-slate-100 py-4 px-4 flex justify-between items-center gap-5 flex-wrap'>
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
          </a>
          , {'  '}
          {'  '}
          <a
            href='https://www.sanity.io/'
            target='_blank'
            rel='noopener noreferrer'
            className='link text-slate-400 border-slate-400'
          >
            Sanity
          </a>{' '}
          {'  '}& {'  '}
          <a
            href='https://tailwindcss.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='link text-slate-400 border-slate-400'
          >
            Tailwind
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
              <IoLogoGithub
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
              <IoLogoWhatsapp
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
