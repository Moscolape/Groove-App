import React from "react";

import { ReactComponent as HomeIcon } from "../../assets/Group.svg";
import { ReactComponent as DiscoveryIcon } from "../../assets/Group2.svg";

// styled-components imported for this component
import { Discover, Home, Icon, Menu, SecondIcon } from "./main-menu.styles";



const MainMenu = () => {
    return (
        <Menu>
            <Icon><HomeIcon/></Icon>
            <Home>Home</Home>
            <SecondIcon><DiscoveryIcon/></SecondIcon>
            <Discover>Discover</Discover>
        </Menu>
    )
};

export default MainMenu;