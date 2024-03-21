import { IoNewspaperOutline } from 'react-icons/io5';
import { defineType } from 'sanity';

export default defineType({
  title: 'Text & Image',
  name: 'textImage',
  type: 'object',
  icon: IoNewspaperOutline,
  fields: [
    {
      name: 'image',
      title: 'Image',
      description: 'Preferred dimensions are ast least 1080px by 1080px.',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
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
      title: 'Description',
      name: 'description',
      description: 'A short description of the image/ section.',
      type: 'text',
      rows: 4,
    },
    {
      name: 'textLast',
      title: 'Text Last',
      type: 'boolean',
      description: 'Do you want the text to be layed out last?',
      initialValue: false,
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
      heading: 'heading',
      description: 'description',
      link: 'link',
      linkText: 'linkText',
      media: 'image',
      textLast: 'textLast',
    },
  },
});
