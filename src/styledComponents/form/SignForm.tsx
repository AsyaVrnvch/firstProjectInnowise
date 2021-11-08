import  styled, { css } from "styled-components";

const StyledForm = styled.div`
    border-radius:5px;
    margin:15px auto;
    display:block;
    width:50%;
    padding:20px;
    text-align:left;
    border:1px solid black;
    padding-top:0px;
`;

const Form = ( props ) =>{
    return <StyledForm {...props}/>
}

export default Form;
