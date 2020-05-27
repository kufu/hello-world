import React from 'react'

export const Picture: React.FC<{
  src: string
  alt: string
  className: string
}> = ({ src, alt, className }) => {
  // 雑なので誰か😇
  const [filename] = src.split('.')
  return (
    <picture className={className}>
      <source type="image/webp" srcSet={filename + '.webp'} />
      <img src={src} alt={alt} />
    </picture>
  )
}
