import { ApiFilterParamName, type FilterArray } from "@/models"

export const setPageSearchParams = (newFilterArray: FilterArray) => {
    const newUrl = new URL(location.href)

    const selectedFilters = newFilterArray.map((filter) => filter.isSelected ? filter.name : '').filter(Boolean)

    if (selectedFilters?.[0] != null) {
        newUrl.searchParams.set(ApiFilterParamName, selectedFilters.join(','))
    } else {
        newUrl.searchParams.delete(ApiFilterParamName)
    }

    history.pushState('', '', newUrl)
}