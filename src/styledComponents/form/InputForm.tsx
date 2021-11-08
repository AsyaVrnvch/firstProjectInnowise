import styled, { css } from "styled-components";

const StyledInputForm = styled.input`
    width:100%;
    font-size:18px;
    border-radius:7px;
    border:1px solid black;
    padding:5px;
    font-family:Calibri;
    margin:3px auto 3px auto;
`;

const InputForm = ( props ) =>{
    return <StyledInputForm {...props}/>
}

export default InputForm;
