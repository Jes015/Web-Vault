import type { FilterArray, ToolArray } from '@/models'
import { getCollection } from 'astro:content'
import { create } from 'zustand'

const defaultToolsValues: ToolArray = (await getCollection('tools'))[0].data.slice(0,30)

interface AppStore {
    tools: ToolArray
    filtersSelected: FilterArray
}

export const useAppStore = create<AppStore>(() => ({
  tools: defaultToolsValues,
  filtersSelected: []
}))