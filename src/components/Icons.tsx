import type { BaseComponentType } from "@/models"
import { ExclamationTriangleIcon, StarFilledIcon } from "@radix-ui/react-icons"

export const DangerousIcon: BaseComponentType = ({ className, ...props }) => {
    return (
        <div className={["bg-red-200 rounded-md p-1", className].join(' ')} {...props}>
            <ExclamationTriangleIcon
                width={14}
                height={14}
                className="text-red-600"
            />
        </div>
    )
}

export const RecommendedIcon: BaseComponentType = ({ className, ...props }) => {
    return (
        <div className="bg-yellow-200 rounded-md p-1" {...props}>
            <StarFilledIcon
                width={14}
                height={14}
                className="text-yellow-600"
            />
        </div>
    )
}