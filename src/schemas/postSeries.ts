import { IoDocumentsOutline } from 'react-icons/io5'
import { defineType } from 'sanity'

export default defineType({
  name: 'postSeries',
  title: 'Post Series',
  icon: IoDocumentsOutline,
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Post series heading.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subheading',
      title: 'Sub-Heading',
      type: 'string',
      description: 'Section sub-heading (optional).',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'heading',
        maxLength: 96,
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'cover',
      title: 'Cover image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'posts',
      title: 'Posts in the series',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'post' } }],
    },
  ],
})
