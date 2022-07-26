import { IoPricetagOutline } from 'react-icons/io5';

export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  icon: IoPricetagOutline,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
};
