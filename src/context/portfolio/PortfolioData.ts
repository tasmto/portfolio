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
  content?: Array<{ image?: image; content?: content }>;
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
      'A MERN + Firebase stack powered re-imagining of how houses and properties get sold in South Africa. Part of an end to end solutions that gives home sellers access to the same marketing and legal tools real estates agents use to legally sell property.',
    repository: 'www.',
    content: [
      {
        image: { url: 'link' },
        content: {
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
        image: { url: 'link' },
        content: { heading: 'Marketing tools:', body: ['We designed '] },
      },
    ],
  },
};
