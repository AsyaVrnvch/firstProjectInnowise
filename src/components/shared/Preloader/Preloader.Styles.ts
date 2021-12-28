import styled from 'styled-components'
import { spinnerAnimation } from './animation'

export const PreloaderContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 20;
`

export const Spinner = styled.span`
  margin: 35% auto;
  width: 7rem;
  height: 7rem;
  border-width: 10px;
  border-top-color: #98efc0;
  border-left-color: #98efc0;
  animation: ${spinnerAnimation} 1s linear infinite;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  display: block; 
`
