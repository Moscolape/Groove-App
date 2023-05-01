import React from "react";

// import components that lie on the main section
import SearchBarComponent from "../searchbar/searchbar.component";
import UduxComponent from "../udux/udux.component";
import WelcomeComponent from "../welcome-back/welcome-back.component";
import VibesComponent from "../vibes/vibes.component";
import CheersComponent from "../cheers/cheers.component";
import BottomNav from '../bottom-nav/bottom-nav.component';


// styled-components imported for this component
import { Second, Last, Again } from "./main-section.styles";


const MainComponent = () => {
    return (
        <>
            <SearchBarComponent/>
            <UduxComponent/>
            <WelcomeComponent/>
            <div>
                <VibesComponent/>
                <Again>
                    <VibesComponent/>
                </Again>
            </div>
            <CheersComponent/>
            <div>
                <Second>
                    <VibesComponent/>
                </Second>
                <Last>
                    <VibesComponent/>
                </Last>
            </div>
            <BottomNav/>
        </>
    )
}

export default MainComponent;