import React from "react";
import { gsap } from "gsap";

// styled-components imported for this component
import { Paragraph, Span } from "./fav-songs.styles";


const FavSongs: React.FC = () => {

    // array of favourite songs
    const FavouriteMusic = ['Riffs & Runs','African Heat','Gidi Nights', 'Running out of Playlist names...', 'Saturday was a Good Day', 'Gidi Nights', 'Riffs & Runs','African Heat','Gidi Nights', 'Running out of Playlist names...', 'Saturday was a Good Day', 'Gidi Nights']

    // gsap functions for animation
    const onEnter = ({ currentTarget }: any) => {
        gsap.to(currentTarget, { color: '#FBBA12', cursor: 'pointer' });
    };

    const onLeave = ({ currentTarget }: any) => {
        gsap.to(currentTarget, { color: '#D9D9D9' });
    };


    return (
        <Span>
            {FavouriteMusic.map((item, index) => 
                <Paragraph 
                onMouseEnter={onEnter} 
                onMouseLeave={onLeave} 
                key={index}
                >
                    {item}
                </Paragraph>
                )}
        </Span>
    )
};

export default FavSongs;