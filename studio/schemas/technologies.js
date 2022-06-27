import { FaToolbox } from 'react-icons/fa';
export default {
  name: 'technologies',
  title: 'Technologies',
  type: 'document',
  icon: FaToolbox,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'image',
      description: 'Upload an *svg icon of the technology.',
      options: {
        accept: 'image/svg+xml',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      description:
        'Short description of the technology usefully for SEO and hover text.',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.max(150),
    },
    {
      title: 'Feature on homepage and other prominent places?',
      description: 'This may also appear on a custom CV maker I may make.',
      name: 'featured',
      type: 'boolean',
      initialValue: true,
    },
  ],
};
