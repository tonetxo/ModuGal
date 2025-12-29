// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const modulesCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
  }),
});

const supportCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'modules': modulesCollection,
  'support': supportCollection,
};