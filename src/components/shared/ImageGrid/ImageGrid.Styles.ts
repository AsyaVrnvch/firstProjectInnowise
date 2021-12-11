import styled from "styled-components";

export const ImageGridContainer = styled.div`
    margin: 20px auto;     
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(200px,1fr));  
    grid-gap: 1rem;

    .username{
        font-size: 18px;
        display: block;
        margin: 0px;
    }
`;