import { DangerousIcon, RecommendedIcon } from "@/components/Icons.tsx"
import { type BaseComponentProps, type Tool as ToolType } from "@/models"
import type { FC } from "react"

interface ToolProps extends BaseComponentProps {
    data: ToolType
}

export const Tool: FC<ToolProps> = ({ data, ...props }) => {
    return (
        <a
            rel="noopener noreferrer"
            href={data.url}
            className="border relative rounded-lg px-2 py-3 hover:bg-neutral-50 group"
            target="_blank"
            {...props}
        >
            <header className="flex flex-col gap-1">
                <h2 className="text-base font-medium leading-4">{data.title}</h2>
                <div className="relative">
                    <p
                        className="text-zinc-900 text-xs text-pretty line-clamp-2"
                        style={{
                            wordWrap: 'break-word',
                        }}
                    >
                        {data.description}
                    </p>
                </div>
            </header>
            <div className="absolute top-0 right-0 p-1">
                {
                    data.isRecommended && <RecommendedIcon />
                }
                {
                    data.isDangerous && <DangerousIcon />
                }
            </div>
            {
                data.description.length > 50 && (
                    <div
                        role="tooltip"
                        className="hidden mt-[70px] sm:group-hover:flex sm:group-hover:absolute flex-col top-0 left-0 z-50"
                    >
                        <div className="mt-[-5px] self-center h-0 w-0 border-x-8 border-x-transparent border-b-[10px] border-b-zinc-900 inline-block"></div>
                        <div className="mt-[-5px] [background-color:rgb(255,255,255)] backdrop-blur-lg border border-zinc-200 shadow-md rounded-lg">
                            <header className="border-b px-2 py-[0.1rem] bg-neutral-50">
                                <span className="text-zinc-600 [font-size:0.6rem] font-semibold">Tool description</span>
                            </header>
                            <p className="text-xs font-normal text-pretty p-2 leading-3">
                                {data.description}
                            </p>
                        </div>
                    </div>
                )
            }
        </a>

    )
}