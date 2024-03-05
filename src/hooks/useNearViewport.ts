import { useEffect, useRef } from "react"

export const useNearViewport = (callback: () => void) => {
    const watchElement = useRef<HTMLDivElement>()

    useEffect(() => {
        if (watchElement?.current == null) return

        const observer = new IntersectionObserver((e) => {
            if (e[0].isIntersecting) {
                console.log('saliendo en pantallaaa')
                callback()
            }
        }, { rootMargin: '200px' })

        observer.observe(watchElement.current)

        return () => {
            observer?.disconnect()
        }
    },
        [])

    return { watchElement }
}