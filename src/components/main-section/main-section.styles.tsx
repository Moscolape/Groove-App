import styled from "styled-components";


// additional styling for reused vibe component
export const Second = styled.section`
    position: absolute;
    top: 420px;
    left: 33%;

    @media screen and (max-width: 800px) {
        top: 230px;
    }
`;

// styling for duplicate vibe components along horizontal axis
export const Again = styled.div`
    position: absolute;
    top: 0px;
    left: 106.8%;

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const Last = styled.div`
    position: absolute;
    top: 420px;
    left: 106.8%;

    @media screen and (max-width: 800px) {
        display: none;
    }
`
