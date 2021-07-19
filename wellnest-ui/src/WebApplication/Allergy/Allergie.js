import React, { useState } from "react";
import { Nav, Col, Tab, Row } from "react-bootstrap";
import "./allergie.css";
import { Button, Icon, Modal,Form } from "semantic-ui-react";
import ListAllergies from './ListAllergies';

const Allergie = () => {
  const [addOpen, setAddOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);

  const [allergies, setAllergies] = useState([]);

  const addNewAllergy = () => {
    fetch("http://localhost:5000/api/allergie", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(allergies),
    }).then(() => setAddOpen(false));
  };

  const editAllergy = (Id) => {
    fetch("http://localhost:5000/api/allergie/" + Id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(allergies),
    }).then(() => setEditOpen(false));
  };
  const removeAllergies = (Id) => {
    fetch("http://localhost:5000/api/allergie/" + Id, {
      method: "DELETE",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => setDeleteOpen(false));
  };
  const handleInputChange = (event) => {
    event.preventDefault();
    setAllergies({ ...allergies, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <div className="MainPageHeader">
        <Nav variant="tabs" className="NavBAR">
          <Nav.Item>
            <Nav.Link href="/profile">User Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Consult Doctor</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <div className="Dashboard-left-side">
        <div className="Covid-19-Profile-cases">
          <div className="Title"></div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
            <Col sm={8}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link href="/allergy" eventKey="first">
                      Allergies
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/disease" eventKey="second">
                      Diseases
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/vaccination" eventKey="third">
                      Vaccination
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/analysis" eventKey="fourth">
                      Analysis
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/covidstatus" eventKey="fifth">
                      Covid Status
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/bookappointment" eventKey="sixth">
                      Book Appointment
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/recpatienttable" eventKey="seventh">
                      Recovered Patiens
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/diagnose" eventKey="eighth">
                      Diagnoses
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/covid" eventKey="ninth">
                      Covid-19
                    </Nav.Link>
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

      <Form id="main-div-form-allergy">
        <Form.Field>
          <p className="allergy-title">Allergies</p>
        </Form.Field>
        <Form.Field>
          <ListAllergies />
        </Form.Field>

       
          <div id="buttons-modal-allergy">
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
            className="modals-allergy"
          >
            <Modal.Header className="allergy-title">Add Allergie</Modal.Header>
            <Modal.Content id="add-allergies">
              <label >Name</label>
              <input type="text" name="Name" onChange={handleInputChange} className="input-add-allergy" />
              <label >Reason</label>
              <textarea name="Reason" cols="30" rows="10" onChange={handleInputChange}></textarea>
            </Modal.Content>
            <Modal.Actions className="add-allergy-buttons">
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
                onClick={() => addNewAllergy()}
              />
            </Modal.Actions>
          </Modal>
          <Modal
            onClose={() => setEditOpen(false)}
            open={editOpen}
            className="modals-allergy"
          >
            <Modal.Header className="allergy-title">Edit Allergy</Modal.Header>
            <Modal.Content id="edit-allergies">
              <label>ID</label>
              <input type="text" className="input-add-allergy" onChange={handleInputChange} name="AllergyId"/>
              <label htmlFor="">Name</label>
              <input type="text" onChange={handleInputChange} name="Name" className="input-add-allergy" />
              <label htmlFor="">Reason</label>
              <textarea name="Reason" onChange={handleInputChange} cols="30" rows="10"></textarea>
            </Modal.Content>
            <Modal.Actions className="add-allergy-buttons">
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
                onClick={() => editAllergy(allergies.AllergyId)}
              />
            </Modal.Actions>
          </Modal>
          <Modal
            onClose={() => setDeleteOpen(false)}
            open={deleteOpen}
            className="delete-modal-a"
            
          >
            <Modal.Header className="allergy-title">
              Delete Allergy
            </Modal.Header>
            <Modal.Content>
              <div id="delete-allergy-elements">
              <p>Delete the allergy with ID:</p>
              <input
                type="text"
                name="AllergyId"
                className="input-add-allergy"
                onChange={handleInputChange}
              />
              </div>
            </Modal.Content>
            <Modal.Actions className="add-allergy-buttons">
              <Button
                icon="delete"
                content="Cancel"
                color="green"
                onClick={() => setDeleteOpen(false)}
              />
              <Button
                icon="trash alternate outline"
                content="Delete"
                color="red"
                onClick={() => removeAllergies(allergies.AllergyId)}
              />
            </Modal.Actions>
          </Modal>
      </Form>
    </div>
  );
};

export default Allergie;
