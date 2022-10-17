import { IoListOutline } from 'react-icons/io5'
import { defineType } from 'sanity'

export default defineType({
  title: 'Custom List',
  name: 'customList',
  type: 'object',
  icon: IoListOutline,
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'List heading (optional).',
    },
    {
      name: 'subheading',
      title: 'Sub-Heading',
      type: 'string',
      description: 'List sub-heading (optional).',
    },
    {
      title: 'List Description',
      name: 'description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'numbered',
      title: 'Numbered List?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'listItems',
      title: 'List Items',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
})
