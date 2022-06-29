import { TbRainbow, IoImageOutline } from 'react-icons/tb';
export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  icon: TbRainbow,
  fields: [
    {
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
      description: 'The name of the company (preferably).',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'projectSubtitle',
      title: 'Project Subtitle',
      type: 'string',
      description:
        'The aspects of the project completed. i.e. "Website, API, etc."',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'projectName',
        maxLength: 96,
      },
    },
    {
      name: 'coverImage',
      title: 'Cover image',
      description: 'Preferred dimensions are ast least 1080px by 1080px.',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'walkthrough',
      title: 'Video Showcase',
      type: 'url',
      description: 'A video walk through of the project.',
    },

    {
      name: 'startedAt',
      title: 'When did you start working on it?',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'completedAt',
      title: 'When did you complete the project?',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      hidden: ({ document }) => document.ongoing,
    },
    {
      name: 'ongoing',
      title: 'Are you still busy working on it?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'technologies',
      title: 'Technologies used.',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'technologies' } }],
    },
    {
      name: 'brief',
      title: 'What was the brief?',
      description:
        'What was the problem you were trying to solve for your client or with this idea?',
      type: 'strippedRCE',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'extractTitle',
      title: 'The title of the extract',
      type: 'string',
      description:
        'If you want to add a title to the extract, you can do so here. If not it wont be shown.',
      validation: (Rule) => Rule.required().max(150),
    },
    {
      name: 'extract',
      title: 'A brief summary of the solution.',
      type: 'strippedRCE',
      description:
        'In a few sentences, describe the solution you came up with for your client or with this idea.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      // type: 'blockContent',
      style: 'custom',
      type: 'array',
      of: [
        { type: 'codeEmbed' },
        { type: 'iframeEmbed' },
        { type: 'textImage' },
        { type: 'plainText' },
        { type: 'customList' },
        { type: 'button' },
        {
          type: 'image',
          icon: IoImageOutline,
          options: { hotspot: true },
        },
      ],
    },
    {
      name: 'liveUrl',
      title: 'Live Project URL',
      type: 'url',
      description: 'A link to the live product produced',
    },
    {
      name: 'repoUrl',
      title: 'Project to a public repository',
      type: 'url',
      description: 'A link to the project repository (if it exists)',
    },
    {
      title: 'Is this a capstone project?',
      description: 'Add this as a featured piece.',
      name: 'featured',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'relatedProjects',
      title: 'Related Projects.',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'portfolio' } }],
    },
    {
      name: 'relatedArticles',
      title: 'Related blog posts.',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'post' } }],
    },
  ],

  preview: {
    select: {
      title: 'projectName',
      subtitle: 'projectSubtitle',
      media: 'coverImage',
    },
  },
};
