import React from 'react';
import { Nav, Col, Tab, Row } from 'react-bootstrap';
import './covid-status.css';
import { Button, Icon, Modal, Form } from 'semantic-ui-react';
import { TestedList } from "./TestedList";

const CovidStatus = () => {
    const [addOpen, setAddOpen] = React.useState(false);
    const [editOpen, setEditOpen] = React.useState(false);
    const [deleteOpen, setDeleteOpen] = React.useState(false);
    
    const [status, setStatus] = React.useState([]);

    const addNewStatus = () => {
      fetch("http://localhost:5000/api/CovidStatus", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(status),
      }).then(() => setAddOpen(false));
    };
  
    const editStatus = (Id) => {
      fetch("http://localhost:5000/api/CovidStatus/" + Id, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(status),
      }).then(() => setEditOpen(false));
    };
    const removeStatus = (Id) => {
      fetch("http://localhost:5000/api/CovidStatus/" + Id, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then(() => setDeleteOpen(false));
    };
    const handleInputChange = (event) => {
      event.preventDefault();
      setStatus({ ...status, [event.target.name]: event.target.value });
      console.log(event.target.value);
    };
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
          <TestedList />
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
                    <Modal.Content id="add-status">
                        <label>Status</label>
                    <input
                        type="text"
                        name="Status"
                        className="covid_status"
                        onChange={handleInputChange}
                        />
                        <label htmlFor="">Date</label>
                        <input
                        type="date"
                        name="Date"
                        className="input-add-status"
                        onChange={handleInputChange}
                        />
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
                            onClick={() => addNewStatus()}
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
                    <label>ID</label>
                    <input
                    type="text"
                    name="Id"
                    className="date_status"
                    onChange={handleInputChange}
                    />
                    <label htmlFor="">Status</label>
                    <input
                    type="text"
                    name="Status"
                    className="input-add-status"
                    onChange={handleInputChange}
                    />
                    <label>Test Date</label>
                    <input
                    type="date"
                    name="Date"
                    className="date_status"
                    onChange={handleInputChange}
                    />
                    
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
                            onClick={() => editStatus(status.Id)}
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
                        <input
              type="text"
              className="input-add-status"
              onChange={handleInputChange}
            />
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
                            onClick={() => removeStatus(status.Id)}
                        />
                    </Modal.Actions>
                </Modal>
            </Form>


        </div>
    )
}

export default CovidStatus;