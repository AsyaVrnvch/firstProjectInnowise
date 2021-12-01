//BRUSH---------------------
export const mouseMoveHandlerBrush = (
    ctx:CanvasRenderingContext2D | null, 
    e, 
    color: string,
    widthLine: number
) => {
    drawBrush(
        ctx || null,
        e.pageX - e.target.offsetLeft, 
        e.pageY - e.target.offsetTop,
        color,
        widthLine
    );
}

const drawBrush = (
    ctx:CanvasRenderingContext2D | null, 
    x: number, 
    y: number,
    color: string,
    widthLine: number
) => {
    ctx?.lineTo(x,y);
    if(ctx){
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;
    }
    ctx?.stroke();
}

//RECTANGLE---------------------
export const mouseMoveHandlerRectangle = (
    ctx:CanvasRenderingContext2D | null, 
    e, 
    startX: number, 
    startY: number,
    canvasWidth: number, 
    canvasHeight:number,
    dataUrl: string,
    color: string,
    widthLine: number
) => {
    let currentX = e.pageX - e.target.offsetLeft;
    let currentY = e.pageY - e.target.offsetTop;
    let width = currentX - startX;
    let height = currentY - startY;
    drawRectangle(
        ctx || null,
        startX, startY, width, height,
        canvasWidth, canvasHeight,
        dataUrl,
        color, 
        widthLine
    );
}

const drawRectangle = (
    ctx:CanvasRenderingContext2D | null, 
    x: number, 
    y: number, 
    width: number, 
    height: number,
    canvasWidth: number, 
    canvasHeight: number,
    dataUrl: string,
    color: string,
    widthLine: number
) => {
        const img = new Image();
        img.src = dataUrl;
        img.onload = () => {
            ctx?.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx?.drawImage(img, 0, 0, canvasWidth, canvasHeight);
            ctx?.beginPath();
            if(ctx){
                ctx.strokeStyle = color;
                ctx.lineWidth = widthLine;
            }
            ctx?.rect(x,y,width,height);
            ctx?.stroke();
        }
        
}

//CIRCLE---------------------
export const mouseMoveHandlerCircle = (
    ctx:CanvasRenderingContext2D | null, 
    e, 
    startX: number, 
    startY: number,
    canvasWidth: number, 
    canvasHeight:number,
    dataUrl: string,
    color: string,
    widthLine: number
) => {
    let currentX = e.pageX - e.target.offsetLeft;
    let currentY = e.pageY - e.target.offsetTop;
    let width = currentX - startX;
    let height = currentY - startY;
    let radius = Math.sqrt(width**2+height**2)
    drawCircle(
        ctx || null,
        startX, startY, radius,
        canvasWidth, canvasHeight,
        dataUrl,
        color, 
        widthLine
    );
}

const drawCircle = (
    ctx:CanvasRenderingContext2D | null, 
    x: number, 
    y: number, 
    radius: number,
    canvasWidth: number, 
    canvasHeight: number,
    dataUrl: string,
    color: string,
    widthLine: number
) => {
    const img = new Image();
    img.src = dataUrl;
    img.onload = () => {
        ctx?.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx?.drawImage(img, 0, 0, canvasWidth, canvasHeight);
        ctx?.beginPath();
        if(ctx){
            ctx.strokeStyle = color;
            ctx.lineWidth = widthLine;
        }
        ctx?.arc(x, y, radius, 0, 2*Math.PI);
        ctx?.stroke();
    }
}

//LINE---------------------
export const mouseMoveHandlerLine = (
    ctx:CanvasRenderingContext2D | null, 
    e,
    startX: number, 
    startY: number,
    canvasWidth: number, 
    canvasHeight: number,
    dataUrl: string,
    color: string,
    widthLine: number
) => {
    let x = e.pageX-e.target.offsetLeft;
    let y = e.pageY-e.target.offsetTop;
    drawLine(
        ctx || null, x, y,
        startX, startY,
        canvasWidth, canvasHeight,
        dataUrl, color, widthLine
    );
}

const drawLine = (
    ctx:CanvasRenderingContext2D | null, 
    x: number, 
    y: number,
    startX: number, 
    startY: number, 
    canvasWidth: number, 
    canvasHeight: number,
    dataUrl: string,
    color: string,
    widthLine: number
) => {
    const img = new Image();
    img.src = dataUrl;
    img.onload = () => {
        ctx?.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx?.drawImage(img, 0, 0, canvasWidth, canvasHeight);
        ctx?.beginPath();
        if(ctx){
            ctx.strokeStyle = color;
            ctx.lineWidth = widthLine;
        }
        ctx?.moveTo(startX, startY);
        ctx?.lineTo(x, y);
        ctx?.stroke();
    }
}
