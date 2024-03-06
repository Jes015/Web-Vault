import { filtersData, type Filter, type FilterArray, type ToolArray } from '@/models'
import { getCollection } from 'astro:content'
import { create } from 'zustand'

const defaultToolsValues: ToolArray = (await getCollection('tools'))[0].data.slice(0, 30)

interface AppStore {
  tools: ToolArray
  filters: FilterArray
  addTools: (newToolsArray: ToolArray) => void
  setTools: (newToolsArray: ToolArray) => void
  toggleFilterStatus: (filterName: string) => void
  resetTools: () => void
}

export const useAppStore = create<AppStore>((set, get) => ({
  tools: defaultToolsValues,
  filters: filtersData,
  setTools: (newToolsArray: ToolArray) => {
    set({ tools: newToolsArray })
  },
  addTools: (newToolsArray: ToolArray) => {
    const newArray = [...get().tools, ...newToolsArray]
    set({ tools: newArray })
  },
  resetTools: () => {
    set({ tools: defaultToolsValues })
  },
  toggleFilterStatus: (filterName: string) => {
    const filterIndex = get().filters.findIndex(filter => filter.name === filterName)

    if (filterIndex === -1) return

    let newFilterArray = structuredClone(get().filters)

    const newFilter: Filter = { ...get().filters[filterIndex], isSelected: !get().filters[filterIndex].isSelected }

    newFilterArray = newFilterArray.with(filterIndex, newFilter)

    set({ filters: newFilterArray })
  }
}))