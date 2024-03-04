import { Tool } from "@/components/Tool"
import { ApiFilterParamName } from "@/models"
import { getToolsService } from "@/services"
import { useAppStore } from "@/store/zustand/app.zustand"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { useEffect } from "react"

export const Tools = () => {
    const [tools, filters, resetTools, setTools] = useAppStore(state => [state.tools, state.filters, state.resetTools, state.setTools])
    const [parentAnimations] = useAutoAnimate()

    useEffect(() => {
        const selectedFiltersArray = filters.map((filter) => filter.isSelected ? filter.name : '').filter(Boolean)
        const selectedFiltersText = selectedFiltersArray.join(',')
        const areThereFilters = selectedFiltersArray?.[0] != null

        const newUrl = new URL(location.href)

        if (areThereFilters) {
            newUrl.searchParams.set(ApiFilterParamName, selectedFiltersText)

            getToolsService(selectedFiltersText)
                .then((response) => {
                    const newToolsArray = response.data

                    setTools(newToolsArray)
                })
                .catch(() => {
                })
        }
        else {
            newUrl.searchParams.delete(ApiFilterParamName)
            resetTools()
        }

        history.pushState('', '', newUrl)
    }, [filters])

    return (
        <div 
            ref={parentAnimations}
            className="mt-1 grid grid-cols-3 gap-1 min-h-72"
            style={{
                alignItems: tools.length <= 3 ? 'start' : 'stretch'
            }}
        >
            {
                tools.map((tool) => <Tool key={tool.title} data={tool} />)
            }
            <div />
        </div>
    )
}