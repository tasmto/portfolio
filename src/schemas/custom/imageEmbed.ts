import { IoImageOutline } from 'react-icons/io5'
import { defineType } from 'sanity'

export default defineType({
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
})
