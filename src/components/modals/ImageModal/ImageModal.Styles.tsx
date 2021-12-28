import styled from 'styled-components'

export const ImageModalContainer = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`

export const Div = styled.div`
  max-width: 40%;
  max-height: 90%;
  margin: 60px auto;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
  border: 3px solid #a1b1d7;
  background: white;
`

export const Img = styled.img`
  display: block;
  width: 100%;
  border-bottom: 3px solid #a1b1d7;
  background: white;
`

export const Span = styled.span`
  display: block;
  font-size: 20px;
`