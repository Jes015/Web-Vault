import { useAppStore } from "@/store/zustand/app.zustand"
import { useState } from "react"

export const useFiltersPopover = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [filtersData, toggleFilterStatus] = useAppStore(state => [state.filters, state.toggleFilterStatus])
    const [searchValue, setSearchValue] = useState<string | null>(null)

    const filtersNoSelected = searchValue
        ?
        filtersData.filter(filter => !filter.isSelected && filter.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        :
        filtersData.filter(filter => !filter.isSelected)

    const changeSearchFilter = (search: string | null) => {
        setSearchValue(search)
    }

    const toggleIsExpanded = () => {
        setIsExpanded(prev => !prev)
    }

    const addFilter = (filterName: string) => {
        toggleFilterStatus(filterName)
    }

    return {
        searchValue,
        isExpanded,
        filtersNoSelected,
        addFilter,
        toggleIsExpanded,
        changeSearchFilter
    }
}