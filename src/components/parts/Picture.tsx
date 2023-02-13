import React from 'react'

export const Picture: React.FC<{
  src: string
  alt: string
  loading?: 'lazy' | 'eager' | 'auto' | ''
  className?: string
}> = ({ src, alt, loading, className }) => {
  if (src.lastIndexOf('.') === -1) return <></>
  const filename = src.substring(0, src.lastIndexOf('.'))
  return (
    <picture className={className}>
      <source type="image/webp" srcSet={filename + '.webp'} />
      <img src={src} alt={alt} loading={loading} />
    </picture>
  )
}
