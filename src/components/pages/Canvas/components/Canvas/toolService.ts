//BRUSH, ERASER---------------------
export const mouseMoveHandlerBrush = (
  ctx: CanvasRenderingContext2D | null,
  e: React.MouseEvent,
  offset: {
    left: number
    top: number
  },
  color: string,
  widthLine: number
) => {
  if (!ctx) return
  ctx.lineCap = 'round';
  ctx.lineTo(e.pageX - offset.left, e.pageY - offset.top);
  ctx.strokeStyle = color;
  ctx.lineWidth = widthLine;
  ctx.globalAlpha = 1;
  ctx.stroke();
}

//PEN
let ctx2, pointer, points

export const mouseDownPen = (
  e: React.MouseEvent,
  offset: {
    left: number
    top: number
  }
) => {
  points = new Array(10);
  points[0] = [e.pageX - offset.left, e.pageY - offset.top];
  pointer = 0;
}

export const mouseMoveHandlerPen = (
  ctx: CanvasRenderingContext2D | null,
  e: React.MouseEvent,
  offset: {
    left: number
    top: number
  },
  color: string,
  widthLine: number
) => {
  if (!ctx) return
  ctx.lineCap = 'round';
  ctx.strokeStyle = color;
  ctx.lineWidth = widthLine;
  ctx.globalAlpha = 0.1;

  let nextpoint = pointer + 1;
  if (nextpoint > 9) nextpoint = 0;
  ctx.beginPath();
  ctx.moveTo(points[pointer][0], points[pointer][1]);
  ctx.lineTo(e.pageX - offset.left, e.pageY - offset.top);
  if (points[nextpoint]) {
    ctx.moveTo(
      points[nextpoint][0] + Math.round(Math.random() * 10 - 5),
      points[nextpoint][1] + Math.round(Math.random() * 10 - 5)
    );
    ctx.lineTo(e.pageX - offset.left, e.pageY - offset.top);
  }
  ctx.stroke();
  pointer = nextpoint;
  points[pointer] = [e.pageX - offset.left, e.pageY - offset.top];
}

export const mouseUpPen = () => {
  points = new Array(10);
}

//RECTANGLE---------------------
export const mouseMoveHandlerRectangle = (
  ctx: CanvasRenderingContext2D | null,
  e: React.MouseEvent,
  start: { x: number; y: number },
  offset: { left: number; top: number },
  canvasSize: { height: number; width: number },
  dataUrl: string,
  color: string,
  widthLine: number
) => {
  let width = e.pageX - offset.left - start.x;
  let height = e.pageY - offset.top - start.y;
  const img = new Image();
  img.src = dataUrl;
  if (!ctx) return
  img.onload = () => {
    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
    ctx.drawImage(img, 0, 0, canvasSize.width, canvasSize.height);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthLine;
    ctx.rect(start.x, start.y, width, height);
    ctx.stroke();
  }
}

//CIRCLE---------------------
export const mouseMoveHandlerCircle = (
  ctx: CanvasRenderingContext2D | null,
  e: React.MouseEvent,
  start: { x: number; y: number },
  offset: { left: number; top: number },
  canvasSize: { height: number; width: number },
  dataUrl: string,
  color: string,
  widthLine: number
) => {
  let width = e.pageX - offset.left - start.x;
  let height = e.pageY - offset.top - start.y;
  let radius = Math.sqrt(width ** 2 + height ** 2);
  const img = new Image();
  img.src = dataUrl;
  if (!ctx) return
  img.onload = () => {
    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
    ctx.drawImage(img, 0, 0, canvasSize.width, canvasSize.height);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthLine;
    ctx.lineCap = 'round';
    ctx.globalAlpha = 1;
    ctx.arc(start.x, start.y, radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

//LINE---------------------
export const mouseMoveHandlerLine = (
  ctx: CanvasRenderingContext2D | null,
  e: React.MouseEvent,
  start: { x: number; y: number },
  offset: { left: number; top: number },
  canvasSize: { height: number; width: number },
  dataUrl: string,
  color: string,
  widthLine: number
) => {
  let x = e.pageX - offset.left;
  let y = e.pageY - offset.top;
  const img = new Image();
  img.src = dataUrl;
  if (!ctx) return
  img.onload = () => {
    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
    ctx.drawImage(img, 0, 0, canvasSize.width, canvasSize.height);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthLine;
    ctx.lineCap = 'round';
    ctx.globalAlpha = 1;
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

//CLEAR

export const clearCanvas = (
  ctx: CanvasRenderingContext2D | null,
  canvasSize: { height: number; width: number }
) => {
  if (!ctx) return
  ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
}
