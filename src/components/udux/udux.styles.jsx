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
`;

export const Text = styled.span`
    position: absolute;
    top: 38px;
    left: 41px;
`

export const OmahLay = styled.span`
    position: absolute;
    bottom: 14px;
    right: 33px;
`