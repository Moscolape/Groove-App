import React from "react";
import { gsap } from "gsap";

import { Arrow1, Arrow2, Search, SearchBar, SearchIt } from "./searchbar.styles";

import {ReactComponent as LeftArrow} from "../../assets/Group 3512.svg";
import {ReactComponent as RightArrow} from "../../assets/Group 3513.svg";
import { ReactComponent as SearchSong } from "../../assets/search.svg";


const SearchBarComponent = () => {

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1.2, cursor: 'pointer' });
    };

    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1 });
    };

    return (
        <SearchBar>
            <Arrow1  onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <LeftArrow/>
            </Arrow1>

            <Arrow2  onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <RightArrow/>
            </Arrow2>

            <SearchIt />

            <Search>
                <SearchSong/>
            </Search>
        </SearchBar>
    )
};

export default SearchBarComponent;