import styled from "styled-components";
import BackgroundImage from "../../assets/Vector.svg"


// mobile view styling for bottom navigation
export const Nav = styled.div`
    display: none;

    @media screen and (max-width: 800px) {
        width: 100%;
        height: 100px;
        background: rgba(20,20,20,0.8);
        background-image: url(${BackgroundImage});
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        bottom: 0;
        margin-top: 40px;
    }
`