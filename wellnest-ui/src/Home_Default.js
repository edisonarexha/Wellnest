import React, { useState } from 'react';
import './Views/Homepage/Homepage.css';
import { Slider } from './Views/Homepage/Slider';
import { SliderImages } from './Views/Homepage/SilderImages';
import logo from './Views/Homepage/logo.PNG';
import nurse from './Views/Homepage/nurse.png';
// import search from './Views/Homepage/search.PNG';
import doctor from './Views/Homepage/doctor.PNG';
import call from './Views/Homepage/call.PNG';
import amb from './Views/Homepage/ambulance.PNG';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export function Home_Default() {

    return (

        <div className="mainDiv">
            <div className="c-statusD">

            </div>
            <div className="nav-div">
                <ul >
                    <img className="ul-1" src={logo} alt="Logo" />
                </ul>
                <ul className="ul-2">
                    <li className="li-1">Home</li>
                    <li className="li-2">About</li>
                    <li className="li-3">Covid-19</li>
                    <li className="li-4">Contact</li>
                </ul>
                <ul className="ul-3">
                    {/* <div id="s-d">
                        <input type="search" placeholder="Search" id="search-i" />
                        <img src={search} id="i-s" alt="search" />
                    </div> */}
                    <li className="li-5">Sign In</li>
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
                    <Router>
                        <Switch>
                            <Link path='/RegistrationFrom'><button id="b-1">Register</button></Link>
                        </Switch>

                    </Router>
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

            </div>

        </div>

    );
}
