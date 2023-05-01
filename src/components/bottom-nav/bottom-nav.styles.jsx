import styled from "styled-components";
import BackgroundImage from "../../assets/Vector.svg"


export const Nav = styled.div`
    display: none;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: rgba(20,20,20,0.8);
    background-image: url(${BackgroundImage});

    @media screen and (max-width: 800px) {
        margin-top: 40px;
        display: flex;
        width: 100%;
    }
`