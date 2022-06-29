import { IoCopyOutline, IoImageOutline } from 'react-icons/io5';
export default {
  name: 'page',
  title: 'Pages',
  type: 'document',
  icon: IoCopyOutline,
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
};
