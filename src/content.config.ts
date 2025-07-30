import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(), // This will be our excerpt
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    heroImage: z.string(), // We'll use this for the emoji
    category: z.string(),
    readTime: z.string(),
  }),
});

export const collections = { blog };