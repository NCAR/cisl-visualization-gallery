// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const visualizationCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    // post information used in the header section of the page
    title: z.string(),
    shortTitle: z.string().optional(),
    datePosted: z.string(),
    author: z.string().default('VAST Staff'),
    coverImage: z.string(),
    tags: z.array(z.string()),
    mediaType: z.string(),

    // post content used in the main section of the page
    mediaLinks: z.array(z.string()),
    description: z.string(),
    moreImageLinks: z.array(z.string())
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'visualizations': visualizationCollection,
};