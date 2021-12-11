import styled from "styled-components";

export const CanvasContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    canvas {
        width: ${props => props.width};
        height: ${props => props.height};
    }
    
`;