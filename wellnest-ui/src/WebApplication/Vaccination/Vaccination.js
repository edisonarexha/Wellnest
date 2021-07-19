import React, { useState } from "react";
import { Nav, Col, Tab, Row } from "react-bootstrap";
import "./Vaccination.css";
import { Button, Icon, Modal, Form } from "semantic-ui-react";
import { ListVaccines } from "./ListVaccines";

const Vaccination = () => {
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [vaccines, setVaccines] = useState([]);

  const addNewVaccine = () => {
    fetch("http://localhost:5000/api/vaccine", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(vaccines),
    }).then(() => setAddOpen(false));
  };

  const editVaccine = (Id) => {
    fetch("http://localhost:5000/api/vaccine/" + Id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(vaccines),
    }).then(() => setEditOpen(false));
  };
  const removeVaccine = (Id) => {
    fetch("http://localhost:5000/api/vaccine/" + Id, {
      method: "DELETE",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => setDeleteOpen(false));
  };
  const handleInputChange = (event) => {
    event.preventDefault();
    setVaccines({ ...vaccines, [event.target.name]: event.target.value });
  };

  return (
    <div style={{ height: "500px" }}>
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
          <Tab.Container id="left-tabs-example" defaultActiveKey="third">
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

      <Form id="main-div-form-vaccine">
        <ListVaccines />
        <div id="buttons-modal-vaccine">
          <Button
            basic
            color="blue"
            content="Add"
            id="add-button-vac"
            onClick={() => setAddOpen(true)}
          />
          <Button
            basic
            color="green"
            content="Edit"
            id="edit-button-vac"
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
          className="modals-vaccine"
        >
          <Modal.Header className="vaccine-title">Add Vaccines</Modal.Header>
          <Modal.Content id="add-vaccine">
            <label>Name</label>
            <input
              type="text"
              onChange={handleInputChange}
              name="Name"
              className="input-add-vaccine"
            />
            <label>Age</label>
            <input
              type="text"
              onChange={handleInputChange}
              name="Age"
              className="input-add-vaccine"
            />
            <label>Vaccination Date</label>
            <input
              type="date"
              onChange={handleInputChange}
              name="Date_Taken"
              className="date_vaccine"
            />
          </Modal.Content>
          <Modal.Actions className="add-vaccine-buttons">
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
              onClick={() => addNewVaccine()}
            />
          </Modal.Actions>
        </Modal>
        <Modal
          onClose={() => setEditOpen(false)}
          open={editOpen}
          className="modals-vaccine"
        >
          <Modal.Header className="vaccine-title">Edit Vaccine</Modal.Header>
          <Modal.Content id="edit-vaccine">
            <label>ID</label>
            <input
              type="text"
              onChange={handleInputChange}
              name="VaccineId"
              className="input-add-vaccine"
            />
            <label>Name</label>
            <input
              type="text"
              onChange={handleInputChange}
              name="Name"
              className="input-add-vaccine"
            />
            <label>Age</label>
            <input
              type="text"
              onChange={handleInputChange}
              name="Age"
              className="input-add-vaccine"
            />
            <label>Vaccination Date</label>
            <input
              type="date"
              onChange={handleInputChange}
              name="Date_Taken"
              className="date_vaccine"
            />
          </Modal.Content>
          <Modal.Actions className="add-vaccine-buttons">
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
              onClick={() => editVaccine(vaccines.VaccineId)}
            />
          </Modal.Actions>
        </Modal>
        <Modal
          onClose={() => setDeleteOpen(false)}
          open={deleteOpen}
          id="delete-modal-v"
          size="small"
        >
          <Modal.Header className="vaccine-title">Delete vaccine</Modal.Header>
          <Modal.Content>
            <div id="delete-vaccine-elements">
              <p>Delete the vaccine with ID:</p>
              <input
                type="text"
                name="VaccineId"
                className="input-add-vaccine"
                onChange={handleInputChange}
              />
            </div>
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
              onClick={() => removeVaccine(vaccines.VaccineId)}
            />
          </Modal.Actions>
        </Modal>
      </Form>
    </div>
  );
};

export default Vaccination;
