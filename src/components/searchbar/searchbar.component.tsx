import React from "react";
import { useState } from "react";

import { gsap } from "gsap";

// styled-components imported for this component
import { Arrow1, Arrow2, Search, SearchBar, SearchIt } from "./searchbar.styles";

// svgs imported as React components from Figma file
import {ReactComponent as LeftArrow} from "../../assets/Group 3512.svg";
import {ReactComponent as RightArrow} from "../../assets/Group 3513.svg";
import { ReactComponent as SearchSong } from "../../assets/search.svg";


const SearchBarComponent: React.FC = () => {

    // code block handling a little search input functionality
    const [isFocused, setIsFocused] = useState(false);

    function removeSearchIcon () {
        setIsFocused(true);
    }

    function addSearchIcon (e: any) {
        if(e.target.value === "") {
            setIsFocused(false);
        }
    }

    // gsap animation for the next and previuos buttons
    const onEnter = ({ currentTarget }: any) => {
        gsap.to(currentTarget, { scale: 1.2, cursor: 'pointer' });
    };

    const onLeave = ({ currentTarget }: any) => {
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

            <SearchIt onFocus={removeSearchIcon} onBlur={addSearchIcon}/>

            <Search style={{display: isFocused ? 'none' : 'block'}}>
                <SearchSong/>
            </Search>
        </SearchBar>
    )
};

export default SearchBarComponent;