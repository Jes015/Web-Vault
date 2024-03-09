import { useEffect, useRef } from "react"

export const useNearViewport = (callback: () => void) => {
    const watchElement = useRef<HTMLDivElement>()

    useEffect(() => {
        let observer: IntersectionObserver | null = null

        // We add a timeout because of the useAutoAnimate hook
        const timeout = setTimeout(() => {
            if (watchElement?.current == null) return

            observer = new IntersectionObserver((e) => {
                if (e[0].isIntersecting) {
                    callback()
                }
            }, { rootMargin: '200px' })

            observer.observe(watchElement.current)
        }, 1000)

        return () => {
            clearTimeout(timeout)
            observer?.disconnect()
        }
    },
    // This just works because of a render of a setState
        [watchElement.current])

    return { watchElement }
}