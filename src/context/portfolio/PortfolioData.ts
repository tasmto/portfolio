interface image {
  url: string;
  background?: string;
}

interface content {
  heading?: string;
  body?: string | Array<string>;
}
interface portfolioPiece {
  header: image;
  id: string;
  title: string;
  time: string;
  stack?: Array<string>;
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
};
