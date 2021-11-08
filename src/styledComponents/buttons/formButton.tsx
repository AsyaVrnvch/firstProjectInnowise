import  styled, { css } from "styled-components";

const StyledFormButton = styled.button`
    background-color:#98EFC0;
    border-radius:5px;
    border:none;
    width:auto;
    margin:7px auto 0px auto;
    padding:4px 10px;
    font-size:20px;
    cursor:pointer;
    display:block;
`;

const FormButton = (props) => {
    return <StyledFormButton {...props}/>
}

export default FormButton;