import React from "react";
import { Paragraph, Span } from "./fav-songs.styles";


const FavSongs = () => {

    const FavouriteMusic = ['Riffs & Runs','African Heat','Gidi Nights', 'Running out of Playlist names...', 'Saturday was a Good Day', 'Gidi Nights', 'Riffs & Runs','African Heat','Gidi Nights', 'Running out of Playlist names...', 'Saturday was a Good Day', 'Gidi Nights']


    return (
        <Span>
            {FavouriteMusic.map((item, index) => <Paragraph key={index}>{item}</Paragraph>)}
        </Span>
    )
};

export default FavSongs;