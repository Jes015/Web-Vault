import { Tool } from "@/components/Tool"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { type LegacyRef } from "react"
import { useTools } from "./hooks"

export const Tools = () => {
    const { tools, watchElement, loading } = useTools()
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
                    tools.map((tool) => <Tool key={tool.url} data={tool} />)
                }
            </div>

            {
                tools.length > 18 && (
                    <div
                        className="justify-self-center col-span-3 flex justify-center"
                        ref={watchElement as LegacyRef<HTMLDivElement>}
                    >
                        saliendo
                    </div>
                )
            }

        </div>
    )
}