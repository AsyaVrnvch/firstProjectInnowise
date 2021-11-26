import styled from "styled-components";

export const PhotoFormContainer = styled.div`
  border:1px solid black;
  margin: 30px auto 10px;
  text-align:center;

  & label{
    border:1px solid black;
    display: block;
    margin:10px auto;
    width: 40px;
    height:40px;
    border-radius:50%;
    line-height:40px;
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
    height:60px;
    font-size:18px;
  }  
  
`;