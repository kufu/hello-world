import { useEffect, useRef } from 'react'

export const useEventListener = <T extends Event>(
  eventName: string,
  handler: (e: T) => void,
  element: Element | Window | null = typeof window !== 'undefined' ? window : null,
) => {
  const savedHandler = useRef<(e: T) => void>()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    const eventListener = (e: T) => {
      savedHandler.current && savedHandler.current(e)
    }

    if (element) {
      element.addEventListener(eventName, eventListener as any)
    }

    return () => {
      if (element) {
        element.removeEventListener(eventName, eventListener as any)
      }
    }
  }, [eventName, element])
}
