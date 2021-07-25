import React, { useState, useEffect } from "react";
import { Nav, Col, Tab, Row } from "react-bootstrap";
import "./Diagnose.css";
import { Button, Modal, Form } from "semantic-ui-react";
import { ListDiagnoses } from "./ListDIagnoses";
import MainPage from "../Views/MainPage";

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
      
      <MainPage>
        
      </MainPage>

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
              id="id-input-edit-diagnose"
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
        >
          <Modal.Header className="diagnose-title">
            Delete diagnose
          </Modal.Header>
          <Modal.Content>
            <div id="delete-diagnose-elements">
              <p>Delete the diagnose with ID:</p>
              <input
                type="text"
                name="DiagnoseId"
                className="input-add-diagnose"
                onChange={handleInputChange}
              />
            </div>
          </Modal.Content>
          <Modal.Actions className="add-diagnose-buttons">
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
              onClick={() => removeDiagnose(diagnoses.DiagnoseId)}
            />
          </Modal.Actions>
        </Modal>
      </Form>
    </div>
  );
};

export default Diagnose;
