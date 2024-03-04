import { colors, colorsEnumsSchema } from "@/models"
import { z } from "astro:content"

export const FilterSchema = z.object({
    name: z.string(),
    color: colorsEnumsSchema
})

export const FilterArraySchema = z.array(FilterSchema)

export type Filter = z.infer<typeof FilterSchema>

export type FilterArray = Filter[]

export const filters: FilterArray = [
    {
        name: 'React',
        color: colors.blue.name
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
    {
        name: 'Css',
        color: colors.fuchsia.name
    },
    {
        name: 'Recording',
        color: colors.green.name
    },
    {
        name: 'Front Hosting',
        color: colors.red.name
    },
    {
        name: 'Back Hosting',
        color: colors.fuchsia.name
    },
    {
        name: 'Textures',
        color: colors.orange.name
    },
    {
        name: 'Info',
        color: colors.yellow.name
    },
    {
        name: 'Icons',
        color: colors.cyan.name
    },
    {
        name: 'Terminal',
        color: colors.red.name
    },
    {
        name: 'Tailwind',
        color: colors.cyan.name
    },
    {
        name: 'Css Frameworks',
        color: colors.fuchsia.name
    },
    {
        name: 'Message services',
        color: colors.yellow.name
    },
    {
        name: 'Jobs',
        color: colors.orange.name
    },
    {
        name: 'Chrome extensions',
        color: colors.fuchsia.name
    },
    {
        name: 'Drag and drop',
        color: colors.fuchsia.name
    },
    {
        name: 'Loaders',
        color: colors.green.name
    },
    {
        name: 'Fonts',
        color: colors.yellow.name
    },
    {
        name: 'Mockups',
        color: colors.teal.name
    },
    {
        name: 'Wasm',
        color: colors.blue.name
    },
    {
        name: 'Cli',
        color: colors.red.name
    },
    {
        name: 'Git',
        color: colors.cyan.name
    },
    {
        name: 'Web components',
        color: colors.cyan.name
    },
    {
        name: 'Open source',
        color: colors.fuchsia.name
    },
    {
        name: 'Hosting db',
        color: colors.yellow.name
    },
    {
        name: 'MySql',
        color: colors.yellow.name
    },
    {
        name: 'Sql',
        color: colors.yellow.name
    },
    {
        name: 'Sqlite',
        color: colors.yellow.name
    },
    {
        name: 'Redis',
        color: colors.yellow.name
    },
    {
        name: 'Postgres',
        color: colors.yellow.name
    },
    {
        name: 'Mongodb',
        color: colors.yellow.name
    },
    {
        name: 'NoSql',
        color: colors.yellow.name
    },
    {
        name: 'Css animations',
        color: colors.fuchsia.name
    },
    {
        name: 'Javascript animations',
        color: colors.yellow.name
    },
    {
        name: 'Illustrations',
        color: colors.orange.name
    },
    {
        name: 'Learn',
        color: colors.pink.name
    },
    {
        name: 'Form',
        color: colors.green.name
    },
    {
        name: 'Colors',
        color: colors.teal.name
    },
    {
        name: 'Interactive',
        color: colors.orange.name
    },
]