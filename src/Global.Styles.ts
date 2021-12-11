import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
  }

  body{
    margin: 0px;
    padding: 0px;
    font-size: 22px;
    box-sizing: border-box;
    font-family: "Calibri Light";
    background-color: #434d65;
    height: 100%;

    #root{
       height: 100%;

       & > div{
         height: 100%;

         div.content{
          background-color: #a1b1d7;
          width: 60%;
          min-width: 510px;
          min-height: 100%;
          margin: 0px auto;
          border-left: 1px solid black;
          border-right: 1px solid black;
          padding: 10px;
          position: relative;
        }
       }
    }
  }
  
`;
