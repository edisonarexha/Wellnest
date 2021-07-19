import React, { useState } from "react";
import { Nav, Col, Tab, Row } from "react-bootstrap";
import "./analysis.css";
import { Button, Modal, Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AnalysisList } from "./AnalysisList";

const Analysis = () => {
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [analyses, setAnalyses] = useState([]);

  const addNewAnalysis = () => {
    fetch("http://localhost:5000/api/analysis", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(analyses),
    }).then(() => setAddOpen(false));
  };

  const editAnalyses = (Id) => {
    fetch("http://localhost:5000/api/analysis/" + Id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(analyses),
    }).then(() => setEditOpen(false));
  };
  const removeAnalysis = (Id) => {
    fetch("http://localhost:5000/api/analysis/" + Id, {
      method: "DELETE",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => setDeleteOpen(false));
  };
  const handleInputChange = (event) => {
    event.preventDefault();
    setAnalyses({ ...analyses, [event.target.name]: event.target.value });
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

          <div className="test1"></div>
        </div>
      </div>

      <Form id="main-div-form-analysis">
        <Form.Field>
          <p className="analysis-title">Analyses</p>
        </Form.Field>

        <Form.Field>
          <AnalysisList />
        </Form.Field>

        <div id="buttons-modal-analysis">
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
          className="modals-analysis"
          onSubmit={addNewAnalysis}
        >
          <Modal.Header className="analysis-title">Add Analysis</Modal.Header>
          <Modal.Content id="add-analysis">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="Name"
              className="input-add-analysis"
              onChange={handleInputChange}
            />
            <label>Results</label>

            <textarea
              name="Results"
              cols="30"
              rows="10"
              onChange={handleInputChange}
            ></textarea>
            <label>Date</label>
            <input
              type="date"
              name="Date"
              className="date_analysis"
              onChange={handleInputChange}
            />
          </Modal.Content>
          <Modal.Actions className="add-analysis-buttons">
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
              onClick={() => addNewAnalysis()}
            />
          </Modal.Actions>
        </Modal>
        <Modal
          onClose={() => setEditOpen(false)}
          open={editOpen}
          className="modals-analysis"
        >
          <Modal.Header className="analysis-title">Edit Analysis</Modal.Header>
          <Modal.Content id="edit-analysis">
            <label htmlFor="">Id</label>
            <input
              type="text"
              name="Id"
              className="input-add-analysis"
              onChange={handleInputChange}
            />

            <label htmlFor="">Name</label>
            <input
              type="text"
              name="Name"
              className="input-add-analysis"
              onChange={handleInputChange}
            />

            <label htmlFor="">Results</label>
            <textarea
              name="Results"
              cols="30"
              rows="10"
              onChange={handleInputChange}
            ></textarea>
            <label htmlFor="">Date</label>
            <input
              type="date"
              name="Date"
              className="date_analysis"
              onChange={handleInputChange}
            />
          </Modal.Content>
          <Modal.Actions className="add-analysis-buttons">
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
              onClick={() => editAnalyses(analyses.Id)}
            />
          </Modal.Actions>
        </Modal>
        <Modal
          onClose={() => setDeleteOpen(false)}
          open={deleteOpen}
          id="delete-modal-a"
          size="small"
        >
          <Modal.Header className="analysis-title">
            Delete Analysis
          </Modal.Header>
          <Modal.Content>
            <p>Delete the analysis with ID:</p>
            <input
              type="text"
              name="Id"
              className="input-add-analysis"
              onChange={handleInputChange}
            />
          </Modal.Content>
          <Modal.Actions className="add-analysis-buttons">
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
              onClick={() => removeAnalysis(analyses.Id)}
            />
          </Modal.Actions>
        </Modal>
      </Form>
    </div>
  );
};

export default Analysis;
