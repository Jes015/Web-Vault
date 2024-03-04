import { type BaseComponentType } from "@/models"
import { FiltersPopover } from "./FiltersPopover"
import { FiltersSelected } from "./FiltersSelected"

export const Filters: BaseComponentType = () => {
    return (
        <div className="flex gap-1 items-center">
            <FiltersSelected />
            <FiltersPopover />
        </div>
    )
}