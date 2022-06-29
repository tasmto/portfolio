import { IoDocumentTextOutline } from 'react-icons/io5';
import IframeEmbedPreviewer from '../../components/IframeEmbedPreviewer';
import plainTextPreviewer from '../../components/plainTextPreviewer';

export default {
  title: 'Normal Text',
  name: 'plainText',
  type: 'object',
  icon: IoDocumentTextOutline,
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Section heading (optional).',
    },
    {
      name: 'subheading',
      title: 'Sub-Heading',
      type: 'string',
      description: 'Section sub-heading (optional).',
    },
    {
      title: 'description',
      name: 'description',
      type: 'strippedRCE',
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
      heading: 'heading',
      description: 'description',
      iframeLink: 'iframeLink',
      linkText: 'linkText',
      link: 'link',
    },
    component: plainTextPreviewer,
  },
};
