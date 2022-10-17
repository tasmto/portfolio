import { IoTerminalOutline } from 'react-icons/io5'
import { defineType } from 'sanity'
//
export default defineType({
  title: 'Code Embed',
  name: 'codeEmbed',
  type: 'object',
  icon: IoTerminalOutline,
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
      name: 'code',
      title: 'Code',
      type: 'code',
      options: {
        theme: 'monokai',
        languageAlternatives: [
          { title: 'Javascript', value: 'js' },
          { title: 'TypeScript', value: 'typescript' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
          { title: 'SASS', value: 'sass' },
          { title: 'C#', value: 'csharp' },
          { title: 'JSX', value: 'jsx' },
          { title: 'JSON', value: 'json' },
        ],
      },
    },
    {
      title: 'Description',
      name: 'description',
      description: 'A short description of the code snippet.',
      type: 'strippedRCE',
      // rows: 3,
      validation: (Rule) => Rule.max(2000),
    },
    {
      name: 'link',
      title: 'URL (optional)',
      type: 'url',
      description: 'A link that will be a button on the frontend.',
    },
    {
      name: 'linkText',
      title: 'Link Text (optional)',
      type: 'string',
      description: 'The text on the button (defaults to "View more").',
    },
  ],
  preview: {
    select: {
      description: 'description',
      link: 'link',
      linkText: 'linkText',
      code: 'code',
      heading: 'heading',
    },
  },
})
