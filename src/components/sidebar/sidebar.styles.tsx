import styled from "styled-components";
import BackgroundImage from "../../assets/Vector.svg"


// styling for the entire sidebar
export const Sidebar = styled.div`
    height: 100vh;
    background-image: url(${BackgroundImage});
    width: 29.5%;
    position: fixed;
    z-index: 300;

    @media screen and (max-width: 800px) {
        background-image: none;
    }
`

// styling for user div component
export const UserPic = styled.img`
    position: relative;
    width: 62px;
    height: 62px;
    left: 31px;
    top: 18px;

    @media screen and (max-width: 800px) {
        left: 23px;
        top: 21px;
        width: 49px;
        height: 49px;
    } 
`

export const UserText = styled.span`
    position: absolute;
    right: 89px;
    top: 39px;
    font-family: 'Bw Modelica';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #D9D9D9;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`

export const UserDiv = styled.div`
    box-sizing: border-box;
    
    position: fixed;
    z-index: 10;
    width: 29.5%;
    height: 97px;
    left: 0px;
    top: 0px;
    
    background: #0F0F0F;

    @media screen and (max-width: 800px) {
        width: 100%;
        height: 83px;
    }
`

// styling for everything under the All component
export const ThirdIcon = styled.span`
    position: relative;
    top: 142px;
    left: 32px;
`

export const Song = styled.span`
    position: relative;
    top: 180px;
    right: 78px;
`

export const Played = styled.span`
    position: relative;
    top: 140px;
    left: 12px;
`

export const Fav = styled.span`
    position: relative;
    top: 120px;
    left: 32px;
`

export const List = styled.span`
    position: relative;
    top: 103px;
    left: 34px;
`

export const Search = styled.span`
    position: relative;
    top: 48px;
    left: 250px;
`

export const Loud = styled.span`
    position: relative;
    top: 105px;
    left: 170px;
`

export const All = styled.div`
    overflow-x: hidden;
    overflow-y: auto;

    height: 100vh;

    ::-webkit-scrollbar {
        width: 1px;             
    }

    ::-webkit-scrollbar-track {
        background: #FBBA12;
    }

    ::-webkit-scrollbar-thumb {
        background-color: black;    
        border-radius: 10px;       
        border: 1px solid #FBBA12;  
    }

    @media screen and (max-width: 800px) {
        display: none;
    }
`

export const Line = styled.div`
    border: 0.5px solid #282828;
    width: 231px;
    position: relative;
    top: 111px;
    left: 30px;
`

export const Library = styled.span`
    position: relative;
    top: 140px;
    left: 50px;

    font-family: 'Bw Modelica';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #D9D9D9;
`

export const Liked = styled.p`
    position: relative;
    top: 140px;
    padding-left: 67px;

    font-family: 'Bw Modelica';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #FBBA12;
`

export const Recent = styled.p`
    position: relative;
    top: 100px;
    padding-left: 67px;

    font-family: 'Bw Modelica';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #D9D9D9;
`

export const Playlist = styled.p`
    position: relative;
    top: 65px;
    padding-left: 67px;

    font-family: 'Bw Modelica';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #D9D9D9;
`

export const Favourites = styled.p`
    position: relative;
    top: 80px;
    left: 67px;

    font-family: 'Bw Modelica';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #D9D9D9;
`

export const SecondLine = styled.div`
    border: 0.5px solid #282828;
    width: 231px;
    position: relative;
    top: 65px;
    left: 30px;
`

export const Hide = styled.div`
    width: 100%;
    height: 50px;
    visibility: hidden;
    position: relative;
    top: 100px;
`