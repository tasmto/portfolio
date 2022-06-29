import { IoLaptopOutline } from 'react-icons/io5';
import IframeEmbedPreviewer from '../../components/IframeEmbedPreviewer';

export default {
  title: 'Iframe Embed',
  name: 'iframeEmbed',
  type: 'object',
  icon: IoLaptopOutline,
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Section heading (optional).',
    },
    {
      name: 'iframeLink',
      title: 'iframe Link',
      type: 'url',
      description: 'A link that will be i-framed.',
    },
    {
      title: 'Annotation',
      name: 'annotation',
      description: 'A short description of the item being embedded.',
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
      description: 'The text on the button (defaults to "Learn More").',
    },
  ],
  preview: {
    select: {
      description: 'annotation',
      iframeLink: 'iframeLink',
      linkText: 'linkText',
      link: 'link',
      heading: 'heading',
    },
    component: IframeEmbedPreviewer,
  },
};
