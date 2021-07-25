import React, { useState } from "react";
import { Nav, Col, Tab, Row } from "react-bootstrap";
import "./analysis.css";
import { Button, Modal, Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { AnalysisList } from "./AnalysisList";
import MainPage from "../Views/MainPage";

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
      <MainPage>
        
      </MainPage>

  


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
