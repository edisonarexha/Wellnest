import React, { useState } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import doctor from './doctor.PNG';
import call from './call.PNG';
import amb from './ambulance.PNG';
import Sikh from './Sickness.png';


function Homepage() {
    const [profile, setProfile] = useState(false)

    const changeProfile = () => {
        setProfile(!profile ? true : false);
    }
    return (

        <div >
            <div className="c-status">

            </div >

            <NavBar />

            <div className="parallax">
                <div id="div-i">


                </div>
                <div id="div-ii">
                    <p id="h2"><b>Wellnest is the first e-health app in Kosovo,</b></p>
                    <p className="p-1">Currently helping patients and doctors all over the country,</p>
                    <p className="p-2">You can help by inviting people to join and be part of the health program</p>
                    <div id="b-d">


                        <Link to='.form'>
                            <button id="b-1">Register</button>

                        </Link>

                    </div>


                </div>
            </div>

            <div id="n-d">

                <div id="d-in1" className="d-in">
                    <img src={call} className="img" alt="call" />
                    <p className="ps1"><b>Emergency Call</b></p>
                    <p className="ps2">192</p>

                </div>
                <div className="d-in">
                    <img src={amb} className="img" alt="call" />
                    <p className="ps1"><b>Ambulance</b></p>
                    <p className="ps2">194</p>

                </div>
                <div className="d-in">
                    <img src={doctor} className="img" alt="call" />
                    <p className="ps1"><b>Call a doctor</b></p>
                    <p className="ps2"> 046-121-212</p>

                </div>


            </div>
            <div id="end-d">
                <div id="in-end">
                    <img src={Sikh} alt="" />
                    <div id="s-div">
                        <span>At the beginning of his essay, Ferrajoli announces that he intends to
                        elaborate a formal definition of the concept of ‘fundamental rights’.‘Fundamental rights’, as we know, is a metajuridical category, as the
                        notion does not belong to the normative lexicon used in any constitutional text, nor in any modern legal system. The term ‘fundamental rights’
                        (Grundrechte) is used generically by several European legal theorists to
                        mean ‘fundamental freedoms’.4 Anglo-American political philosophy, on
                        the other hand – and I am thinking of John Rawls, for example – uses
                        the expression ‘basic liberties’ to describe the tradition that goes from
                        ‘habeas corpus’ to the contemporary liberal democratic constitutions.5
                        Ronald Dworkin also usually expresses himself in terms of ‘rights’ (or,
                         at the most of ‘moral rights’), without any further qualifications</span>
                        <Link to='/sickinfo'>
                            <button id="s-b" >Read more</button>
                        </Link>
                    </div>

                </div>


            </div>

        </div>

    );
}
export default Homepage;