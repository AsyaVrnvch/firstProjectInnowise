import  styled from "styled-components";

const StyledError = styled.p`
    color:red;
    font-size:15px;
    margin:0px;
`;

const Error = (props) => {
    return <StyledError {...props}/>
}

export default Error;