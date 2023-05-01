import React from "react";

// Add navigation icons for mobile view
import { ReactComponent as HomeIcon } from "../../assets/Group.svg";
import { ReactComponent as DiscoveryIcon } from "../../assets/Group2.svg";
import { ReactComponent as LibraryIcon } from "../../assets/discover.svg";
import { ReactComponent as Favs } from "../../assets/favsongs.svg";

// styled-component imported for this component
import { Nav } from "./bottom-nav.styles";

// This components is for mobile view only
const BottomNav: React.FC = () => {
    return (
        <Nav>
            <HomeIcon/>
            <DiscoveryIcon/>
            <LibraryIcon/>
            <Favs/>
        </Nav>
    )
};

export default BottomNav;