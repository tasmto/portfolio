import { IoSend } from 'react-icons/io5';

export default {
  title: 'Block Button',
  name: 'button',
  type: 'object',
  icon: IoSend,
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
      title: 'Link *',
      name: 'link',
      type: 'url',
      validation: (Rule) => Rule.isRequired(),
    },
    {
      title: 'Link Text *',
      name: 'linkText',
      type: 'string',
      validation: (Rule) => Rule.isRequired(),
    },
    {
      name: 'externalLink',
      title: 'External Link',
      type: 'boolean',
      initialValue: false,
    },
  ],
};
