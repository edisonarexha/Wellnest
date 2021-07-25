import React, { Component,useEffect,useState } from 'react';
import "./MainPage.css";
import { Nav } from 'react-bootstrap';
import { Col,Tab,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.PNG';
import video from './video.mp4';
import mainphoto from './main_photo.jpg';
import { CovidList } from './CovidList';
import { Link } from 'react-router-dom';

const MainPage=()=> {
    const[covid19,setCovid19]=useState([]);

 


        return (
        <div>
                <div id="left-side">
                 <div id="picture">
                 <img src={logo} id="style-photo"></img>
                     </div>   
                 
                    <ul>
                        <li className="li-style li-style-overview " >Overview</li>
                    
                      <Link to="CovidStatus">  <li className="li-style">Covid Status</li></Link>
                        <Link to="ConstructionSite"><li className="li-style">Allergies</li></Link>
                      <Link to="Disease">  <li className="li-style">Diseases</li></Link>
                      <Link to="Analysis"> <li className="li-style">Analysis</li></Link> 
                        <Link to="Diagnose"><li className="li-style">Diagnose</li></Link>
                     <Link to="/RecPatientTable">  <li className="li-style">Recoveries</li></Link> 
                    </ul>
                </div>
          </div>
        )
    }


export default MainPage
