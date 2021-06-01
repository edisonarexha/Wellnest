import React, { useState } from 'react';
import './Homepage.css';
import { Slider } from './Slider';
import { SliderImages } from './SilderImages';
import { Link } from 'react-router-dom';
import logo from './logo.PNG';
import nurse from './nurse.png';
import search from './search.PNG';
import doctor from './doctor.PNG';
import call from './call.PNG';
import amb from './ambulance.PNG';


function Homepage() {
    const [profile, setProfile] = useState(false)

    const changeProfile = () => {
        setProfile(!profile ? true : false);
    }
    return (

        <div className="mainDiv">
            <div className="c-status">

            </div>
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
                    <li className="li-4">Contact</li>
                    <li className="li-6">{profile ? 'Dashboard' : ''}</li>


                </ul>
                <ul className="ul-3">
                    <div id="s-d">
                        <input type="search" placeholder="Search" id="search-i" />
                        <img src={search} id="i-s" alt="search" />
                    </div>
                    <li className="li-5" onClick={changeProfile}>{profile ? 'Profile1' : 'Profile2'}</li>
                </ul>
            </div>
            <div id="div-i">
                <img className="MainImg" src={nurse} alt="img" />


            </div>
            <div id="div-ii">
                <p id="h2"><b>Wellnest is the first e-health app in Kosovo,</b></p>
                <p className="p-1">Currently helping patients and doctors all over the country,</p>
                <p className="p-2">You can help by inviting people to join and be part of the health program</p>
                <div id="b-d">
                   
                        <button id="b-1">Register</button>
                    

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
                    <Slider slides={SliderImages} />
                </div>
                <div id="b-div">
                    <ul id="b-ul">
                        <li id="b-li1">{profile ? <p className="b-p1"><b>x</b></p> : ''}</li>
                        <li id="b-li2">{profile ? <img id="b-img" src={require('./pen.png').default} /> : ''}</li>
                        <li id="b-li3">{profile ? <p className="b-p2"><b>+</b></p> : ''}</li>
                    </ul>
                </div>

            </div>

        </div>

    );
}
export default Homepage;