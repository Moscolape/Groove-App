import styled from "styled-components";

// styled-component created to hide the whole div on mobile view
export const SearchBar = styled.div`
    @media screen and (max-width: 800px) {
        display: none;
    }
`;


// left and right  arrow
export const Arrow1 = styled.span`
    position: absolute;
    top: 28px;
    left: 305px;
`

export const Arrow2 = styled.span`
    position: absolute;
    top: 28px;
    left: 361px;
`

// styled-component encapsulating the search icon
export const Search = styled.span`
    position: absolute;
    top: 40px;
    left: 500px;
    display: block;
`

// search input
export const SearchIt = styled.input`
    width: 300px;
    height: 56px;
    position: absolute;
    top: 20px;
    left: 483px;
    background: none;
    color: #D9D9D9;
    font-family: 'Bw Modelica';
    font-size: 18px;
    outline: none;
    border: 1px solid #0f0f0f;
    padding-left: 16px;
`;