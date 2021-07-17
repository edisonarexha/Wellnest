import React from 'react';
import { Image, Button } from 'semantic-ui-react';
import profilepic from './profilepic.JPG';
import { Nav } from 'react-bootstrap';
import './Profile.css';

const Profile=()=> {
    return (
        <div>
            <div className="MainPageHeader">
                <Nav variant="tabs" className="NavBAR" defaultActiveKey="/profile">
                    <Nav.Item>
                        <Nav.Link eventKey="/profile" href="/profile">User Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/../../WebSite/Views/covid19/App-1">Covid 19</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" >
                            Consult Doctor
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>

        <div id="maindiv-profile">
            <div>
                <Image src={profilepic}  id="image" circular/>
                <Button id="change-avatar-button">Change Avatar</Button>
               

            </div>
            
            <div id="div-of-divs-profile">
               <div className="elements-div-profile">
                   <label className="labels-profile">User Key:</label>
                   <label>1540000001</label>
               </div>
               <div className="elements-div-profile">
                   <label className="labels-profile">Name:</label>
                   <label>Michele</label>
               </div>
               <div className="elements-div-profile">
                   <label className="labels-profile">Username:</label>
                   <label>Alves</label>
               </div>
               <div className="elements-div-profile">
                   <label className="labels-profile">Email:</label>
                   <label>miaalves@wellnest.com</label>
               </div>
               <div className="elements-div-profile">
                   <label className="labels-profile">ID card:</label>
                   <label>541282364823</label>
               </div>
            </div>





            </div>
        </div>
    )
}

export default Profile;