import { colors } from "@/models"
import { z } from "astro:content"

export const FilterSchema = z.object({
    name: z.string(),
    color: z.enum([colors.blue.name, colors.orange.name, colors.pink.name, colors.yellow.name, colors.green.name, colors.cyan.name, colors.teal.name])
})

export const FilterArraySchema = z.array(FilterSchema)

export type Filter = z.infer<typeof FilterSchema>

export type FilterArray = Filter[]

export const filters: FilterArray = [
    {
        name: 'React',
        color: colors.cyan.name
    },
    {
        name: 'Typescript',
        color: colors.cyan.name
    },
    {
        name: 'Javascript',
        color: colors.yellow.name
    },
    {
        name: 'Astro',
        color: colors.orange.name
    },
]