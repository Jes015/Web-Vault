import { useNearViewport, usePagination } from "@/hooks"
import { ApiFilterParamName } from "@/models"
import { getToolsService } from "@/services"
import { useAppStore } from "@/store/zustand/app.zustand"
import { useEffect, useState } from "react"

export const useTools = () => {
    const [tools, filters, resetTools, setTools, addTools, toggleFilterStatus] = useAppStore(state => [state.tools, state.filters, state.resetTools, state.setTools, state.addTools, state.toggleFilterStatus])
    const selectedFiltersArray = filters.map((filter) => filter.isSelected ? filter.name : '').filter(Boolean)
    const selectedFiltersText = selectedFiltersArray.join(',')

    const [loading, setLoading] = useState(false)

    const { limit, nextPage, offset, page, resetValues } = usePagination({ defaultIncrementValue: 30 })
    const { watchElement } = useNearViewport(() => {
        nextPage()
    })

    useEffect(() => {
        if (page === 0) return

        getToolsService(selectedFiltersText, offset, limit)
            .then((data) => {
                const newToolsArray = data.data
                addTools(newToolsArray)
            })
            .catch(() => {

            })
    }, [page])

    useEffect(() => {
        resetValues()

        const areThereFilters = selectedFiltersArray?.[0] != null

        const newUrl = new URL(location.href)

        if (areThereFilters) {
            newUrl.searchParams.set(ApiFilterParamName, selectedFiltersText)

            setLoading(true)
            getToolsService(selectedFiltersText)
                .then((response) => {
                    const newToolsArray = response.data

                    setTools(newToolsArray)
                })
                .catch(() => {
                })
                .finally(() => {
                    setLoading(false)
                })
        }
        else {
            newUrl.searchParams.delete(ApiFilterParamName)
            resetTools()
        }

        history.pushState('', '', newUrl)
    }, [filters])

    return {
        tools,
        watchElement,
        loading
    }
}