import React from "react";
import { gsap } from "gsap";

import {ReactComponent as ColdOutside} from "../../assets/Rectangle 3546.svg"

// svg images imported for the BurnaBoy component
import Burna from "../../assets/burna.svg";
import Orange from "../../assets/orange.svg";
import OrangeDown from "../../assets/orange-down.svg";


// svg images imported for the Adekunle Gold component
import AG from "../../assets/Rectangle 3584.png";
import Red from "../../assets/red-sides.svg";
import RedDown from "../../assets/red-down.svg";


// svg images imported for the WeOutside component
import Fave from "../../assets/Rectangle 3584.svg"
import Gradient from "../../assets/Rectangle 3548.svg"
import LinearGradient from "../../assets/Rectangle 3545.svg"


// styled-components imported for this component
import { Buju, Grad1, Grad2, Grad3, Singers, Tems, TemsDiv, Vibes } from "./vibes.styles";


const VibesComponent = () => {

    // gsap animation applicable to each of the music components
    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 0.95, cursor: 'pointer' });
    };

    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1 });
    };

    return (
        <Vibes>
            <Buju onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <ColdOutside/>
                <TemsDiv></TemsDiv>
                <Tems src={Burna} alt=""/>
                <Grad1 src={Orange} alt=""/>
                <Grad2 src={Orange} alt=""/>
                <Grad3 src={OrangeDown} alt=""/>
                <Singers>
                    <h3>Daily Vibes 1</h3>
                    <p>Burna Boy, Oxlade, Davido, Tems, Wizkid, Tiwa Savage...</p>
                </Singers>
            </Buju>

            <Buju onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <ColdOutside/>
                <TemsDiv></TemsDiv>
                <Tems src={AG} alt=""/>
                <Grad1 src={Red} alt=""/>
                <Grad2 src={Red} alt=""/>
                <Grad3 src={RedDown} alt=""/>
                <Singers>
                    <h3>Daily Vibes 2</h3>
                    <p>Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd...</p>
                </Singers>
            </Buju>


            <Buju onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <ColdOutside/>
                <TemsDiv></TemsDiv>
                <Tems src={Fave} alt=""/>
                <Grad1 src={Gradient} alt=""/>
                <Grad2 src={Gradient} alt=""/>
                <Grad3 src={LinearGradient} alt=""/>
                <Singers>
                    <h3>Daily Vibes 3</h3>
                    <p>Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy</p>
                </Singers>
            </Buju>
        </Vibes>
    );
};

export default VibesComponent;