import { z } from "astro:content"

export const ToolSchema = z.object({
    title: z.string(),
    description: z.string(),
    isRecommended: z.boolean(),
    isPrivileged: z.boolean(),
    isDangerous: z.boolean().optional(),
    url: z.string().url(),
    filters: z.string().array()
})

export const ToolArraySchema = z.array(ToolSchema)

export type Tool = z.infer<typeof ToolSchema>

export type ToolArray = Tool[]