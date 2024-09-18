// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const visualizationCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    // post information used in the header section of the page
    title: z.string(),
    shortenedTitle: z.string().optional(),
    datePosted: z.string(),
    author: z.string().default('VAST Staff'),
    coverImage: z.string(),
    topicTags: z.array(z.string()),
    modelTags: z.array(z.string()),
    softwareTags: z.array(z.string()),
    mediaType: z.string()
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'visualizations': visualizationCollection,
};