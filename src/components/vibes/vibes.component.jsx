import React from "react";


import {ReactComponent as AGbaby} from "../../assets/adekunle gold.svg"
import {ReactComponent as BurnaBoy} from "../../assets/burna boy.svg"
import {ReactComponent as ColdOutside} from "../../assets/Rectangle 3546.svg"


import AG from "../../assets/Rectangle 3584.png";
import Giant from "../../assets/Giant.png";
import Fave from "../../assets/Rectangle 3584.svg"
import Gradient from "../../assets/Rectangle 3548.svg"
import LinearGradient from "../../assets/Rectangle 3545.svg"


import { Adekunle, Africa, Buju, Gold, Grad1, Grad2, Grad3, OluwaGbona, Pic1, Pic2, Singers1, Singers2, Singers3, Tems, TemsDiv, Vibes } from "./vibes.styles";


const VibesComponent = () => {

    return (
        <Vibes>
            <OluwaGbona>
                <BurnaBoy/>
            </OluwaGbona>
            <Pic1>
                <Africa src={Giant} alt=""/>
            </Pic1>
            <Singers1>
                <h3>Daily Vibes 1</h3>
                <p>Burna Boy, Oxlade, Davido, Tems, Wizkid, Tiwa Savage...</p>
            </Singers1>

            <div>
                <Gold>
                    <AGbaby/>
                </Gold>
                <Pic2>
                    <Adekunle src={AG} alt=""/>
                </Pic2>
                <Singers2>
                    <h3>Daily Vibes 2</h3>
                    <p>Lojay, Oxlade, Amaa Rae, Rema, Omah Lay, SGawd...</p>
                </Singers2>
            </div>


            <Buju>
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