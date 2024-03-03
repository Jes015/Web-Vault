import type { FilterArray, ToolArray } from '@/models'
import { create } from 'zustand'

interface AppStore {
    tools: ToolArray
    filtersSelected: FilterArray
}

export const useAppStore = create<AppStore>(() => ({
  tools: [],
  filtersSelected: []
}))