import styled from "styled-components";
import UduxImage from "../../assets/udux.svg";

export const Udux = styled.div`
    background: url(${UduxImage});
    height: 255px;
    width: 68.5%;
    object-fit: cover;
    position: absolute;
    z-index: 400;
    top: 105px;
    left: 310px;

    @media screen and (max-width: 800px) {
        width: 100%;
        height: 159px;
        top: 121px;
        left: 0;
        object-position: right;
        z-index: 5;
    }

    @media screen and (max-width: 346px) {
        width: 110%;
    }

    @media screen and (max-width: 305px) {
        width: 112%;
    }
`;

export const Text = styled.span`
    position: absolute;
    top: 38px;
    left: 41px;
    
    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const OmahLay = styled.span`
    position: absolute;
    bottom: 14px;
    right: 33px;

    @media screen and (max-width: 800px) {
        display: none;
    }
`