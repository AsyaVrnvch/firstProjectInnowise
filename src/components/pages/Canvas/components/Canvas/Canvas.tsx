import React from 'react'
import * as Styles from './Canvas.Styles'
import { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as canvasSelector from '../../../../../redux/selectors/canvas'
import * as toolService from './toolService'
import { savingImage, resetCanvas } from '../../../../../redux/actions/canvas'
import { toast } from 'react-toastify'

const Canvas: React.FC = () => {
  const dispatch = useDispatch()

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctx: CanvasRenderingContext2D | null = canvasRef.current
    ? canvasRef.current.getContext('2d')
    : null
  const canvasSize = {
    height: 600,
    width: 600,
  }

  const [mouse, setMouse] = useState<boolean>(false)
  const [dataUrl, setDataUrl] = useState<string>('')
  const [startPos, setStartPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  const tool = useSelector(canvasSelector.selectTool)
  const color = useSelector(canvasSelector.selectColor)
  const width = useSelector(canvasSelector.selectWidth)
  const isSaving = useSelector(canvasSelector.selectIsSaving)

  const toastSuccessSave = () => toast('Success')
  const toastErrorSave = () => toast('Error')

  useEffect(() => {
    dispatch(resetCanvas())
  }, [])

  useEffect(() => {
    if (tool === 'clear') toolService.clearCanvas(ctx, canvasSize)
  }, [tool])

  useEffect(() => {
    if (isSaving) {
      canvasRef.current?.toBlob((blob) => {
        dispatch(
          savingImage({
            blob,
            success: toastSuccessSave,
            error: toastErrorSave,
          })
        )
      })
    }
  })

  const getOffset = (event: React.MouseEvent) => {
    const osParent = canvasRef?.current?.offsetParent
    const left = (event.target as HTMLElement).offsetLeft + (osParent as HTMLElement).offsetLeft
    const top = (event.target as HTMLElement).offsetTop + (osParent as HTMLElement).offsetTop
    return { left, top }
  }

  const mouseDownHandler = (event: React.MouseEvent) => {
    setMouse(true)
    if (!ctx) return
    let url = canvasRef.current ? canvasRef.current?.toDataURL('image/png') : ''
    setDataUrl(url)
    ctx.beginPath()
    const offset = getOffset(event)
    let startX = event.pageX - offset.left
    let startY = event.pageY - offset.top
    ctx.moveTo(startX, startY)
    if (tool === 'pen') {
      const offsetPen = getOffset(event)
      toolService.mouseDownPen(event, offsetPen)
    }
    setStartPos({
      x: startX,
      y: startY,
    })
  }

  const mouseMoveHandler = (event: React.MouseEvent) => {
    if (mouse) {
      const offset = getOffset(event)
      switch (tool) {
        case 'eraser':
          toolService.mouseMoveHandlerBrush(ctx, event, offset, 'white', width)
          break

        case 'pen':
          toolService.mouseMoveHandlerPen(ctx, event, offset, color, 1)
          break

        case 'brush':
          toolService.mouseMoveHandlerBrush(ctx, event, offset, color, width)
          break

        case 'rectangle':
          toolService.mouseMoveHandlerRectangle(
            ctx,
            event,
            startPos,
            offset,
            canvasSize,
            dataUrl,
            color,
            width
          )
          break

        case 'circle':
          toolService.mouseMoveHandlerCircle(
            ctx,
            event,
            startPos,
            offset,
            canvasSize,
            dataUrl,
            color,
            width
          )
          break

        case 'line':
          toolService.mouseMoveHandlerLine(
            ctx,
            event,
            startPos,
            offset,
            canvasSize,
            dataUrl,
            color,
            width
          )
          break

        default:
          break
      }
    }
  }

  const mouseUpHandler = () => {
    setMouse(false)
    if (tool === 'pen') {
      toolService.mouseUpPen()
    }
    ctx?.closePath()
  }

  return (
    <Styles.CanvasContainer>
      <Styles.Canvas
        ref={canvasRef}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        onMouseMove={mouseMoveHandler}
        width={canvasSize.width}
        height={canvasSize.height}
      />
    </Styles.CanvasContainer>
  )
}

export default Canvas
