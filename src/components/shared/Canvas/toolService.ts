export const mouseDownHandlerBrush = (ctx:CanvasRenderingContext2D | null, e) => {
    ctx?.beginPath();
    console.log('mouseDownHandlerBrush',e.pageX - e.target.offsetLeft, 
      e.pageY - e.target.offsetTop);
    ctx?.moveTo(
      e.pageX - e.target.offsetLeft, 
      e.pageY - e.target.offsetTop
    );
}

export const mouseMoveHandlerBrush = (ctx:CanvasRenderingContext2D | null, e) => {
    drawBrush(
        ctx || null,
        e.pageX - e.target.offsetLeft, 
        e.pageY - e.target.offsetTop
    );
}

export const mouseUpHandlerBrush = (ctx:CanvasRenderingContext2D | null, e) => {
    ctx?.closePath();
}

export const drawBrush = (
    ctx:CanvasRenderingContext2D | null, 
    x: number, 
    y: number) => {
        ctx?.lineTo(x,y);
        ctx?.stroke();
}

export const mouseDownHandlerRectangle = (
    ctx:CanvasRenderingContext2D | null, 
    e
) => {
    ctx?.beginPath();
    let startX = e.pageX - e.target.offsetLeft;
    let startY = e.pageY - e.target.offsetTop;
    return { startX, startY }
}

export const mouseMoveHandlerRectangle = (
    ctx:CanvasRenderingContext2D | null, 
    e, 
    startX:number, 
    startY:number,
    canvasWidth: number, 
    canvasHeight:number,
    dataUrl: string
) => {
    let currentX = e.pageX - e.target.offsetLeft;
    let currentY = e.pageY - e.target.offsetTop;
    let width = currentX - startX;
    let height = currentY - startY;
    drawRectangle(
        ctx || null,
        startX, startY, width, height,
        canvasWidth, canvasHeight,
        dataUrl
    );
}

export const mouseUpHandlerRectangle = (
    ctx:CanvasRenderingContext2D | null, 
    e
) => {
    ctx?.closePath();
}

export const drawRectangle = (
    ctx:CanvasRenderingContext2D | null, 
    x: number, 
    y: number, 
    w:number, 
    h:number,
    canvasWidth: number, 
    canvasHeight:number,
    dataUrl: string
) => {
        const img = new Image();
        img.src = dataUrl;
        img.onload = () => {
            ctx?.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx?.drawImage(img, 0, 0, canvasWidth, canvasHeight);
            ctx?.beginPath();
            ctx?.rect(x,y,w,h);
            ctx?.stroke();
        }
        
}