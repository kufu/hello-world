import { useEffect, useRef } from 'react'

export const useEventListener = <T extends Event>(
  eventName: string,
  handler: (e: T) => void,
  element: Element | Window = window,
) => {
  const savedHandler = useRef<(e: T) => void>()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    const eventListener = (e: T) => {
      savedHandler.current && savedHandler.current(e)
    }

    element.addEventListener(eventName, eventListener as any)

    return () => {
      element.removeEventListener(eventName, eventListener as any)
    }
  }, [eventName, element])
}
