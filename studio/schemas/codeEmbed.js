import { IoCodeSlash } from 'react-icons/io5';
import CodeEmbedPreviewer from '../components/CodeEmbedPreviewer';

export default {
  title: 'Code Embed',
  name: 'codeEmbed',
  type: 'object',
  icon: IoCodeSlash,
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Section heading (optional).',
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
      title: 'Annotation',
      name: 'annotation',
      description: 'A short description of the code snippet.',
      type: 'text',
      rows: 3,
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
      description: 'annotation',
      link: 'link',
      linkText: 'linkText',
      code: 'code',
      heading: 'heading',
    },
    component: CodeEmbedPreviewer,
  },
};
