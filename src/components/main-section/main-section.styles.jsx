import styled from "styled-components";

export const Second = styled.section`
    position: absolute;
    top: 420px;

    @media screen and (max-width: 800px) {
        top: 230px;
    }
`;

export const Again = styled.div`
    position: absolute;
    top: 0px;
    left: 74.5%;

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const Last = styled.div`
    position: absolute;
    top: 420px;
    left: 74.5%;

    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const Main = styled.div`
    overflow-x: hidden;
`

// export const Flex = styled.div`
    
//     ::-webkit-scrollbar {
//         width: 1px;             
//     }

//     ::-webkit-scrollbar-track {
//         background: #FBBA12;
//     }

//     ::-webkit-scrollbar-thumb {
//         background-color: black;    
//         border-radius: 10px;       
//         border: 1px solid #FBBA12;  
//     }
// `