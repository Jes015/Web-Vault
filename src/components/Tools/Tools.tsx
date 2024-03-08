import { Tool } from "@/components/Tool"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { type LegacyRef } from "react"
import { useTools } from "./hooks"

export const Tools = () => {
    const { tools, watchElement } = useTools()
    const [parentAnimations] = useAutoAnimate()

    return (
        <div>
            <div
                ref={parentAnimations}
                className="mt-1 grid content-start sm:grid-cols-3 gap-1 min-h-72"
                style={{
                    alignItems: tools.length <= 3 ? 'start' : 'stretch'
                }}
            >
                {
                    tools.map((tool, index) =>
                        index === tools.length - 1
                            ?
                            <div ref={watchElement as LegacyRef<HTMLDivElement>} >
                                <Tool key={tool.url} data={tool} />
                            </div>
                            :
                            <Tool key={tool.url} data={tool} />
                    )
                }
            </div>
        </div>
    )
}