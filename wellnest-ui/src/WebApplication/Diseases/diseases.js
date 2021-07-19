import React from "react";
import { Nav, Col, Tab, Row } from "react-bootstrap";
import "./diseases.css";
import { Button, Icon, Modal, Form } from "semantic-ui-react";
import { DiseasesList } from "./DiseasesList";

const Disease = () => {
  const [addOpen, setAddOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);

  const [diseases, setDisease] = React.useState([]);

  const addNewDisease = () => {
    fetch("http://localhost:5000/api/DiseasesP", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(diseases),
    }).then(() => setAddOpen(false));
  };

  const editDisease = (Id) => {
    fetch("http://localhost:5000/api/DiseasesP/" + Id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(diseases),
    }).then(() => setEditOpen(false));
  };
  const removeDisease = (Id) => {
    fetch("http://localhost:5000/api/DiseasesP/" + Id, {
      method: "DELETE",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => setDeleteOpen(false));
  };
  const handleInputChange = (event) => {
    event.preventDefault();
    setDisease({ ...diseases, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  return (
    <div style={{ height: "500px" }}>
      <div className="MainPageHeader">
        <Nav variant="tabs" className="NavBAR">
          <Nav.Item>
            <Nav.Link href="/UserProfile">User Profile</Nav.Link>
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
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={8}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="Zero">Over View</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/disease" eventKey="first">
                      Diseases
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

          <div className="test1"></div>
        </div>
      </div>

      <Form id="main-div-form-disease">
        <Form.Field>
          <p className="disease-title">Diseases</p>
        </Form.Field>

        <Form.Field>
          <DiseasesList />
        </Form.Field>
        <div id="buttons-modal-disease">
          <Button
            basic
            color="blue"
            content="Add"
            id="add-button-dis"
            onClick={() => setAddOpen(true)}
          />
          <Button
            basic
            color="green"
            content="Edit"
            id="edit-button-dis"
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
          className="modals-disease"
        >
          <Modal.Header className="disease-title">Add Disease</Modal.Header>
          <Modal.Content id="add-allergies">
            <label>Name</label>
            <input
              type="text"
              name="Name"
              className="disease_name"
              onChange={handleInputChange}
            />
            <label htmlFor="">Information</label>
            <input
              type="text"
              name="Information"
              className="input-add-info"
              onChange={handleInputChange}
            />
          </Modal.Content>
          <Modal.Actions className="add-disease-buttons">
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
              onClick={() => addNewDisease()}
              onSubmit={() => setAddOpen(false)}
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
            <label>ID</label>
            <input
              type="text"
              name="Id"
              className="date_diseases"
              onChange={handleInputChange}
            />
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="Name"
              className="input-add-diseases"
              onChange={handleInputChange}
            />
            <label>Information</label>
            <input
              type="text"
              name="Information"
              className="date_diseases"
              onChange={handleInputChange}
            />
          </Modal.Content>
          <Modal.Actions className="add-disease-buttons">
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
              onClick={() => editDisease(diseases.Id)}
            />
          </Modal.Actions>
        </Modal>
        <Modal
          onClose={() => setDeleteOpen(false)}
          open={deleteOpen}
          id="delete-modal-a"
          size="small"
        >
          <Modal.Header className="disease-title">Delete disease</Modal.Header>
          <Modal.Content>
            <p>Delete this disease from user with ID?</p>
            <input
              type="text"
              name="Id"
              className="input-add-disease"
              onChange={handleInputChange}
            />
          </Modal.Content>
          <Modal.Actions className="add-disease-buttons">
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
              onClick={() => removeDisease(diseases.Id)}
            />
          </Modal.Actions>
        </Modal>
      </Form>
    </div>
  );
};

export default Disease;
