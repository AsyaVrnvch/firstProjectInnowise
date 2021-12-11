//BRUSH, ERASER---------------------
export const mouseMoveHandlerBrush = (
    ctx:CanvasRenderingContext2D | null, 
    e: React.MouseEvent, 
    offset:{ 
        left:number,
        top: number
    },
    color: string,
    widthLine: number
) => {
    if(!ctx) return 
    ctx.lineCap="round";
    ctx.lineTo(e.pageX - offset.left, e.pageY - offset.top);
    if(ctx){
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;
    }
    ctx.stroke();
}

//RECTANGLE---------------------
export const mouseMoveHandlerRectangle = (
    ctx:CanvasRenderingContext2D | null, 
    e: React.MouseEvent,  
    start: { x: number, y: number },
    offset:{ left:number, top: number },
    canvasSize: { height: number, width: number },
    dataUrl: string,
    color: string,
    widthLine: number
) => {
    let width = e.pageX - offset.left - start.x;
    let height = e.pageY - offset.top - start.y;
    
    const img = new Image();
    img.src = dataUrl;
    img.onload = () => {
        ctx?.clearRect(0, 0, canvasSize.width, canvasSize.height);
        ctx?.drawImage(img, 0, 0, canvasSize.width, canvasSize.height,);
        ctx?.beginPath();
        if(ctx){
            ctx.strokeStyle = color;
            ctx.lineWidth = widthLine;
        }
        ctx?.rect(start.x, start.y,width,height);
        ctx?.stroke();
    }
}

//CIRCLE---------------------
export const mouseMoveHandlerCircle = (
    ctx:CanvasRenderingContext2D | null, 
    e: React.MouseEvent,  
    start: { x: number, y: number },
    offset:{ left:number, top: number },
    canvasSize: { height: number, width: number },
    dataUrl: string,
    color: string,
    widthLine: number
) => {
    let width = e.pageX - offset.left - start.x;
    let height = e.pageY - offset.top - start.y;
    let radius = Math.sqrt(width**2+height**2);

    const img = new Image();
    img.src = dataUrl;
    if(!ctx) return 
    img.onload = () => {
        ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
        ctx.drawImage(img, 0, 0, canvasSize.width, canvasSize.height);
        ctx.beginPath();
        if(ctx){
            ctx.strokeStyle = color;
            ctx.lineWidth = widthLine;
        }
        ctx.lineCap="round";
        ctx.arc(start.x, start.y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}

//LINE---------------------
export const mouseMoveHandlerLine = (
    ctx:CanvasRenderingContext2D | null, 
    e: React.MouseEvent, 
    start: { x: number, y: number },
    offset:{ left:number, top: number },
    canvasSize: { height: number, width: number },
    dataUrl: string,
    color: string,
    widthLine: number
) => {
    let x = e.pageX - offset.left;
    let y = e.pageY - offset.top;

    const img = new Image();
    img.src = dataUrl;
    if(!ctx) return 
    img.onload = () => {
        ctx.clearRect(0, 0, canvasSize.width, canvasSize.height,);
        ctx.drawImage(img, 0, 0, canvasSize.width, canvasSize.height);
        ctx.beginPath();
        if(ctx){
            ctx.strokeStyle = color;
            ctx.lineWidth = widthLine;
        }
        ctx.lineCap="round";
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}
