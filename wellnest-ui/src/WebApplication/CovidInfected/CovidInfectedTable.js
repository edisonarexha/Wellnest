import React, { useState, useEffect } from 'react';
import '../BookAppointment/BookAppTable.css';

import { Button, Modal, Form } from "semantic-ui-react";

import { Input } from 'semantic-ui-react';
import CovidInfectedList from './CovidInfectedList';
const size = ['large']
const CovidInfectedTable = () => {

    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const [CovidInfectedTable, setCovidInfectedTable] = useState([]);





    const editInfected = (Id) => {
        fetch("http://localhost:5000/api/CovidInfected/" + Id, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(CovidInfectedTable),
        }).then(() => setEditOpen(false));
    };



    const removeInfected = (Id) => {
        fetch("http://localhost:5000/api/CovidInfected/" + Id, {
            method: "DELETE",
            header: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }).then(() => setDeleteOpen(false));
    };
    const handleInputChange = (event) => {
        event.preventDefault();
        setCovidInfectedTable({ ...CovidInfectedTable, [event.target.name]: event.target.value });
        console.log(event.target.value);
    };
    return (
        <div>
              <CovidInfectedList>

              </CovidInfectedList>

            <div id="modaldiv">

                <Button
                    basic
                    color="lightblue"
                    content="Edit"
                    onClick={() => setEditOpen(true)}
                />
                <Button
                    basic
                    color="blue"
                    content="Delete"
                    onClick={() => setDeleteOpen(true)}
                />

                <Modal
                    onClose={() => setEditOpen(false)}
                    open={editOpen}
                    className="modals-diagnose1"
                    size="large"

                >
                    <Modal.Header className="diagnose-title">Edit Patient</Modal.Header>
                    <Modal.Content id="edit-patinet1">


                        {size.map((size) => (
                            <Form  size={size}
                                key={size}>
                                <h1 className="rec">Positive Covid Infected Patients</h1>
                                <Form.Group widths='equal'>
                                <Form.Field
                  id='form-input-control-first-name'
                  control={Input}
                  label='Your Appointment ID'
                  placeholder='Write Your Correct ID'
                  onChange={handleInputChange}
                  name='Id'
                />
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='First name'
                                        placeholder='First name'
                                        onChange={handleInputChange}
                                        name='CovidName'
                                    />
                                    <Form.Field
                                        id='form-input-control-last-name'
                                        control={Input}
                                        label='Last name'
                                        placeholder='Last name'
                                        name='CovidSurname'
                                        onChange={handleInputChange}
                                    />

                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='City'
                                        placeholder='City'
                                        name='City'
                                        onChange={handleInputChange}
                                    />

                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='State'
                                        placeholder='State'
                                        onChange={handleInputChange}
                                        name='State'
                                    />
                                    <Form.Field
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='Age'
                                        placeholder='Patient`s Age'
                                        name='Age'
                                        onChange={handleInputChange}
                                    />
                                </Form.Group>


                                <Form.Group widths='equal'>
                                    <Form.Field widths='equals'
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='Family Members (Number Only)'
                                        placeholder='Family Members'
                                        name='FamilyMembers'
                                        onChange={handleInputChange}
                                    >
                                    </Form.Field>



                                </Form.Group>

                            </Form>
                        ))}





                    </Modal.Content>
                    <Modal.Actions className="add-diagnose-buttons">
                        <Button
                            icon="trash alternate outline"
                            content="Cancel"
                            color="lightblue"
                            onClick={() => setEditOpen(false)}
                        />
                        <Button
                            icon="edit"
                            content="Edit"
                            color="lightblue"
                            onClick={() => editInfected(CovidInfectedTable.Id)}

                        />
                    </Modal.Actions>
                </Modal>
                <Modal
                    onClose={() => setDeleteOpen(false)}
                    open={deleteOpen}
                    id="delete-modal-d1"
                    size="large"
                >
                    <Modal.Header className="diagnose-title">
                        Delete Patient
                    </Modal.Header>
                    <Modal.Content>
                        <p>Delete the Patient from Covid Table?</p>
                        <input
                            type="text"
                            name="Id"
                            className="input-add-diagnose"
                            onChange={handleInputChange}
                        />
                    </Modal.Content>
                    <Modal.Actions className="add-vaccine-buttons">


                        <Button
                            icon="delete"
                            content="Cancel"
                            color="lightcorale"
                            onClick={() => setDeleteOpen(false)}
                        />
                        <Button
                            icon="trash alternate outline"
                            content="Delete"
                            color="lightblue"
                            onClick={() => setDeleteOpen(false)}
                            onClick={() => removeInfected(CovidInfectedTable.Id)}
                        />
                    </Modal.Actions>
                </Modal>
            </div>


        </div>


    )
}
export default CovidInfectedTable;