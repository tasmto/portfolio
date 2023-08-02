import { IoBarbellOutline } from 'react-icons/io5';

export default {
  name: 'resume',
  title: 'Resume',
  icon: IoBarbellOutline,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        // compose the slug from the title field and the company field
        source: (doc) => `${doc.title}-${doc.company}`,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'startDate',
      title: 'Started at',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'current',
      title: 'Current?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'endDate',
      title: 'Ended at',
      type: 'date',
      // Hide this field if the current field is set to true
      hidden: ({ document }) => document.current,
    },
    {
      name: 'extract',
      title: 'A summary of the post.',
      type: 'string',
      description: 'In a few sentences, describe the post.',
      validation: (Rule) => Rule.required().max(350),
    },
    {
      name: 'responsibilities',
      title: 'What were your responsibilities?',
      type: 'basicRCE',
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'company',
    },
  },
};
