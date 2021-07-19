import React from 'react';
import { Nav, Col, Tab, Row } from 'react-bootstrap';
import './covid-status.css';
import { Button, Icon, Modal, Form } from 'semantic-ui-react';

const CovidStatus = () => {
    const [firstOpen, setFirstOpen] = React.useState(false)
    const [addOpen, setAddOpen] = React.useState(false)
    const [editOpen, setEditOpen] = React.useState(false)
    const [deleteOpen, setDeleteOpen] = React.useState(false)

    return (
        <div style={{height:"500px"}}>
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
                                        <Nav.Link href="/status" eventKey="first" >status</Nav.Link>
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

                    <div className="test1">

                    </div>
                </div>
            </div>

            <Form id="main-div-form-status">
                <Form.Field>
                    <p className="status-title">Covid19 Status</p>
                </Form.Field>

                <Form.Field>
                    <div id="label-modal-div1">
                        <p>Status</p>
                        <p>Information</p>
                    </div>
                    <div id="label-modal-div2">
                        <p>Positive</p>
                        <p id="p-textarea1">Date:29/06/2021
                        <p></p>
                        Time:12:40
                         </p>
                    </div>

                </Form.Field>
                <div id="buttons-modal-status">
                    <Button basic color='blue' content='Add' onClick={() => setAddOpen(true)} />
                    <Button basic color='green' content='Edit' onClick={() => setEditOpen(true)} />
                    <Button basic color='red' content='Delete' onClick={() => setDeleteOpen(true)} />
                </div>
                <Modal
                    onClose={() => setAddOpen(false)}
                    open={addOpen}
                    className="modals-status"
                >
                    <Modal.Header className="status-title">Add status</Modal.Header>
                    <Modal.Content id="add-allergies">
                        <label htmlFor="">Status</label>
                        <input type="text" id="input-add-status" />
                        <label htmlFor="">Information</label>
                        <textarea name="" cols="30" rows="10"></textarea>
                    </Modal.Content>
                    <Modal.Actions className="add-status-buttons">
                        <Button
                            icon='trash alternate outline'
                            content='Cancel'
                            color='red'
                            onClick={() => setAddOpen(false)}
                        />
                        <Button
                            icon='save'
                            content='Add'
                            color='blue'
                            onClick={() => setAddOpen(false)}
                        />
                    </Modal.Actions>
                </Modal>
                <Modal
                    onClose={() => setEditOpen(false)}
                    open={editOpen}
                    className="modals-status"
                >
                    <Modal.Header className="status-title">Edit Status</Modal.Header>
                    <Modal.Content id="edit-status">
                        <label htmlFor="">Status</label>
                        <input type="text" id="input-add-status" />
                        <label htmlFor="">Information</label>
                        <textarea name="" cols="30" rows="10"></textarea>
                    </Modal.Content>
                    <Modal.Actions className="add-status-buttons">
                        <Button
                            icon='trash alternate outline'
                            content='Cancel'
                            color='red'
                            onClick={() => setEditOpen(false)}
                        />
                        <Button
                            icon='edit'
                            content='Edit'
                            color='green'
                            onClick={() => setEditOpen(false)}
                        />
                    </Modal.Actions>
                </Modal>
                <Modal
                    onClose={() => setDeleteOpen(false)}
                    open={deleteOpen}
                    id="delete-modal-a"
                    size='small'
                >
                    <Modal.Header className="status-title">Delete Status</Modal.Header>
                    <Modal.Content>
                        <p>Delete this status from user?</p>
                    </Modal.Content>
                    <Modal.Actions className="add-status-buttons">
                        <Button
                            icon='trash alternate outline'
                            content='Cancel'
                            color='green'
                            onClick={() => setDeleteOpen(false)}
                        />
                        <Button
                            icon='delete'
                            content='Delete'
                            color='red'
                            onClick={() => setDeleteOpen(false)}
                        />
                    </Modal.Actions>
                </Modal>
            </Form>


        </div>
    )
}

export default CovidStatus;