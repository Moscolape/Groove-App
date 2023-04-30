import React from "react";
import { Arrow1, Arrow2, Search, SearchBar, SearchIt } from "./searchbar.styles";

import {ReactComponent as LeftArrow} from "../../assets/Group 3512.svg";
import {ReactComponent as RightArrow} from "../../assets/Group 3513.svg";
import { ReactComponent as SearchSong } from "../../assets/search.svg";


const SearchBarComponent = () => {
    return (
        <SearchBar>
            <Arrow1>
                <LeftArrow/>
            </Arrow1>

            <Arrow2>
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