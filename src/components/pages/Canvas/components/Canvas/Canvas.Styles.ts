import styled from 'styled-components'

export const CanvasContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
interface CanvasProps{
  width:number, 
  height:number
}

export const Canvas = styled.canvas<CanvasProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`
