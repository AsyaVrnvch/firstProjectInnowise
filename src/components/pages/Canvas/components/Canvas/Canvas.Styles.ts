import styled from 'styled-components'

export const CanvasContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Canvas = styled.canvas`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`
