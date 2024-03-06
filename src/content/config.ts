import { ToolArraySchema } from '@/models'
import { defineCollection } from 'astro:content'

const toolsCollection = defineCollection({
  type: 'data', // v2.5.0 and later
  schema: ToolArraySchema
});

export const collections = {
  tools: toolsCollection,
};