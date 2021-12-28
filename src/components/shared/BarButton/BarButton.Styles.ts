import styled from 'styled-components'

interface ButtonProps{
  right?:boolean
}

export const BarButtonContainer = styled.button<ButtonProps>`
  height: 30px;
  width: 30px;
  outline: none; 
  cursor: pointer;
  padding: 0px;
  background: white;
  margin-left: 3px;
  margin-left: ${props => props.right && 'auto'};
  border: none;
`
