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
    resumen: z.string(),
    order: z.number().default(0),
  }),
});

const recetas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recetas" }),
  schema: z.object({
    title: z.string(),
    categoria: z.enum([
      "Tradición",
      "Bebidas",
      "Postres",
      "Cocina salada",
      "Conservas y salsas",
      "Cócteles",
    ]),
    tipo: z.string(),
    destacado: z.boolean().default(false),
    tiempo: z.string(),
    porciones: z.string(),
    dificultad: z.string(),
    historia: z.string(),
    ingredientes: z.array(z.string()),
    pasos: z.array(z.string()),
    presentacion: z.string(),
    secreto: z.string(),
    clasificacion: z.string(),
    notaSeguridad: z.string().optional(),
    etiquetas: z.array(z.string()),
    seoTitle: z.string(),
    seoDescripcion: z.string(),
    imagen: z.string(),
    alt: z.string(),
    fuentes: z
      .array(
        z.object({
          titulo: z.string(),
          url: z.string(),
        }),
      )
      .default([]),
    order: z.number().default(0),
  }),
});

const belleza = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/belleza" }),
  schema: z.object({
    codigo: z.string(),
    title: z.string(),
    tipo: z.string(),
    foco: z.string(),
    conceptoEditorial: z.string(),
    limiteRigor: z.string(),
    imagen: z.string(),
    alt: z.string(),
    order: z.number().default(0),
  }),
});

const conocelo = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/conocelo" }),
  schema: z.object({
    codigo: z.string(),
    title: z.string(),
    tipo: z.string(),
    foco: z.string(),
    conceptoEditorial: z.string(),
    limiteRigor: z.string(),
    imagen: z.string(),
    alt: z.string(),
    order: z.number().default(0),
  }),
});

// Salud (H01-H12): ciencia nutricional del lulo con rigor por artículo,
// separada a propósito de Conócelo (origen, historia, cultivo). Ver
// src/sections/Salud.astro. `imagen` queda opcional: mientras no exista la
// foto real, la tarjeta y el artículo muestran un TODO visible.
const salud = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/salud" }),
  schema: z.object({
    codigo: z.string(),
    title: z.string(),
    enfoque: z.string(),
    queSabemos: z.string(),
    comoAprovecharlo: z.string(),
    queNoAfirmamos: z.string(),
    conceptoVisual: z.string(),
    alt: z.string(),
    imagen: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { tips, recetas, belleza, conocelo, salud };
