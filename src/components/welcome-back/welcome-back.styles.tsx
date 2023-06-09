import styled from "styled-components";

import '../../fonts/BwModelica-Light.woff';

// styling for welcome component
export const WelcomeDiv = styled.header`
    color: white;
    position: absolute;
    left: 33%;
    top: 396px;
    font-family: 'Bw Modelica';

    @media screen and (max-width: 800px) {
        font-size: 14px;
        left: 16px;
        top: 299px;
    }
`