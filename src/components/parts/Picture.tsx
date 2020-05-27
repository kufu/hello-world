import React from 'react'

export const Picture: React.FC<{
  src: string
  alt: string
  loading?: 'lazy' | 'eager' | 'auto' | ''
  className?: string
}> = ({ src, alt, loading, className }) => {
  // 雑なので誰か😇
  const [filename] = src.split('.')
  return (
    <picture className={className}>
      <source type="image/webp" srcSet={filename + '.webp'} />
      <img src={src} alt={alt} loading={loading} />
    </picture>
  )
}
