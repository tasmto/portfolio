import { IoImageOutline } from 'react-icons/io5';
import plainTextPreviewer from '../../components/plainTextPreviewer';

export default {
  title: 'Image',
  name: 'imageEmbed',
  type: 'object',
  icon: IoImageOutline,
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Section heading (optional).',
    },
    {
      title: 'description',
      name: 'description',
      type: 'strippedRCE',
    },
  ],
};
