import React from "react";
import UserPhoto from '../../assets/Ellipse 17593userPhoto.png';
import { All, Fav, Favourites, Hide, Library, Liked, Line, List, Loud, Played, Playlist, Recent, Search, SecondLine, Sidebar, Song, ThirdIcon, UserDiv, UserPic, UserText } from "./sidebar.styles";

import { ReactComponent as LibraryIcon } from "../../assets/discover.svg";
import { ReactComponent as LikeIcon } from "../../assets/🦆 icon _love france heart national culture paris_.svg";
import { ReactComponent as PlayIcon } from "../../assets/played.svg";
import { ReactComponent as PlaylistIcon } from "../../assets/playlist.svg";
import { ReactComponent as Favs } from "../../assets/favsongs.svg";
import { ReactComponent as SearchSong } from "../../assets/search.svg";
import { ReactComponent as GroupLoud } from "../../assets/Grouploud.svg";

import MainMenu from "../main-menu/main-menu.component";
import FavSongs from "../fav-songs/fav-songs.component";



const SideBarComponent = () => {
    return (
        <Sidebar>
            <UserDiv>
                <UserPic src={UserPhoto} alt=""/>
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