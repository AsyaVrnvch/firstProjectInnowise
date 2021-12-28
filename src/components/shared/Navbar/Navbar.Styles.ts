import styled from 'styled-components'

interface NavBarProps{
  right?:boolean
}

export const NavbarLinkContainer = styled.button<NavBarProps>`
  margin: 10px;
  padding: 4px 10 px;
  border: none;
  font-size: 25px;
  font-family: inherit;
  cursor: pointer;
  background-color: #434d65;
  text-decoration: none;
  margin-left: ${props => props.right && 'auto'};

  & :hover {
    background-color: #a1b1d7;
    border-radius: 5px;
    * {
      color: black;
    } 
  }
  * {
    color: white;
    text-decoration: none;
  } 
`

export const NavbarContainer = styled.div`
  border-bottom: 3px solid #98efc0;
  display: flex;
  width: 100%;
  align-items: center;
`
