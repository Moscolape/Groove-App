import React from "react";
import { OmahLay, Text, Udux } from "./udux.styles";

// svgs imported as React components
import {ReactComponent as TextIcon} from "../../assets/Text.svg";
import {ReactComponent as Laycons} from "../../assets/Omah Lay Name Tag-min 1.svg";


const UduxComponent: React.FC = () => {
    return (
        <Udux>
            <Text>
                <TextIcon/>
            </Text>
            <OmahLay>
                <Laycons/>
            </OmahLay>
        </Udux>
    )
};

export default UduxComponent;