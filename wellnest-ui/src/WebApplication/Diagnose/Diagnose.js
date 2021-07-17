import React, { useState, useEffect } from "react";
import { Nav, Col, Tab, Row } from "react-bootstrap";
import "./Diagnose.css";
import { Button, Modal, Form } from "semantic-ui-react";

const Diagnose = () => {
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  
  const [diagnoses, setDiagnoses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/diagnose")
    .then((response) => response.json())
    .then((data) => {
      setDiagnoses(data);
      console.log(data);
    });
  }, []);
  
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
          <div id="label-modal-div1">
            <p>Date</p>
            <p>Pills</p>
          </div>
          
         
          {diagnoses.map(diagnose => (
            <div id="label-modal-div2">
              <p id="p-textarea1">{diagnose.Date}</p>
              <p>{diagnose.Pills}</p>
            </div>
          ))}
        </Form.Field>
        <div id="buttons-modal-diagnose">
          <Button
            basic
            color="blue"
            content="Add"
            onClick={() => setAddOpen(true)}
          />
          <Button
            basic
            color="green"
            content="Edit"
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
        >
          <Modal.Header className="diagnose-title">Add Diagnoses</Modal.Header>
          <Modal.Content id="add-diagnose">
            <label>Diagnose Date</label>
            <input type="date" className="date_diagnose" />
            <label htmlFor="">Pills</label>
            <input type="text" className="input-add-diagnose" />
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
              onClick={() => setAddOpen(false)}
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
            <label>Diagnose Date</label>
            <input type="date" className="date_diagnose" />
            <label htmlFor="">Pills</label>
            <input type="text" className="input-add-diagnose" />
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
              onClick={() => setEditOpen(false)}
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
            <p>Delete the diagnose from user?</p>
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
              onClick={() => setDeleteOpen(false)}
            />
          </Modal.Actions>
        </Modal>
      </Form>
    </div>
  );
};

export default Diagnose;
