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
      background: 'linear-gradient(180deg, #F37A42 0%, #E17478 100%)',
    },
    id: 'futureagent',
    title: 'Future Agent Design and Development',
    time: '1 year',
    stack: ['React', 'React Native', 'Firebase', 'Node.js', 'Express.js'],

    extract:
      'A MERN + Firebase stack powered re-imagining of how houses and properties get sold in South Africa. ',
    repository: 'www.',
    content: [
      {
        image: { url: '/portfolio/future-agent/future-agent--section-1.png' },
        text: {
          heading:
            'Part of an end to end solutions that gives home sellers access to the same marketing and legal tools real estates agents use to legally sell property.',
          body: 'So what if home owners could easily list and sell their own homes without the apparent red tape and commission involved with traditional real estate agencies and agents?',
        },
      },
      {
        image: { url: '/portfolio/future-agent/future-agent--section-2.png' },
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
            url: '/portfolio/future-agent/future-agent--section-3.png',
            background: 'linear-gradient(180deg, #F37A42 0%, #E17478 100%)',
          },
          { url: '/portfolio/future-agent/future-agent--section-4.png' },
        ],
        text: {
          heading: 'Our design and development process',
          body: 'Trying to reinvent the entire real estate process with all the red tape and legalities was always going to be tricky, so the first thing we had to do was immersing  ourselves in the traditional process and understanding everything that we could and would be streamlining and handing over to the seller in cutting out the agent middle man. ',
        },
      },
    ],
  },
  inteligets: {
    header: {
      url: '/portfolio/inteligets/cover.png',
      background:
        'linear-gradient(90deg, hsla(205, 46%, 30%, 1) 0%, hsla(260, 29%, 36%, 1) 100%)',
    },
    id: 'inteligets',
    title: 'Inteligets e-commerce design and development',
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
  mortgagely: {
    header: {
      url: '/portfolio/mortgagely/mortgagely-cover.png',
      background:
        'linear-gradient(45deg, hsla(40, 63%, 85%, 1) 0%, hsla(22, 94%, 79%, 1) 100%)',
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
        'linear-gradient(120deg, hsla(10, 82%, 65%, 1) 0%, hsla(290, 79%, 13%, 1) 100%)',
    },
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
};
