import React, { Component } from 'react';
import "./MainPage.css";
import { Nav } from 'react-bootstrap';
import { Col,Tab,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.PNG';
import mainphoto from './main_photo.jpg';
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
                                <Nav.Link href="/allergy" eventKey="first" >Allergies</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link href="/disease" eventKey="second">Diseases</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link href="/vaccination" eventKey="third">Vaccination</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link href="/analysis" eventKey="fourth">Analysis</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link href="/covidstatus" eventKey="fifth">Covid Status</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link href="/bookappointment" eventKey="sixth">Book Appointment</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link href="/recpatienttable" eventKey="seventh">Recovered Patiens</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link href="/diagnose" eventKey="eighth">Diagnoses</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link href="/covid" eventKey="ninth">Covid-19</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                         
                        </Row>
                        </Tab.Container>
                        <Col sm={15} className="colheight">
                            <Tab.Content className="Tabs">
                            <Tab.Pane eventKey="Zero">
                                <div />
                                </Tab.Pane>
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
                  
                    </div>
                    
                   
               </div>
               
           </div>
        )
    }
}

export default MainPage
