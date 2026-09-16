import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const site = defineCollection({
  loader: glob({ pattern: 'site.yaml', base: './src/data' }),
  schema: z.object({
    profile: z.object({
      name: z.string(),
      firstName: z.string(),
      lastName: z.string(),
      tagline: z.string(),
      roles: z.array(z.string()),
      email: z.string(),
      location: z.string(),
      availability: z.string(),
      avatar: z.string(),
    }),
    stats: z.array(z.object({ label: z.string(), value: z.string() })),
    socials: z.array(z.object({ name: z.string(), icon: z.string(), link: z.string() })),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: 'about.yaml', base: './src/data' }),
  schema: z.object({
    about: z.object({
      bio: z.array(z.string()),
      highlights: z.array(
        z.object({ title: z.string(), desc: z.string(), icon: z.string() }),
      ),
    }),
  }),
});

const experience = defineCollection({
  loader: file('./src/data/experience.yaml'),
  schema: z.object({
    id: z.string(),
    role: z.string(),
    company: z.string(),
    period: z.string(),
    order: z.number().default(0),
    placeholder: z.boolean().default(false),
    bullets: z.array(z.string()),
  }),
});

const skills = defineCollection({
  loader: file('./src/data/skills.yaml'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    icon: z.string(),
    items: z
      .array(
        z
          .object({
            name: z.string(),
            src: z.string().optional(),
            icon: z.string().optional(),
            doc: z.string(),
          })
          .refine((item) => Boolean(item.src) || Boolean(item.icon), {
            message: 'skill membutuhkan src (logo) atau icon (boxicons)',
            path: ['src'],
          }),
      ),
  }),
});

const projects = defineCollection({
  loader: file('./src/data/projects.yaml'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    desc: z.string(),
    year: z.number().optional(),
    featured: z.boolean().default(false),
    tech: z.array(z.string()),
    links: z
      .object({
        github: z.string().optional(),
        blog: z.string().optional(),
        deployment: z.string().optional(),
      })
      .optional(),
    img: z.string(),
  }),
});

const contact = defineCollection({
  loader: file('./src/data/contact.yaml'),
  schema: z.object({
    id: z.string(),
    label: z.string(),
    icon: z.string(),
    link: z.string(),
  }),
});

const educations = defineCollection({
  loader: file('./src/data/educations.yaml'),
  schema: z.object({
    id: z.string(),
    degree: z.string(),
    institution: z.string(),
    period: z.string(),
    order: z.number().default(0),
    placeholder: z.boolean().default(false),
    highlights: z.array(z.string()),
    thesis: z
      .object({
        kind: z.string().optional(),
        title: z.string(),
        description: z.string().optional(),
        links: z
          .array(
            z.object({
              label: z.string(),
              url: z.string(),
            }),
          )
          .optional(),
      })
      .optional(),
  }),
});

export const collections = { site, about, experience, skills, projects, contact, educations };