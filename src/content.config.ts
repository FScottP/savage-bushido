import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const rules = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/rules' }),
  schema: z.object({
    title: z.string(),
    chapterNumber: z.number(),
    description: z.string().optional(),
    label: z.string().optional(),
  }),
});

export const collections = { rules };