import React from 'react'
import { Nav, Col, Tab, Row } from 'react-bootstrap';
import { Button, Icon, Modal } from 'semantic-ui-react';
import './allergie.css'

const Allergie = () => {
    const [firstOpen, setFirstOpen] = React.useState(false)
    const [secondOpen, setSecondOpen] = React.useState(false)

    return (
        <div>
            <div className="MainPageHeader">
                <Nav variant="tabs" className="NavBAR">
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


            <Button onClick={() => setFirstOpen(true)} id="allergy-modal-button">Open first Modal</Button>
            <div>
                <Modal
                    onClose={() => setFirstOpen(false)}
                    onOpen={() => setFirstOpen(true)}
                    open={firstOpen}
                >
                    <Modal.Header>Allergies</Modal.Header>
                    <Modal.Content >
                        <Modal.Description>
                            <div id="label1-div">
                                <p>Name</p>
                                <p>Reason</p>
                            </div>
                           
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={() => setSecondOpen(true)} primary>
                            Proceed <Icon name='right chevron' />
                        </Button>
                    </Modal.Actions>

                    <Modal
                        onClose={() => setSecondOpen(false)}
                        open={secondOpen}
                        size='small'
                    >
                        <Modal.Header>Modal #2</Modal.Header>
                        <Modal.Content>
                            <p>That's everything!</p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button
                                icon='check'
                                content='All Done'
                                onClick={() => setSecondOpen(false)}
                            />
                        </Modal.Actions>
                    </Modal>
                </Modal>

            </div>



            <div className="Dashboard-left-side">

                <div className="Covid-19-Profile-cases">
                    <div className="Title">

                    </div>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={8}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="Zero" >Over View</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>

                                        <Nav.Link href="/allergy"  eventKey="first" >Allergies</Nav.Link>
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


export default Allergie;
