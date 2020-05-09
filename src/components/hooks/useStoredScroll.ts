import { useCallback, useState } from 'react'
import { useEventListener } from './useEventListener'

export const useStoredScroll = () => {
  const [y, setY] = useState(scrollY)
  const handleScroll = useCallback(() => {
    setY(scrollY)
  }, [])

  useEventListener('scroll', handleScroll)

  return { y }
}
