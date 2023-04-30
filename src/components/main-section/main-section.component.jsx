import React from "react";

import SearchBarComponent from "../searchbar/searchbar.component";
import UduxComponent from "../udux/udux.component";
import WelcomeComponent from "../welcome-back/welcome-back.component";
import VibesComponent from "../vibes/vibes.component";
import CheersComponent from "../cheers/cheers.component";

import { Second, Last, Again, Main } from "./main-section.styles";


const MainComponent = () => {
    return (
        <Main>
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
        </Main>
    )
}

export default MainComponent;