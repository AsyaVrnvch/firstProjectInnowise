import styled, { css } from "styled-components";

const StyledLabelForm = styled.label`
    font-size:22px;
    margin-top:5px;
    display:block;
`;

const LabelForm = ( props ) =>{
    return <StyledLabelForm {...props}/>
}

export default LabelForm;
