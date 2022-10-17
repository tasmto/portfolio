import { defineType } from 'sanity'

export default defineType({
  title: 'Custom SEO',
  name: 'customSEO',
  type: 'object',
  fields: [
    {
      title: 'SEO Title',
      name: 'seoTitle',
      type: 'string',
      description: 'The title to use for SEO purposes nd the tab title.',
    },
    {
      title: 'SEO Description',
      name: 'seoDescription',
      description: 'Short description of the page usefully for SEO.',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(250),
    },
    {
      title: 'Favicon',
      name: 'favicon',
      type: 'image',
      description: 'Upload an svg icon for the page (optional).',
      options: {
        accept: 'image/svg+xml',
      },
    },
  ],
})
