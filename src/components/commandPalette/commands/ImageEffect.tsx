import React, { FC, createContext, useRef } from 'react'

type ImageEffectContextType = {
  baseCanvasRef: React.RefObject<HTMLCanvasElement> | null
  targetCanvasRef: React.RefObject<HTMLCanvasElement> | null
}

export const ImageEffectContext = createContext<ImageEffectContextType>({
  baseCanvasRef: null,
  targetCanvasRef: null,
})

export const ImageEffectProvider: FC = ({ children }) => {
  const baseCanvasRef = useRef<HTMLCanvasElement>(null)
  const targetCanvasRef = useRef<HTMLCanvasElement>(null)

  return (
    <ImageEffectContext.Provider value={{ baseCanvasRef: baseCanvasRef, targetCanvasRef: targetCanvasRef }}>
      {children}
    </ImageEffectContext.Provider>
  )
}
