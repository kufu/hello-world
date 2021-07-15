import { useState } from 'react'

export const useWebp = () => {
  const [enableWebp, setEnableWebp] = useState<boolean | null>(null)

  if (typeof Image !== 'undefined') {
    const img = new Image()
    img.onload = () => {
      setEnableWebp(img.width > 0 && img.height > 0)
    }
    img.onerror = function() {
      setEnableWebp(false)
    }
    img.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA'
  }

  return enableWebp
}
