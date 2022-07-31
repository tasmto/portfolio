import {
  IoChatbubble,
  IoChatbubbleOutline,
  IoNewspaper,
  IoDocumentTextOutline,
  IoBrowsers,
  IoBrowsersOutline,
} from 'react-icons/io5';

export const mobileLinks = [
  {
    href: '/portfolio',
    text: 'Projects',
    icon: IoBrowsersOutline,
    iconActive: IoBrowsers,
  },
  {
    href: '/#career-highlights',
    text: 'My CV',
    icon: IoDocumentTextOutline,
    iconActive: IoNewspaper,
  },
  {
    href: '/contact',
    text: 'Connect',
    icon: IoChatbubbleOutline,
    iconActive: IoChatbubble,
  },
];

export const primaryLinks = [
  {
    href: '/portfolio',
    text: 'Portfolio',
  },

  {
    href: '/hi',
    text: 'Book Meeting',
  },
  {
    href: '/blog',
    text: 'Blog',
  },
];

export const allLinks = [
  {
    href: '/portfolio',
    text: 'Portfolio',
  },
  // {
  //   text: 'About me.',
  //   href: '/about',
  // },
  {
    href: '/hi',
    text: 'Book a Meeting',
  },
  {
    href: '/blog',
    text: 'Blog',
  },

  {
    text: 'Contact me',
    href: '/contact',
  },
];

export const footerLinks = [
  {
    title: 'About me',
    childLinks: [
      // {
      //   title: 'Who am I?',
      //   href: '/about',
      // },
      {
        title: 'Career history',
        href: '/#career-highlights',
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
