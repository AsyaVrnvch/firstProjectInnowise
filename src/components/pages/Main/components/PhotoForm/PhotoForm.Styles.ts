import styled from 'styled-components'

export const PhotoFormContainer = styled.div`
  width: 100px;
  position: absolute;
  right: 1rem;
  top: 1rem;
`

export const Image = styled.img`
  border-radius: 50%; 
  width: 100px;
  height: 100px;
  background: white;
`

export const Dropdown = styled.div`
  margin: 0px auto;
  text-align: center;
`

export const Label = styled.label`
  border: 1px solid black;
  display: block;
  margin: 10px auto;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  line-height: 24px;
  background-color: white;
  z-index: 9000;
  position: absolute;
  cursor: pointer;
  bottom: 0px;
  right: 0px;
  :hover {
    background-color: #98efc0;
    border: 1px solid #98efc0;
  }
`

export const ErrorOutput = styled.div`
  height: 20px;
  font-size: 18px;
`

export const Input = styled.input`
  width: 0px;
  height: 0px;
  opacity: 0;
`
