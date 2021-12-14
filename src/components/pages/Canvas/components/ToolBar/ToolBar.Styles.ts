import styled from 'styled-components'

export const ToolBarContainer = styled.div`
  border-bottom: 1px solid black;
  height: 40px;
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 999;
  font-size: 18px;

  & .right {
    margin-left: auto;
  }
`
