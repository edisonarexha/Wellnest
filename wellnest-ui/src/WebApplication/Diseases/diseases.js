import React from 'react';
import { Nav, Col, Tab, Row } from 'react-bootstrap';
import './diseases.css';
import { Button, Icon, Modal, Form } from 'semantic-ui-react';

const Disease = () => {
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
                                        <Nav.Link href="/disease" eventKey="first" >Diseases</Nav.Link>
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

            <Form id="main-div-form-disease">
                <Form.Field>
                    <p className="disease-title">Diseases</p>
                </Form.Field>

                <Form.Field>
                    <div id="label-modal-div1">
                        <p>Name</p>
                        <p>Information</p>
                    </div>
                    <div id="label-modal-div2">
                        <p>Breast Cancer</p>
                        <p id="p-textarea1">Breast cancer...</p>
                    </div>

                </Form.Field>
                <div id="buttons-modal-disease">
                    <Button basic color='blue' content='Add' onClick={() => setAddOpen(true)} />
                    <Button basic color='green' content='Edit' onClick={() => setEditOpen(true)} />
                    <Button basic color='red' content='Delete' onClick={() => setDeleteOpen(true)} />
                </div>
                <Modal
                    onClose={() => setAddOpen(false)}
                    open={addOpen}
                    className="modals-disease"
                >
                    <Modal.Header className="disease-title">Add Disease</Modal.Header>
                    <Modal.Content id="add-allergies">
                        <label htmlFor="">Name</label>
                        <input type="text" id="input-add-disease" />
                        <label htmlFor="">Information</label>
                        <textarea name="" cols="30" rows="10"></textarea>
                    </Modal.Content>
                    <Modal.Actions className="add-disease-buttons">
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
                    className="modals-disease"
                >
                    <Modal.Header className="disease-title">Edit disease</Modal.Header>
                    <Modal.Content id="edit-allergies">
                        <label htmlFor="">Name</label>
                        <input type="text" id="input-add-disease" />
                        <label htmlFor="">Information</label>
                        <textarea name="" cols="30" rows="10"></textarea>
                    </Modal.Content>
                    <Modal.Actions className="add-disease-buttons">
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
                    <Modal.Header className="disease-title">Delete disease</Modal.Header>
                    <Modal.Content>
                        <p>Delete this disease from user?</p>
                    </Modal.Content>
                    <Modal.Actions className="add-disease-buttons">
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

export default Disease;