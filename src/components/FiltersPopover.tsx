import { colors, type BaseComponentType } from "@/models"
import { useAppStore } from "@/store/zustand/app.zustand"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { useState } from "react"

export const FiltersPopover: BaseComponentType = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [filtersData, toggleFilterStatus] = useAppStore(state => [state.filters, state.toggleFilterStatus])
    const [parentAnimations] = useAutoAnimate()

    const handleOnClickToToggleExpand = () => {
        setIsExpanded(prev => !prev)
    }

    const handleOnClickToAddFilter = (filterName: string) => () => {
        toggleFilterStatus(filterName)
    }

    return (
        <div className="flex flex-col relative">
            <label
                htmlFor="filters_menu_trigger"
                className="border text-sm rounded-md p-1 cursor-pointer select-none hover:bg-neutral-100"
            >
                Filters
            </label>
            <input
                className="hidden peer"
                id="filters_menu_trigger"
                type="checkbox"
            />
            <div
                className="absolute top-[2rem] right-0 bg-white border rounded-lg shadow-md z-50 translate-x-56 peer-checked:translate-x-0 transition-all overflow-hidden"
            >
                <header className="border-b p-1">
                    <h3 className="font-medium">Filters</h3>
                </header>
                <label
                    className="flex items-center pl-1 gap-[0.1rem] border-b text-xs"
                >
                    <MagnifyingGlassIcon
                        className="text-zinc-700"
                        width={18}
                        height={18}
                    />
                    <input
                        className="p-2 outline-none"
                        type="text"
                        placeholder="Search filters"
                    />
                </label>
                <div
                    className="flex flex-wrap items-stretch p-1 gap-1 overflow-hidden max-h-[12rem] transition-all"
                    style={{
                        maxHeight: isExpanded ? '90rem' : ''
                    }}
                    ref={parentAnimations}
                >
                    {
                        filtersData.filter(filter => !filter.isSelected).map((filter) => (
                            <button
                                key={filter.name}
                                className="rounded-md font-medium select-none cursor-pointer text-[0.7rem] p-1 whitespace-nowrap"
                                style={{
                                    backgroundColor: colors[filter.color].bg,
                                    color: colors[filter.color].text
                                }}
                                onClick={handleOnClickToAddFilter(filter.name)}
                            >
                                {filter.name}
                            </button>
                        ))
                    }
                </div>
                <div
                    className="flex justify-center w-full bottom-0 py-1 pb-2 left-0 bg-gradient-to-t from-[rgba(255,255,255,0.9)] to-[rgba(255,255,255,0.6)]"
                    style={{
                        position: isExpanded ? 'relative' : 'absolute'
                    }}
                >
                    <button
                        onClick={handleOnClickToToggleExpand}
                        className="text-blue-400 hover:underline font-medium"
                    >
                        {
                            isExpanded ? 'Show less' : 'Show more'
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}