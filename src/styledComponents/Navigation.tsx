import  styled, { css } from "styled-components";

const StyledNavigation = styled.div`
    border-bottom:3px solid #98EFC0;
`;

const Navigation = (props) => {
    return <StyledNavigation {...props}/>
}

export default Navigation;