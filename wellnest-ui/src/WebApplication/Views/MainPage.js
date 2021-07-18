import React, { Component } from 'react';
import "./MainPage.css";
import { Nav } from 'react-bootstrap';
import { Col,Tab,Row,Sonnet } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Image }from 'react-bootstrap';
import test from './test.jpg'
import Map from './../../WebSite/Views/covid19/Map';
import Tabs from 'react-bootstrap/Tabs'
import logo from './logo.PNG';
export class MainPage extends Component {






    
    render() {
        return (
           <div className="MainPage">
              
         
           
               <div className="Dashboard-left-side">
                  
                    <div className="Covid-19-Profile-cases">
                     
                    <Tab.Container id="left-tabs-example" defaultActiveKey="Zero">
                        <Row>
                            <Col sm={8}>
                            <Nav variant="pills" className="flex-column" >
                            <Nav.Item>
                                    <img src={logo} className="logopng"></img>
                                </Nav.Item>
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
                         
                        </Row>
                        </Tab.Container>
                        <Col sm={15} className="colheight">
                            <Tab.Content className="Tabs">
                            <Tab.Pane eventKey="Zero">
                                    <h1>Hello overview</h1>
                                <div />
                                </Tab.Pane>
                                <Tab.Pane eventKey="first">
                                <h1>Hello Allergies</h1>
                                <div />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <h1>Hello Illnesses And Conditions</h1>
                                <div />
                                </Tab.Pane>
                              
                                <Tab.Pane eventKey="third">
                                <h1>hELLO Vaccination</h1>
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
                  
                    </div>
                   
               </div>
               

           </div>
        )
    }
}

export default MainPage
