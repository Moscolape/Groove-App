import React from "react";

// styled-component imported for this component
import { WelcomeDiv } from "./welcome-back.styles";

// welcome component
const WelcomeComponent: React.FC = () => {
    return(
        <WelcomeDiv>
            <h2>Welcome Back!</h2>
        </WelcomeDiv>
    )
};

export default WelcomeComponent;