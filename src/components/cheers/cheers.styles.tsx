import styled from "styled-components";

import '../../fonts/BwModelica-Light.woff';

// styling for cheers component
export const CheersDiv = styled.header`
    color: white;
    position: absolute;
    left: 33%;
    top: 815px;
    font-family: 'Bw Modelica';

    @media screen and (max-width: 800px) {
        font-size: 12px;
        left: 16px;
        top: 530px;
    }
`