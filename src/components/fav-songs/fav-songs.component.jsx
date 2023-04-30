import React from "react";
import { gsap } from "gsap";

import { Paragraph, Span } from "./fav-songs.styles";


const FavSongs = () => {

    const FavouriteMusic = ['Riffs & Runs','African Heat','Gidi Nights', 'Running out of Playlist names...', 'Saturday was a Good Day', 'Gidi Nights', 'Riffs & Runs','African Heat','Gidi Nights', 'Running out of Playlist names...', 'Saturday was a Good Day', 'Gidi Nights']

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { color: '#FBBA12', cursor: 'pointer' });
    };

    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { color: '#D9D9D9' });
    };


    return (
        <Span>
            {FavouriteMusic.map((item, index) => <Paragraph onMouseEnter={onEnter} onMouseLeave={onLeave} key={index}>{item}</Paragraph>)}
        </Span>
    )
};

export default FavSongs;