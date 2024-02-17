// Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// Define a `type` and `schema` for each collection

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    coverImage: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    logoImage: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    publishedAt: z.date(),
    tags: z.array(z.string()),
    description: z.string(),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectsCollection,
};
