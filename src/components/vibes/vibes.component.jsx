import React from "react";
import { gsap } from "gsap";

import {ReactComponent as ColdOutside} from "../../assets/Rectangle 3546.svg"


import Burna from "../../assets/burna.svg";
import Orange from "../../assets/orange.svg";
import OrangeDown from "../../assets/orange-down.svg";


import AG from "../../assets/Rectangle 3584.png";
import Red from "../../assets/red-sides.svg";
import RedDown from "../../assets/red-down.svg";


import Fave from "../../assets/Rectangle 3584.svg"
import Gradient from "../../assets/Rectangle 3548.svg"
import LinearGradient from "../../assets/Rectangle 3545.svg"


import { Buju, Grad1, Grad2, Grad3, Singers3, Tems, TemsDiv, Vibes } from "./vibes.styles";


const VibesComponent = () => {

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 0.9, cursor: 'pointer' });
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
                <Singers3>
                    <h3>Daily Vibes 1</h3>
                    <p>Burna Boy, Oxlade, Davido, Tems, Wizkid, Tiwa Savage...</p>
                </Singers3>
            </Buju>

            <Buju onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <ColdOutside/>
                <TemsDiv></TemsDiv>
                <Tems src={AG} alt=""/>
                <Grad1 src={Red} alt=""/>
                <Grad2 src={Red} alt=""/>
                <Grad3 src={RedDown} alt=""/>
                <Singers3>
                    <h3>Daily Vibes 2</h3>
                    <p>Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd...</p>
                </Singers3>
            </Buju>


            <Buju onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <ColdOutside/>
                <TemsDiv></TemsDiv>
                <Tems src={Fave} alt=""/>
                <Grad1 src={Gradient} alt=""/>
                <Grad2 src={Gradient} alt=""/>
                <Grad3 src={LinearGradient} alt=""/>
                <Singers3>
                    <h3>Daily Vibes 3</h3>
                    <p>Koffee, Chris Brown, WSTRN, Drake, Future, Burna Boy</p>
                </Singers3>
            </Buju>
        </Vibes>
    );
};

export default VibesComponent;