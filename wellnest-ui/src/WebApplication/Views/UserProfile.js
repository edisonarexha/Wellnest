import React, { Component } from 'react';
import "./UserProfile.css";
import { Nav } from 'react-bootstrap';
import { Col,Tab,Row,Sonnet } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Image }from 'react-bootstrap';
import test from './test.jpg'
import Map from './../../WebSite/Views/covid19/Map';

export class UserProfile extends Component {






    
    render() {
        return (
           <div className="UserProfile">
              
               <div className="UserProfileHeader">
                            <Nav variant="tabs" defaultActiveKey="/UserProfile" className="NavBAR">            
                            <Nav.Item>
                                <Nav.Link href="/UserProfile">User Profile</Nav.Link>
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
               <div className="Main-Div-">
                   
               <Card style={{ width: '18rem' }} className="CardStyle">
                <Card.Body>
                    <Card.Title>Covid Infected</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="CardStyle">
                <Card.Body>
                    <Card.Title>Covid Recoveries</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="CardStyle">
                <Card.Body>
                    <Card.Title>Covid Deaths</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                </Card>
              
              

            </div>
               <div className="Dashboard-left-side">
                    <div className="Dashboard-profile-side">
                    <Image src={test} fluid />
                    <p className="Paragrpah">Emri:</p>
                    <p className="Paragrpah1">Mbiemri</p>
                    <p className="Paragrpah1">VendLindja</p>
                    <p className="Paragrpah1">Numri ID:</p>
                    </div>
                    <div className="Covid-19-Profile-cases">
                        <div className="Title">
                   <h4 className="PatientsHistoricStyle">Patients`s Historic</h4>
                        </div>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="Zero">
                        <Row>
                            <Col sm={12}>
                            <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="Zero" >Over View</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="first" >Allergies</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second">Illnesses And Conditions</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="third">Vaccination</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="fourth">Analysis</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="fifth">Check Status</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <div>
                                        <p></p>
                                    </div>
                                <Nav.Link eventKey="sixth">Indentification Card</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="seventh">Laboratory Visited</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="eighth">Diagnoses</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="ninth">Covid-19</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={15}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                
                                <div />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <div />
                                </Tab.Pane>
                              
                                <Tab.Pane eventKey="third">
                                <div />
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                <div />
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                <div />
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth">
                                <div />
                                </Tab.Pane>
                                <Tab.Pane eventKey="seventh">
                                <div />
                                </Tab.Pane>
                                <Tab.Pane eventKey="eighth">
                                <div />
                                </Tab.Pane>
                                <Tab.Pane eventKey="ninth">
                                <div />
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                        </Tab.Container>
                        
                    </div>
                   
               </div>
               

           </div>
        )
    }
}

export default UserProfile
