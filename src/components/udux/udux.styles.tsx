import styled from "styled-components";
import UduxImage from "../../assets/udux-light.jpg";


// styling for the component's background
export const Udux = styled.div`
    background: url(${UduxImage});
    background-position: right top;
    height: 255px;
    width: 68.5%;
    object-fit: cover;
    position: absolute;
    z-index: 398;
    top: 105px;
    left: 31%;

    @media screen and (max-width: 800px) {
        width: 100%;
        height: 159px;
        top: 121px;
        left: 0;
        z-index: 5;
        background-position: right right;
    }

    @media screen and (max-width: 346px) {
        width: 110%;
    }

    @media screen and (max-width: 305px) {
        width: 112%;
    }
`;

// positioning of the udux text
export const Text = styled.span`
    position: absolute;
    top: 38px;
    left: 41px;
    
    @media screen and (max-width: 800px) {
        display: none;
    }
`

// positioning of the omah lay caligraph
export const OmahLay = styled.span`
    position: absolute;
    bottom: 14px;
    right: 33px;

    @media screen and (max-width: 800px) {
        display: none;
    }
`