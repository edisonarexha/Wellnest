import React, { useState } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import doctor from "./doc.png";
import call from "./telephonee.png";
import amb from "./ambulancee.png";
import Ccc from "./ccc.png";

function Homepage() {
  const [profile, setProfile] = useState(false);

  const changeProfile = () => {
    setProfile(!profile ? true : false);
  };
  return (
    <div className="mainDIV">
      {/* <div className="c-status"></div> */}

      <NavBar />

      <div className="parallax">
        <div id="div-i"></div>
        <div id="div-ii">
          <p id="h2">
            <b>Wellnest is the first e-health website in Kosovo,</b>
          </p>

          <div className="body-text-home">
            Currently helping patients and doctors all over the country,
            <br></br>
            <br></br>
            You can help by inviting people to join and be part of the health
            program
          </div>
          <div id="b-d">
            <Link to="./form">
              <button id="b-1">Register</button>
            </Link>
          </div>
        </div>
      </div>

      <div id="n-d">
        <div id="d-in1" className="d-in">
          <img src={call} className="img" alt="call" />
          <p className="ps1">
            <b>Emergency Call</b>
          </p>
          <p className="ps2">192</p>
        </div>
        <div className="d-in">
          <img src={amb} className="img" alt="call" />
          <p className="ps1">
            <b>Ambulance</b>
          </p>
          <p className="ps2">194</p>
        </div>
        <div className="d-in">
          <img src={doctor} className="img" alt="call" />
          <p className="ps1">
            <b>Call a doctor</b>
          </p>
          <p className="ps2"> 046-121-212</p>
        </div>
      </div>
      <div id="end-d">
        <div id="in-end">
          <img src={Ccc} alt="" />
          <div id="s-div">
            <span>
              Coronaviruses are a group of related RNA viruses that cause
              diseases in mammals and birds. In humans and birds, they cause
              respiratory tract infections that can range from mild to lethal.
              Mild illnesses in humans include some cases of the common cold
              (which is also caused by other viruses, predominantly
              rhinoviruses), while more lethal varieties can cause SARS, MERS,
              and COVID-19. In cows and pigs they cause diarrhea, while in mice
              they cause hepatitis and encephalomyelitis.
              <br></br>
              Coronaviruses constitute the subfamily Orthocoronavirinae, in the
              family Coronaviridae, order Nidovirales, and realm
              Riboviria.They are enveloped viruses with a positive-sense
              single-stranded RNA genome and a nucleocapsid of helical
              symmetry. The genome size of coronaviruses ranges from
              approximately 26 to 32 kilobases, one of the largest among RNA
              viruses. They have characteristic club-shaped spikes that
              project from their surface, which in electron micrographs create
              an image reminiscent of the solar corona, from which their name
              derives.
            </span>
            <Link to="/sickinfo">
              <button id="s-b">Read more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
