import styled from "styled-components";

export const PhotoFormContainer = styled.div`
  width: 100px;
  position: relative;

  & img{
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background: white;
  }

  & button.plus{
    z-index: 9999;
    background-color: white;
    border-radius: 50%;
    font-size: 20px;
    border: 1px solid black;
    position: absolute;
    cursor: pointer;
    bottom: 8px;
    right: 2px;
  }

  & .plus label{
    z-index: 9999;
    position: absolute;
    cursor: pointer;
    bottom: 13px;
    right: 2px;
  }
`;

export const DropdownContainer = styled.div`
  margin: 0px auto;
  text-align:center;
  & label{
    border:1px solid black;
    display: block;
    margin:10px auto;
    width: 25px;
    height:25px;
    border-radius:50%;
    line-height:25px;
    background-color: white;
  }
  & label input{
    width: 0px;
    height:0px;
    opacity: 0;
  }
  & label:hover{
    background-color: #98efc0;
    border:1px solid #98efc0;
  }
  & div.output{
    height:20px;
    font-size:18px;
  }  
`