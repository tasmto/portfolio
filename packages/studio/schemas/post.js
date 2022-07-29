import { IoDocumentOutline } from 'react-icons/io5';

export default {
  name: 'post',
  title: 'Post',
  icon: IoDocumentOutline,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'extract',
      title: 'A summary of the post.',
      type: 'string',
      description: 'In a few sentences, describe the post.',
      validation: (Rule) => Rule.required().max(200),
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
      name: 'relatedPosts',
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
      title: 'title',
      media: 'coverImage',
    },
  },
};
