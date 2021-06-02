import React, { useState } from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import logo from './logo.PNG';
import search from './search.PNG';
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



            <div className="nav-div">
                <ul >
                    <img className="ul-1" src={logo} alt="Logo" />
                </ul>
                <ul className="ul-2">
                    <Link to="/">
                        <li className="li-1">Home</li>
                    </Link>
                    <li className="li-2">About</li>
                    <Link to="/covid">
                        <li className="li-3">Covid-19</li>
                    </Link>
                    <Link to='/contact'>
                        <li className="li-4">Contact</li>
                    </Link>

                    <Link to='/profile'>
                        <li className="li-6">{profile ? 'Dashboard' : ''}</li>

                    </Link>


                </ul>
                <ul className="ul-3">
                    <div id="s-d">
                        <input type="search" placeholder="Search" id="search-i" />
                        <img src={search} id="i-s" alt="search" />
                    </div>
                    <li className="li-5" onClick={changeProfile}>{profile ? 'Profile1' : 'Profile2'}</li>
                </ul>
            </div>
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