import { colors, type BaseComponentType } from "@/models"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { MagnifyingGlassIcon, MoonIcon } from "@radix-ui/react-icons"
import { useFiltersPopover } from "./hooks"

export const FiltersPopover: BaseComponentType = () => {
    const {
        filtersNoSelected,
        addFilter,
        toggleIsExpanded,
        isExpanded,
        changeSearchFilter
    } = useFiltersPopover()
    const [parentAnimations] = useAutoAnimate()


    const handleOnClickToToggleExpand = () => {
        toggleIsExpanded()
    }

    const handleOnClickToAddFilter = (filterName: string) => () => {
        addFilter(filterName)
    }

    const handleOnInputSearch = (e: React.FormEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.value || null

        changeSearchFilter(inputValue)
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
                        onChange={handleOnInputSearch}
                        className="p-2 outline-none"
                        type="text"
                        placeholder="Search filters"
                    />
                </label>
                <div
                    className="flex flex-wrap items-start p-1 gap-1 overflow-hidden transition-all scroll"
                    style={{
                        maxHeight: isExpanded ? '30rem' : '12rem',
                        overflowY: isExpanded ? 'auto' : 'clip',
                        // @ts-ignore i want to change the scroll bar width with this line and ts does not let me for the types
                        '--sb-size': '6px'
                    }}
                    ref={parentAnimations}
                >
                    {
                        filtersNoSelected.map((filter) => (
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
                    {
                        filtersNoSelected?.[0] == null && (
                            <div className="flex flex-col justify-center items-center w-full py-2">
                                <MoonIcon width={22} height={22} className="opacity-50"/>
                                <span className="text-xs font-semibold">No filters found</span>
                            </div>
                        )
                    }
                </div>
                {
                    filtersNoSelected.length >= 12 && (
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
                    )
                }
            </div>
        </div>
    )
}