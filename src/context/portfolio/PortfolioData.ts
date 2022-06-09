interface image {
  url: string;
  background?: string;
}

interface content {
  heading?: string;
  body?: string | Array<string>;
  code?: string;
}
interface portfolioPiece {
  header: image;
  id: string;
  title: string;
  time: string;
  stack?: Array<string>;
  demo?: string;
  repo?: string;
  launched?: string;
  extract: string;
  repository?: string;
  production?: Array<{ label: string; link: string }>;
  content?: Array<{ image?: image | Array<image>; text?: content }>;
}
interface portfolio {
  [name: string]: portfolioPiece;
}

export const portfolio: portfolio = {
  futureagent: {
    header: {
      url: '/portfolio/future-agent/main-banner.png',
      background:
        'linear-gradient(180deg, hsla(23, 92%, 71%, 1) 0%, hsla(345, 43%, 54%, 1) 100%)',
    },
    id: 'futureagent',
    title: 'Future Agent app design and development',
    time: '1 year',
    stack: ['React', 'React Native', 'Firebase', 'Node.js', 'Express.js'],

    extract:
      'A MERN + React Native + Firebase stack powered re-imagining of how houses and properties get sold in South Africa. ',
    repository: 'www.',
    content: [
      {
        image: { url: '/portfolio/future-agent/section-4.png' },
        text: {
          heading:
            'Part of an end to end solutions that gives home sellers access to the same marketing and legal tools real estates agents use to legally sell property.',
          body: 'So what if home owners could easily list and sell their own homes without the apparent red tape and commission involved with traditional real estate agencies and agents?',
        },
      },
      {
        text: {
          body: 'Our solution is an an that lets buyers and users and connect with the oversight from the Future Agent real estate agents (through three separate platforms).',
        },

        image: { url: '/portfolio/future-agent/section-1.png' },
      },
      {
        image: [
          { url: '/portfolio/future-agent/section-2.png' },
          { url: '/portfolio/future-agent/section-3.png' },
        ],
      },
      {
        image: { url: '/portfolio/future-agent/section-7.png' },
        text: {
          heading:
            'In most property transactions the value of having a real estate is in their',
          body: [
            'Experience with the entire process.',
            'The access they have to popular marketing tools (i.e. property 24)',
            'Property valuation tools (typically heavily regulated by real estates boards and other such parties)',
            'How they manage and screen all potential buyers.',
          ],
        },
      },
      {
        image: [
          {
            url: '/portfolio/future-agent/section-5.png',
            background: 'linear-gradient(180deg, #F37A42 0%, #E17478 100%)',
          },
          { url: '/portfolio/future-agent/section-6.png' },
        ],
        text: {
          heading: 'Our design and development process',
          body: 'Trying to reinvent the entire real estate process with all the red tape and legalities was always going to be tricky, so the first thing we had to do was immersing  ourselves in the traditional process and understanding everything that we could and would be streamlining and handing over to the seller in cutting out the agent middle man. ',
        },
      },
      {
        image: {
          url: '/portfolio/future-agent/section-8.png',
        },
      },
      {
        text: { body: 'Some of the product architecture.' },
        image: {
          url: '/portfolio/future-agent/section-10.svg',
        },
      },
      {
        image: {
          url: '/portfolio/future-agent/section-9.png',
        },
      },

      {
        text: {
          body: 'The project is currently under development, but if you want a demo or a deeper dive into the product itself, feel free to get in touch with me below. ',
        },
      },
    ],
  },
  inteligets: {
    header: {
      url: '/portfolio/inteligets/cover.png',
      background: 'linear-gradient(to right, #114357, #f29492)',
    },
    id: 'inteligets',
    title: 'Inteligets fullstack e-commerce design and development',
    time: '3 weeks',
    launched: '2022',
    stack: [
      'React',
      'Redux',
      'MongoDB',
      'Mongoose',
      'TypeScript',
      'Node.js',
      'Express.js',
    ],
    demo: 'https://inteligets.herokuapp.com/',
    repo: 'https://github.com/tasmto/inteligets',
    extract:
      'A fully functional fullstack e-commerce store that supports multiple user roles, CRUD of user generated orders and reviews and management of products.',
    repository: 'https://github.com/tasmto/inteligets',
    content: [
      {
        image: { url: '/portfolio/inteligets/section-1.png' },
        text: {
          heading:
            'Allows anyone to sign up and browse through a catalogue of products set by admin users.',
        },
      },
      {
        image: { url: '/portfolio/inteligets/section-2.png' },
        text: {
          heading:
            'Supports customer roles and administrator roles. This platform allows admins to:',
          body: [
            "Update and/or delete other user's profiles.",
            'Update, create and delete products and user orders.',
            'Property valuation tools (typically heavily regulated by real estates boards and other such parties).',
            'Elevate or de-elevate other users to admins.',
          ],
        },
      },

      {
        text: {
          heading:
            'Uses Mongoose on the server to enforce strict schema structure on the backend:',
          body: 'Below is the product and review schema.',
          code: 'https://jsfiddle.net/tasmto/5rnaypg1/1/embedded/js/dark/',
        },
      },
      {
        text: {
          heading:
            'Uses restful API architecture standards for the Mongo DB api.',
          body: 'Below is a snippet of the user api routes controllers.',
          code: 'https://jsfiddle.net/tasmto/g8nypv5e/1/embedded/js/dark/',
        },
      },
      {
        image: [
          {
            url: '/portfolio/inteligets/section-4.png',
          },
          { url: '/portfolio/inteligets/section-3.png' },
        ],
      },
    ],
  },
  blogr: {
    header: {
      url: '/portfolio/blogr/cover.png',
      background:
        'linear-gradient(90deg, hsla(35, 79%, 68%, 1) 0%, hsla(286, 44%, 49%, 1) 100%)',
    },
    id: 'blogr',
    title: 'Blogr full stack blogging platform',
    time: '3 weeks',

    stack: [
      'React',
      'Redux',
      'MongoDB',
      'Mongoose',
      'TypeScript',
      'Node.js',
      'Express.js',
    ],

    extract:
      'A fully functional fullstack blog that supports 5 user role levels, CRUD of user generated posts and comments and community moderated content and users.',

    content: [
      {
        image: { url: '/portfolio/blogr/section-01.png' },
      },
      {
        image: { url: '/portfolio/blogr/section-09.png' },
        text: {
          body: 'Blogr supports rich text content (powered by tinymce), code snippets, user uploaded images and iframe embeds as part of any post. Iframe content is restricted to users with higher permissions (credit).',
        },
      },
      {
        text: { body: 'The user signin, user signup and profile screens.' },
        image: [
          {
            url: '/portfolio/blogr/section-04.png',
          },
          { url: '/portfolio/blogr/section-05.png' },
          { url: '/portfolio/blogr/section-07.png' },
          { url: '/portfolio/blogr/section-06.png' },
          { url: '/portfolio/blogr/section-12.png' },
          { url: '/portfolio/blogr/section-13.png' },
        ],
      },

      {
        image: { url: '/portfolio/blogr/section-02.png' },
        text: {
          body: 'Full credit for the homepage design goes to @jibinsjopseph on Figma community (the rest of the design is all mine).',
        },
      },

      {
        image: { url: '/portfolio/blogr/section-10.png' },
      },

      {
        image: [
          { url: '/portfolio/blogr/section-08.png' },

          { url: '/portfolio/blogr/section-11.png' },
        ],
      },

      {
        text: {
          heading:
            'Uses Mongoose on the server to enforce strict schema structure on the backend:',
          body: 'Below is a part of the post schema for the database.',
          code: 'https://jsfiddle.net/tasmto/vub9oscz/embedded/js/dark/',
        },
      },
    ],
  },
  mortgagely: {
    header: {
      url: '/portfolio/mortgagely/mortgagely-cover.png',
      background:
        'linear-gradient(45deg, hsla(228, 17%, 53%, 1) 0%, hsla(229, 28%, 88%, 1) 100%)',
    },
    id: 'mortgagely',
    title: 'Mortgagely web-app design and development',
    time: '3 weeks',
    launched: '2022',
    stack: ['React', 'Redux', 'TypeScript', 'Framer-Motion'],
    demo: 'https://mortgagely.netlify.app/',
    repo: 'https://github.com/tasmto/mortgagely',
    extract:
      'A mortgage/ bond, deposit savings and occupational rent calculator built with react. I highly recommend you view the actual live site for this one ;)',
    repository: 'https://github.com/tasmto/mortgagely',
    content: [
      {
        image: { url: '/portfolio/mortgagely/section-1.gif' },
        text: {
          heading: 'The actual calculator component:',
          body: [
            'Calculates bond/ mortgage payments. ',
            'Calculates how much in rent can be redeemed as actual profit vs how much goes to the property itself (transfer costs etc.)',
            'Helps users calculate their savings gains over inputted periods over time.',
          ],
        },
      },

      {
        text: {
          heading: 'Interactive SVG animations through framer-motion.',
          body: 'I highly recommend going to the live site to see them properly.',
        },
        image: [
          {
            url: '/portfolio/mortgagely/section-2.png',
          },
          { url: '/portfolio/mortgagely/section-3.png' },
        ],
      },
      {
        text: {
          heading:
            'The TypeScript code for the formula to calculate a bond/ mortgage:',
          code: 'https://jsfiddle.net/tasmto/p63h2z8a/1/embedded/js/dark/',
        },
      },
    ],
  },
  flavorfestival: {
    header: {
      url: '/portfolio/flavor-festival/flavor-festival-cover.png',
      background:
        ' linear-gradient(45deg, hsla(205, 34%, 40%, 1) 0%, hsla(347, 52%, 36%, 1) 100%)',
    },
    repo: 'https://github.com/tasmto/flavor-festival',
    repository: 'https://github.com/tasmto/flavor-festival',
    id: 'flavorfestival',
    title: 'Flavor festival recipe app design and development',
    time: '1 week',
    launched: '2022',
    stack: ['React', 'Redux', 'Material UI', 'TypeScript'],
    extract:
      'A recipe app that focusses on letting users, create, collect recipes and shop based on their collections.',
    content: [
      {
        image: { url: '/portfolio/flavor-festival/section-1.png' },
        text: {
          heading: 'Features:',
          body: [
            'Upload custom recipes.',
            'Search through a catalogue of about 1 000 000 recipes.',
            'Bookmark recipes and collate ingredient shopping lists.',
          ],
        },
      },
    ],
  },
  drsetati: {
    header: {
      url: '/portfolio/dr-setati/dr-setati-cover.png',
      background:
        'linear-gradient(45deg, hsla(197, 14%, 57%, 1) 0%, hsla(192, 17%, 94%, 1) 100%)',
    },
    repo: 'https://github.com/tasmto/dr-setati',
    repository: 'https://github.com/tasmto/dr-setati',
    id: 'drsetati',
    title: 'Dr Setati php website design and development',
    time: '1 week',
    launched: '2019',
    stack: ['PHP', 'HTML', 'CSS', 'JavaScript'],
    extract:
      "A PHP and JavaScript website, redesign I made for a South African Doctor's private practice.",
    content: [
      {
        text: {
          heading: 'The old  site vs my redesign',
        },
        image: [
          { url: '/portfolio/dr-setati/section-6.png' },
          { url: '/portfolio/dr-setati/section-5.png' },
        ],
      },

      {
        image: [
          {
            url: '/portfolio/dr-setati/section-1.png',
          },
          { url: '/portfolio/dr-setati/section-2.png' },
          {
            url: '/portfolio/dr-setati/section-3.png',
          },
          { url: '/portfolio/dr-setati/section-4.png' },
        ],
      },
    ],
  },
};
