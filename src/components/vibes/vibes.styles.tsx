import styled from "styled-components";


// styling applicable to each of the music components
export const Buju = styled.div`
    position: relative;
    width: 226px;
    height: 285px;
    margin-right: 24px;
`

export const Vibes = styled.div`
    display: flex;
    position: absolute;
    top: 484px;
    left: 32%;
    padding-bottom: 100px;
    overflow-x: hidden;

    @media screen and (max-width: 800px) {
        transform: scale(0.45);
        left: -190px;
        top: 260px;
    }

    @media screen and (max-width: 319px) {
        transform: scale(0.42);
    }

    @media screen and (max-width: 290px) {
        left: -200px;
    }
`

export const Tems = styled.img`
    position: absolute;
    left: 31px;
    bottom: 100px;
`
export const Grad1 = styled.img`
    position: absolute;
    left: 0px;
    bottom: 14px;
`

export const Grad2 = styled.img`
    position: absolute;
    right: 0px;
    bottom: 14px;
`

export const Grad3 = styled.img`
    position: absolute;
    right: 0px;
    bottom: 13px;
`

export const TemsDiv = styled.div`
    position: absolute;
    left: 19px;
    top: 14px;
    width: 186px;
    height: 182px;
    border: 1px solid #707070;
`

export const Singers = styled.div`
    position: absolute;
    bottom: 8px;
    left: 21px;
    color: #ffffff;
    width: 178px;
    font-family: 'Bw Modelica';

    h3 {
        font-size: 16px;
    }

    p {
        font-size: 12px;
    }
`