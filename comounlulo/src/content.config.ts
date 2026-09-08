import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

const tips = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tips" }),
  schema: z.object({
    title: z.string(),
    category: z.enum([
      "Hidratación",
      "Movimiento",
      "Descanso",
      "Alimentación",
      "Constancia",
    ]),
    minutes: z.string(),
    icon: z.string(),
    order: z.number().default(0),
  }),
});

const recetas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recetas" }),
  schema: z.object({
    title: z.string(),
    minutes: z.string(),
    porciones: z.string(),
    foto: z.string(),
    ingredientes: z.array(z.string()),
    nota: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { tips, recetas };
