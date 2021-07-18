import React, { useState, useEffect } from "react";
import { Nav, Col, Tab, Row } from "react-bootstrap";
import "./Diagnose.css";
import { Button, Modal, Form } from "semantic-ui-react";
import { ListDiagnoses } from "./ListDIagnoses";

const Diagnose = () => {
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [diagnoses, setDiagnoses] = useState([]);

  const addNewDiagnose = () => {
    fetch("http://localhost:5000/api/diagnose", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(diagnoses),
    }).then(() => setAddOpen(false));
  };

  const editDiagnoses = (Id) => {
    fetch("http://localhost:5000/api/diagnose/" + Id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(diagnoses),
    }).then(() => setEditOpen(false));
  };
  const removeDiagnose = (Id) => {
    fetch("http://localhost:5000/api/diagnose/" + Id, {
      method: "DELETE",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => setDeleteOpen(false));
  };
  const handleInputChange = (event) => {
    event.preventDefault();
    setDiagnoses({ ...diagnoses, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };
  return (
    <div style={{ height: "500px" }}>
      <div className="MainPageHeader">
        <Nav variant="tabs" className="NavBAR">
          <Nav.Item>
            <Nav.Link href="/profile">User Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/../../WebSite/Views/covid19/App-1">
              Covid 19
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Consult Doctor</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="Dashboard-left-side">
        <div className="Covid-19-Profile-cases">
          <div className="Title"></div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="eighth">
            <Row>
              <Col sm={8}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="Zero">Over View</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/allergy" eventKey="first">
                      Allergies
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      Illnesses And Conditions
                    </Nav.Link>
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

      <Form id="main-div-form-diagnose">
        <Form.Field>
          <p className="diagnose-title">Diagnoses</p>
        </Form.Field>
        <Form.Field>
          <ListDiagnoses />
        </Form.Field>

        <div id="buttons-modal-diagnose">
          <Button
            basic
            color="blue"
            content="Add"
            id="add-button-dia"
            onClick={() => setAddOpen(true)}
          />
          <Button
            basic
            color="green"
            content="Edit"
            id="edit-button-dia"
            onClick={() => setEditOpen(true)}
          />
          <Button
            basic
            color="red"
            content="Delete"
            onClick={() => setDeleteOpen(true)}
          />
        </div>
        <Modal
          onClose={() => setAddOpen(false)}
          open={addOpen}
          className="modals-diagnose"
          onSubmit={addNewDiagnose}
        >
          <Modal.Header className="diagnose-title">Add Diagnoses</Modal.Header>
          <Modal.Content id="add-diagnose">
            <label>Diagnose Date</label>
            <input
              type="date"
              name="Date"
              className="date_diagnose"
              onChange={handleInputChange}
            />
            <label htmlFor="">Pills</label>
            <input
              type="text"
              name="Pills"
              className="input-add-diagnose"
              onChange={handleInputChange}
            />
          </Modal.Content>
          <Modal.Actions className="add-diagnose-buttons">
            <Button
              icon="trash alternate outline"
              content="Cancel"
              color="red"
              onClick={() => setAddOpen(false)}
            />
            <Button
              icon="save"
              content="Add"
              color="blue"
              onClick={() => addNewDiagnose()}
              onSubmit={() => setAddOpen(false)}
            />
          </Modal.Actions>
        </Modal>
        <Modal
          onClose={() => setEditOpen(false)}
          open={editOpen}
          className="modals-diagnose"
        >
          <Modal.Header className="diagnose-title">Edit Diagnose</Modal.Header>
          <Modal.Content id="edit-diagnose">
            <label>ID</label>
            <input
              type="text"
              name="DiagnoseId"
              className="date_diagnose"
              onChange={handleInputChange}
            />
            <label>Diagnose Date</label>
            <input
              type="date"
              name="Date"
              className="date_diagnose"
              onChange={handleInputChange}
            />
            <label htmlFor="">Pills</label>
            <input
              type="text"
              name="Pills"
              className="input-add-diagnose"
              onChange={handleInputChange}
            />
          </Modal.Content>
          <Modal.Actions className="add-diagnose-buttons">
            <Button
              icon="trash alternate outline"
              content="Cancel"
              color="red"
              onClick={() => setEditOpen(false)}
            />
            <Button
              icon="edit"
              content="Edit"
              color="green"
              onClick={() => editDiagnoses(diagnoses.DiagnoseId)}
            />
          </Modal.Actions>
        </Modal>
        <Modal
          onClose={() => setDeleteOpen(false)}
          open={deleteOpen}
          id="delete-modal-d"
          size="small"
        >
          <Modal.Header className="diagnose-title">
            Delete diagnose
          </Modal.Header>
          <Modal.Content>
            <p>Delete the diagnose from user with ID:</p>
            <input
              type="text"
              name="DiagnoseId"
              className="input-add-diagnose"
              onChange={handleInputChange}
            />
          </Modal.Content>
          <Modal.Actions className="add-vaccine-buttons">
            <Button
              icon="trash alternate outline"
              content="Cancel"
              color="green"
              onClick={() => setDeleteOpen(false)}
            />
            <Button
              icon="delete"
              content="Delete"
              color="red"
              onClick={() => removeDiagnose(diagnoses.DiagnoseId)}
            />
          </Modal.Actions>
        </Modal>
      </Form>
    </div>
  );
};

export default Diagnose;