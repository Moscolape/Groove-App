import React from "react";
import { gsap } from "gsap";

import UserPhoto from '../../assets/Ellipse 17593userPhoto.png';

// styled-components imported for this component
import { All, Fav, Favourites, Hide, Library, Liked, Line, List, Loud, Played, Playlist, Recent, Search, SecondLine, Sidebar, Song, ThirdIcon, UserDiv, UserPic, UserText } from "./sidebar.styles";


// svgs imported as React Components
import { ReactComponent as LibraryIcon } from "../../assets/discover.svg";
import { ReactComponent as LikeIcon } from "../../assets/🦆 icon _love france heart national culture paris_.svg";
import { ReactComponent as PlayIcon } from "../../assets/played.svg";
import { ReactComponent as PlaylistIcon } from "../../assets/playlist.svg";
import { ReactComponent as Favs } from "../../assets/favsongs.svg";
import { ReactComponent as SearchSong } from "../../assets/search.svg";
import { ReactComponent as GroupLoud } from "../../assets/Grouploud.svg";


// imported external components
import MainMenu from "../main-menu/main-menu.component";
import FavSongs from "../fav-songs/fav-songs.component";



const SideBarComponent: React.FC = () => {

    // gsp animation for the user's photo
    const onHover = ({ currentTarget }: any) => {
        gsap.to(currentTarget, { rotation: 360, cursor: 'pointer' });
    };

    const onLeave = ({ currentTarget }: any) => {
        gsap.to(currentTarget, { rotation: 0, cursor: 'pointer' });
    };

    return (
        <Sidebar>
            <UserDiv>
                <UserPic onMouseOver={onHover} onMouseLeave={onLeave} src={UserPhoto} alt=""/>
                <UserText>Hey! Aleem</UserText>
            </UserDiv>
            <All>
                <MainMenu/>
                <Line></Line>

                <ThirdIcon>{<LibraryIcon/>}</ThirdIcon>
                <Library>Your Library</Library>

                <Song>{<LikeIcon/>}</Song>
                <Liked>Liked Songs</Liked>
                <Loud>{<GroupLoud/>}</Loud>

                <Played>{<PlayIcon/>}</Played>
                <Recent>Recently Played</Recent>

                <List>{<PlaylistIcon/>}</List>
                <Playlist>Create Playlist</Playlist>

                <Fav>{<Favs/>}</Fav>
                <Favourites>My Playlists</Favourites>
                <Search>{<SearchSong/>}</Search>

                <SecondLine></SecondLine>
                <FavSongs/>
                
                <Hide></Hide>
            </All>
        </Sidebar>
    );
};


export default SideBarComponent;