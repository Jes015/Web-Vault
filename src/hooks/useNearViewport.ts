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
                    console.log('saliendo en pantallaaa')
                    callback()
                }
            }, { rootMargin: '200px' })

            observer.observe(watchElement.current)
        }, 1000)

        return () => {
            if (observer == null) return
            
            clearTimeout(timeout)
            observer?.disconnect()
        }
    },
        [])

    return { watchElement }
}