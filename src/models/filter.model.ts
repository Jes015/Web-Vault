import { colors, colorsEnumsSchema } from "@/models"
import { z } from "astro:content"

export const FilterSchema = z.object({
    name: z.string(),
    color: colorsEnumsSchema,
    isSelected: z.boolean()
})

export const FilterArraySchema = z.array(FilterSchema)

export type Filter = z.infer<typeof FilterSchema>

export type FilterArray = Filter[]

export const filtersData: FilterArray = [
    {
        name: 'React',
        color: colors.blue.name,
        isSelected: false
    },
    {
        name: 'AI',
        color: colors.fuchsia.name,
        isSelected: false
    },
    {
        name: 'Typescript',
        color: colors.cyan.name,
        isSelected: false
    },
    {
        name: 'Javascript',
        color: colors.yellow.name,
        isSelected: false
    },
    {
        name: 'Astro',
        color: colors.orange.name,
        isSelected: false
    },
    {
        name: 'Css',
        color: colors.fuchsia.name,
        isSelected: false
    },
    {
        name: 'Recording',
        color: colors.green.name,
        isSelected: false
    },
    {
        name: 'Front Hosting',
        color: colors.red.name,
        isSelected: false
    },
    {
        name: 'Back Hosting',
        color: colors.fuchsia.name,
        isSelected: false
    },
    {
        name: 'Textures',
        color: colors.orange.name,
        isSelected: false
    },
    {
        name: 'Info',
        color: colors.yellow.name,
        isSelected: false
    },
    {
        name: 'Icons',
        color: colors.cyan.name,
        isSelected: false
    },
    {
        name: 'Terminal',
        color: colors.red.name,
        isSelected: false
    },
    {
        name: 'Tailwind',
        color: colors.cyan.name,
        isSelected: false
    },
    {
        name: 'Css Frameworks',
        color: colors.fuchsia.name,
        isSelected: false
    },
    {
        name: 'Testing',
        color: colors.red.name,
        isSelected: false
    },
    {
        name: 'Testing E2E',
        color: colors.red.name,
        isSelected: false
    },
    {
        name: 'Testing Components',
        color: colors.red.name,
        isSelected: false
    },
    {
        name: 'Message services',
        color: colors.yellow.name,
        isSelected: false
    },
    {
        name: 'Jobs',
        color: colors.orange.name,
        isSelected: false
    },
    {
        name: 'Chrome extensions',
        color: colors.fuchsia.name,
        isSelected: false
    },
    {
        name: 'Drag and drop',
        color: colors.fuchsia.name,
        isSelected: false
    },
    {
        name: 'Loaders',
        color: colors.green.name,
        isSelected: false
    },
    {
        name: 'Fonts',
        color: colors.yellow.name,
        isSelected: false
    },
    {
        name: 'Mockups',
        color: colors.teal.name,
        isSelected: false
    },
    {
        name: 'Wasm',
        color: colors.blue.name,
        isSelected: false
    },
    {
        name: 'Cli',
        color: colors.red.name,
        isSelected: false
    },
    {
        name: 'Git',
        color: colors.cyan.name,
        isSelected: false
    },
    {
        name: 'Web components',
        color: colors.cyan.name,
        isSelected: false
    },
    {
        name: 'Open source',
        color: colors.fuchsia.name,
        isSelected: false
    },
    {
        name: 'Hosting db',
        color: colors.yellow.name,
        isSelected: false
    },
    {
        name: 'MySql',
        color: colors.yellow.name,
        isSelected: false
    },
    {
        name: 'Sql',
        color: colors.yellow.name,
        isSelected: false
    },
    {
        name: 'Sqlite',
        color: colors.yellow.name,
        isSelected: false
    },
    {
        name: 'Redis',
        color: colors.yellow.name,
        isSelected: false
    },
    {
        name: 'Postgres',
        color: colors.yellow.name,
        isSelected: false
    },
    {
        name: 'Mongodb',
        color: colors.yellow.name,
        isSelected: false
    },
    {
        name: 'NoSql',
        color: colors.yellow.name,
        isSelected: false
    },
    {
        name: 'Css animations',
        color: colors.fuchsia.name,
        isSelected: false
    },
    {
        name: 'Javascript animations',
        color: colors.yellow.name,
        isSelected: false
    },
    {
        name: 'Illustrations',
        color: colors.orange.name,
        isSelected: false
    },
    {
        name: 'Learn',
        color: colors.pink.name,
        isSelected: false
    },
    {
        name: 'Form',
        color: colors.green.name,
        isSelected: false
    },
    {
        name: 'Colors',
        color: colors.teal.name,
        isSelected: false
    },
    {
        name: 'Interactive',
        color: colors.orange.name,
        isSelected: false
    },
    {
        name: 'Web Responsive',
        color: colors.fuchsia.name,
        isSelected: false
    },
    {
        name: 'Best web apps',
        color: colors.green.name,
        isSelected: false
    },
    {
        name: 'Image editors',
        color: colors.green.name,
        isSelected: false
    },
    {
        name: 'Svg',
        color: colors.teal.name,
        isSelected: false
    },
    {
        name: 'Hosting images',
        color: colors.blue.name,
        isSelected: false
    },
    {
        name: 'Hosting video',
        color: colors.blue.name,
        isSelected: false
    },
    {
        name: 'Node packages',
        color: colors.green.name,
        isSelected: false
    },
    {
        name: 'Node',
        color: colors.green.name,
        isSelected: false
    },
    {
        name: 'Ip',
        color: colors.yellow.name,
        isSelected: false
    },
    {
        name: 'Drawing',
        color: colors.red.name,
        isSelected: false
    },
    {
        name: 'Screenshot',
        color: colors.cyan.name,
        isSelected: false
    },
    {
        name: 'Charts',
        color: colors.green.name,
        isSelected: false
    },
    {
        name: 'API',
        color: colors.yellow.name,
        isSelected: false
    },
    {
        name: 'Gradient',
        color: colors.fuchsia.name,
        isSelected: false
    },
    {
        name: 'Optimize image',
        color: colors.green.name,
        isSelected: false
    },
    {
        name: 'Design',
        color: colors.fuchsia.name,
        isSelected: false
    },
    {
        name: 'Http Status',
        color: colors.yellow.name,
        isSelected: false
    },
    {
        name: 'Genre images',
        color: colors.green.name,
        isSelected: false
    },
    {
        name: 'Presentations',
        color: colors.pink.name,
        isSelected: false
    },
    {
        name: 'Architect',
        color: colors.green.name,
        isSelected: false
    },
    {
        name: 'Text editors',
        color: colors.blue.name,
        isSelected: false
    },
    {
        name: 'Library',
        color: colors.cyan.name,
        isSelected: false
    },
    {
        name: 'Best libraries',
        color: colors.yellow.name,
        isSelected: false
    },
]