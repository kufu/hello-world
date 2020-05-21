import { useCallback, useState } from 'react'
import { useEventListener } from './useEventListener'

export const useStoredScroll = () => {
  const [y, setY] = useState(typeof window !== 'undefined' ? window.scrollY : 0)
  const handleScroll = useCallback(() => {
    setY(typeof window !== 'undefined' ? window.scrollY : 0)
  }, [])

  useEventListener('scroll', handleScroll)

  return { y }
}
