import  styled, { css } from "styled-components";

const StyledNavbarButton = styled.button`
    align-items:center;
    width:auto;
    margin:10px;
    padding:4px 10 px;
    border:none;
    font-size:25px;
    cursor:pointer;
    color:black;
    background-color:white;
    text-decoration:none;
    :hover{
        background-color:#98EFC0;
        border-radius:5px;
    }
    & *{
        color:black;
        text-decoration:none;
    }

`;

const NavbarButton = (props) => {
    return <StyledNavbarButton {...props}/>
}

export default NavbarButton;