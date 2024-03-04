import { colors, type BaseComponentType } from "@/models"
import { useAppStore } from "@/store/zustand/app.zustand"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { Cross2Icon } from "@radix-ui/react-icons"

export const FiltersSelected: BaseComponentType = () => {
    const [filters, toggleFilterStatus] = useAppStore(state => [state.filters, state.toggleFilterStatus])
    const [parentAnimations] = useAutoAnimate()

    const handleOnClickToRemoveFilter = (filterName: string) => () => {
        toggleFilterStatus(filterName)
    }

    console.log({filtersSelected: filters})
    return (
        <div 
            className="flex gap-1 max-w-64 justify-end overflow-hidden"
            ref={parentAnimations}
        >
            {
                filters.filter(filter => filter.isSelected).map((filter) => (
                    <button
                        key={filter.name}
                        className="flex items-center rounded-md font-medium select-none cursor-pointer text-[0.7rem] p-1 whitespace-nowrap"
                        style={{
                            backgroundColor: colors[filter.color].bg,
                            color: colors[filter.color].text
                        }}
                        onClick={handleOnClickToRemoveFilter(filter.name)}
                    >
                        {filter.name}
                        <Cross2Icon />
                    </button>
                ))
            }
        </div>
    )
}