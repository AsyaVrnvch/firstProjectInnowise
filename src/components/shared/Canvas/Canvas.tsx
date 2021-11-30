import React from "react";
import * as Styles from "./Canvas.Styles";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { selectTool } from "../../../redux/selectors/canvas";
import * as toolService from "./toolService";

const Canvas: React.FC = () => {
  const canvasRef = useRef <HTMLCanvasElement>(null);
  const [mouse, setMouse] = useState(false);
  const ctx: CanvasRenderingContext2D | null = canvasRef.current ? canvasRef.current.getContext('2d') : null;
  const tool = useSelector(selectTool);
  const [dataUrl, setDataUrl] = useState('');
  const [startPos, setStartPos] = useState({ x:0, y:0 });
  const canvasSize = {
    w:500,
    h:500
  }

  const mouseDownHandler = (e) => {
    setMouse(true);
    switch(tool){
      case 'brush':
        toolService.mouseDownHandlerBrush(ctx, e);
        break;

      case 'rectangle':
        let url = canvasRef.current ? canvasRef.current?.toDataURL() : '';
        setDataUrl(url);
        let pos = toolService.mouseDownHandlerRectangle(ctx, e);
        setStartPos({
          x:pos.startX,
          y:pos.startY
        })
        break;

      default: break;
    }
  }

  const mouseMoveHandler = (e) => {
    if(mouse){
      switch(tool){
        case 'brush':
          toolService.mouseMoveHandlerBrush(ctx, e)
          break;

        case 'rectangle':
          toolService.mouseMoveHandlerRectangle(
            ctx, 
            e, 
            startPos.x, 
            startPos.y, 
            canvasSize.w,
            canvasSize.h,
            dataUrl)
          break;

        default: break;
      }
    }
  }

  const mouseUpHandler = (e) => {
    setMouse(false);
    switch(tool){
        case 'brush':
          toolService.mouseUpHandlerBrush(ctx, e)
          break;

        case 'rectangle':
          toolService.mouseUpHandlerRectangle(ctx, e);
          break;

        default: break;
      }
  }

  return (
    <Styles.CanvasContainer>
      <canvas 
        ref={canvasRef}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        onMouseMove={mouseMoveHandler}
        width={canvasSize.w}
        height={canvasSize.h}
      />
    </Styles.CanvasContainer>
  );
};

export default Canvas