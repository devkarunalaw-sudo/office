import { defineCollection, z } from 'astro:content';

const servicesCollection = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    description: z.string(),
    conditional: z.boolean(),
    features: z.array(z.string()),
  }),
});

const teamCollection = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    name: z.string(),
    title: z.string(),
    image: z.string(),
    location: z.string(),
    socialLinks: z.object({
      linkedin: z.string().optional(),
      email: z.string().optional(),
    }),
    articles: z.array(z.object({
      title: z.string(),
      date: z.string(),
      url: z.string(),
      description: z.string(),
    })).optional(),
  }),
});

const officeCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    logoDescription: z.string().optional(),
  }),
});

export const collections = {
  'services': servicesCollection,
  'team': teamCollection,
  'office': officeCollection,
};
