import React, { FC, createContext, useCallback, useContext, useEffect, useRef } from 'react'

// @ts-ignore
import vertexShaderSource from 'raw-loader!./shaders/vertexShader.vert'
import { useWebp } from '../../hooks/useWebp'

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

export const useImageEffect = (fragmentShaderSource: string) => {
  const { baseCanvasRef } = useContext(ImageEffectContext)
  const canvas = baseCanvasRef?.current || null
  const canvasContext = useRef<CanvasRenderingContext2D>(canvas?.getContext('2d') || null)
  const imageDom = useRef<HTMLImageElement>(new Image())
  const ImageDomForGl = useRef<HTMLImageElement>(new Image())
  const { initShader } = useShader(ImageDomForGl.current, fragmentShaderSource)
  const supportsWebp = useWebp()

  const drawImageOnCanvas = useCallback(() => {
    if (!canvas || !canvasContext.current) return
    const { naturalWidth, naturalHeight } = imageDom.current
    const { innerHeight } = window
    const innerWidth = document.body.clientWidth
    canvas.width = innerWidth
    canvas.height = innerHeight
    const naturalWidthCenter = naturalWidth / 2
    const innerWidthCenter = innerWidth / 2
    const widthRatio = naturalWidth / innerWidth
    const heightRatio = naturalHeight / innerHeight
    let offsetX: number
    let dw: number
    let dh: number

    if (naturalWidth <= innerWidth && naturalHeight > innerHeight) {
      offsetX = innerWidthCenter - naturalWidthCenter / widthRatio
      dw = innerWidth
      dh = naturalHeight / widthRatio
    } else if (naturalWidth > innerWidth && naturalHeight <= innerHeight) {
      offsetX = innerWidthCenter - naturalWidthCenter / heightRatio
      dw = naturalWidth / heightRatio
      dh = innerHeight
    } else if (naturalWidth > innerWidth && naturalHeight > innerHeight) {
      if (widthRatio <= heightRatio) {
        offsetX = 0
        dw = innerWidth
        dh = naturalHeight / widthRatio
      } else {
        offsetX = innerWidthCenter - naturalWidthCenter / heightRatio
        dw = naturalWidth / heightRatio
        dh = innerHeight
      }
    } else {
      if (widthRatio <= heightRatio) {
        offsetX = 0
        dw = innerWidth
        dh = naturalHeight / widthRatio
      } else {
        offsetX = innerWidthCenter - naturalWidthCenter / heightRatio
        dw = naturalWidth / heightRatio
        dh = innerHeight
      }
    }

    canvasContext.current.drawImage(imageDom.current, offsetX, 0, dw, dh)
    ImageDomForGl.current.addEventListener('load', initShader, { once: true })
    ImageDomForGl.current.src = canvas.toDataURL()
  }, [canvas, initShader])

  useEffect(() => {
    window.addEventListener('resize', drawImageOnCanvas)
    if (!imageDom.current.src) {
      imageDom.current.addEventListener('load', drawImageOnCanvas, { once: true })
      imageDom.current.src = supportsWebp ? '/images/mv.webp' : '/images/mv.png'
    }

    const context = canvasContext.current
    return () => {
      canvas && context && context.clearRect(0, 0, canvas.width, canvas.height)
      window.removeEventListener('resize', drawImageOnCanvas)
    }
  }, [canvas, drawImageOnCanvas, supportsWebp])
}

const createShader = (gl: WebGLRenderingContext, program: WebGLProgram, type: number, source: string) => {
  const shader = gl.createShader(type)!
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  gl.attachShader(program, shader)
}

const useShader = (image: HTMLImageElement, fragmentShaderSource: string) => {
  const { targetCanvasRef } = useContext(ImageEffectContext)
  const canvas = targetCanvasRef?.current || null
  const glRef = useRef<WebGLRenderingContext>(canvas?.getContext('webgl') || null)
  const gl = glRef.current
  const animationFrameRef = useRef<number>(0)

  const initShader = () => {
    if (!gl || !canvas) return
    cancelAnimationFrame(animationFrameRef.current)
    canvas.width = document.body.clientWidth
    canvas.height = window.innerHeight
    const program = gl.createProgram()!

    createShader(gl, program, gl.VERTEX_SHADER, vertexShaderSource)
    createShader(gl, program, gl.FRAGMENT_SHADER, fragmentShaderSource)
    gl.linkProgram(program)
    gl.useProgram(program)

    const positionLocation = gl.getAttribLocation(program, 'a_position')
    const textureCoordLocation = gl.getAttribLocation(program, 'a_textureCoord')
    const textureSizeLocation = gl.getUniformLocation(program, 'u_textureSize')
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution')
    const timeLocation = gl.getUniformLocation(program, 'u_time')

    // 頂点
    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    const x1 = 0
    const x2 = image.width
    const y1 = 0
    const y2 = image.height
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2]), gl.STATIC_DRAW)

    // 各頂点とテクスチャ座標の対応付け
    const textCoordBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, textCoordBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0]), gl.STATIC_DRAW)

    // テクスチャ
    const texture = gl.createTexture()
    gl.bindTexture(gl.TEXTURE_2D, texture)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)

    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image)

    gl.viewport(0, 0, canvas.width, canvas.height)
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.useProgram(program)

    gl.enableVertexAttribArray(positionLocation)
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)

    gl.enableVertexAttribArray(textureCoordLocation)
    gl.bindBuffer(gl.ARRAY_BUFFER, textCoordBuffer)
    gl.vertexAttribPointer(textureCoordLocation, 2, gl.FLOAT, false, 0, 0)

    gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height)
    gl.uniform2f(textureSizeLocation, gl.canvas.width, gl.canvas.height)

    const animationStartTime = window.performance.now()
    const render = (time = 0) => {
      gl.uniform1f(timeLocation, (time - animationStartTime) * 0.001)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      gl.flush()
      animationFrameRef.current = requestAnimationFrame(render)
    }
    render()
  }

  useEffect(() => {
    return () => {
      cancelAnimationFrame(animationFrameRef.current)
      if (!gl) return
      gl.clearColor(0.0, 0.0, 0.0, 0.0)
      gl.clear(gl.COLOR_BUFFER_BIT)
    }
  }, [gl])

  return { initShader }
}
