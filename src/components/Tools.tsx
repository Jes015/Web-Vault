import { Tool } from "@/components/Tool"
import { useAppStore } from "@/store/zustand/app.zustand"

export const Tools = () => {
    const [tools] = useAppStore(state => [state.tools])

   return (
       <>
        {
            tools.map((tool) => <Tool data={tool} />)
        }
       </>
   )
}