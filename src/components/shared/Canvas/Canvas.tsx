import React from "react";
import * as Styles from "./Canvas.Styles";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as canvasSelector from "../../../redux/selectors/canvas";
import * as toolService from "./toolService";
import { savingImage, resetCanvas } from "../../../redux/actions/canvas";

interface IStartPos{
  x: number,
  y: number
}

const Canvas: React.FC = () => {
  const dispatch = useDispatch();

  const canvasRef = useRef <HTMLCanvasElement>(null);
  const ctx: CanvasRenderingContext2D | null = canvasRef.current ? canvasRef.current.getContext('2d') : null;
  const canvasSize = {
    height:500,
    width:500
  };

  const [mouse, setMouse] = useState<boolean>(false);
  const [dataUrl, setDataUrl] = useState<string>('');
  const [startPos, setStartPos] = useState<IStartPos>({ x:0, y:0 });

  const tool = useSelector(canvasSelector.selectTool);
  const color = useSelector(canvasSelector.selectColor);
  const width = useSelector(canvasSelector.selectWidth);
  const isSaving = useSelector(canvasSelector.selectIsSaving);
  
  useEffect(() => {
    dispatch(resetCanvas());
  },[])
  
  useEffect(() => {
    if(isSaving){
      canvasRef.current?.toBlob( blob =>{
        dispatch(savingImage(blob))
      })
    }
  })

  const getOffset = (event: React.MouseEvent) => {
      const osParent = canvasRef?.current?.offsetParent;
      const left = (event.target as HTMLElement).offsetLeft + (osParent as HTMLElement).offsetLeft;
      const top = (event.target as HTMLElement).offsetTop + (osParent as HTMLElement).offsetTop;
      return { left, top }
  }

  const mouseDownHandler = (event: React.MouseEvent) => {
    setMouse(true);
    let url = canvasRef.current ? canvasRef.current?.toDataURL("image/png") : '';
    setDataUrl(url);
    ctx?.beginPath();
    const offset = getOffset(event);
    let startX = event.pageX - offset.left;
    let startY = event.pageY - offset.top;
    ctx?.moveTo(startX, startY);
    setStartPos({
      x:startX,
      y:startY
    })
  }

  const mouseMoveHandler = (event: React.MouseEvent) => {
    if(mouse){ 
      const offset = getOffset(event);
      switch(tool){
        case 'eraser':
          toolService.mouseMoveHandlerBrush(ctx, event, offset, 'white', 5)
          break;

        case 'brush':
          toolService.mouseMoveHandlerBrush(ctx, event, offset, color, width)
          break;

        case 'rectangle':
          toolService.mouseMoveHandlerRectangle(
            ctx, event, 
            startPos, offset, canvasSize,
            dataUrl, color, width
          )
          break;

        case 'circle':
          toolService.mouseMoveHandlerCircle(
            ctx, event, 
            startPos, offset, canvasSize,
            dataUrl, color, width
          )
          break;

        case 'line':
          toolService.mouseMoveHandlerLine(
            ctx, event, 
            startPos, offset, canvasSize,
            dataUrl, color, width
          )
          break;

        default: break;
      }
    }
  }

  const mouseUpHandler = () => {
    setMouse(false);
    ctx?.closePath();
  }

  return (
    <Styles.CanvasContainer 
      width={canvasSize.width}
      height={canvasSize.height}
    >
      <canvas 
        ref={canvasRef}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        onMouseMove={mouseMoveHandler}
        width={canvasSize.width}
        height={canvasSize.height}
      />
    </Styles.CanvasContainer>
  );
};

export default Canvas