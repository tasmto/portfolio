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
      name: 'bannerImage',
      title: 'Lifestyle or cover image',
      description: 'Preferred dimensions are ast least 1080px by 1080px.',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'productImage',
      title: 'Main Product image',
      description: 'Preferred dimensions are ast least 1080px by 1080px.',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'logo',
      title: 'Company Logo',
      description: 'Upload SVG images if possible.',
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
      title: 'When did you start working on it? *',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'completedAt',
      title: 'When did you complete the project?',
      type: 'datetime',
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
      title: 'What was the brief? *',
      description:
        'What was the problem you were trying to solve for your client or with this idea?',
      type: 'strippedRCE',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'extract',
      title: 'A brief summary of the solution. *',
      type: 'strippedRCE',
      description:
        'In a few sentences, describe the solution you came up with for your client or with this idea.',
      validation: (Rule) => Rule.required().max(350),
    },
    {
      name: 'body',
      title: 'Body',
      style: 'custom',
      type: 'array',
      of: [
        { type: 'codeEmbed' },
        { type: 'iframeEmbed' },
        { type: 'textImage' },
        { type: 'plainText' },
        { type: 'customList' },
        { type: 'button' },
        { type: 'imageEmbed' },
      ],
    },
    {
      name: 'liveUrl',
      title: 'Live project URL',
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
      title: 'Related projects.',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'portfolio' } }],
    },
    {
      name: 'relatedArticles',
      title: 'Related blog posts (series only).',
      type: 'reference',
      to: [{ type: 'postSeries' }],
    },
    {
      name: 'customSEO',
      title: 'Customize the SEO tags for this page?',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Edit SEO',
      name: 'seo',
      type: 'customSEO',
      description: 'Customize the SEO tags for this page.',
      hidden: ({ document }) => !document.customSEO,
    },
  ],

  preview: {
    select: {
      title: 'projectName',
      subtitle: 'projectSubtitle',
      media: 'productImage',
      capstone: 'featured',
    },
    prepare({ title, subtitle, media, capstone }) {
      const titleText = capstone ? `${title} 🌟` : title;
      return {
        title: titleText,
        subtitle,
        media,
      };
    },
  },
};
