import { type BaseComponentProps, type Tool as ToolType } from "@/models"
import { ExclamationTriangleIcon, StarFilledIcon } from "@radix-ui/react-icons"
import type { FC } from "react"

interface ToolProps extends BaseComponentProps {
    data: ToolType
}

export const Tool: FC<ToolProps> = ({ data, ...props }) => {
    return (
        <a
            rel="noopener noreferrer"
            href={data.url}
            className="border relative rounded-lg px-2 py-3 hover:bg-neutral-100"
            target="_blank"
            {...props}
        >
            <header className="flex flex-col gap-1">
                <h2 className="text-base font-medium leading-4">{data.title}</h2>
                <p className="text-zinc-900 text-xs text-pretty">{data.description}</p>
            </header>
            <div className="absolute top-0 right-0 p-1">
                {
                    data.isRecommended && (
                        <div className="bg-yellow-200 rounded-md p-1">
                            <StarFilledIcon
                                width={14}
                                height={14}
                                className="text-yellow-600"
                            />
                        </div>
                    )
                }
                {
                    data.isDangerous && (
                        <div className="bg-red-200 rounded-md p-1">
                            <ExclamationTriangleIcon
                                width={14}
                                height={14}
                                className="text-red-600"
                            />
                        </div>
                    )
                }
            </div>
            <footer></footer>
        </a>

    )
}