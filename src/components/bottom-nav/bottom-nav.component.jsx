import React from "react";


import { ReactComponent as HomeIcon } from "../../assets/Group.svg";
import { ReactComponent as DiscoveryIcon } from "../../assets/Group2.svg";
import { ReactComponent as LibraryIcon } from "../../assets/discover.svg";
import { ReactComponent as Favs } from "../../assets/favsongs.svg";


import { Nav } from "./bottom-nav.styles";


const BottomNav = () => {
    return (
        <Nav>
            <HomeIcon />
            <DiscoveryIcon/>
            <LibraryIcon/>
            <Favs/>
        </Nav>
    )
};

export default BottomNav;