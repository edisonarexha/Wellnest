import React,  {useState,useEffect}from 'react';

import './recpatienttable.css';
import { Button, Modal, Form } from "semantic-ui-react";
import { RecList } from './RecList';
import {  Input } from 'semantic-ui-react';
const size = ['large']
const RecPatientTable = () => {
    
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const [RecoveredPatients, setRecoveredPatinent] = useState([]);

   

  
    
      const editPatient = (Id) => {
        fetch("http://localhost:5000/api/RecoveredPatiensCovid19/" + Id, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(RecoveredPatients),
        }).then(() => setEditOpen(false));
      };



      const removePatient = (Id) => {
        fetch("http://localhost:5000/api/RecoveredPatiensCovid19/" + Id, {
          method: "DELETE",
          header: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }).then(() => setDeleteOpen(false));
      };
      const handleInputChange = (event) => {
        event.preventDefault();
        setRecoveredPatinent({ ...RecoveredPatients, [event.target.name]: event.target.value });
        console.log(event.target.value);
      };
    return (
        <div>
             <RecList>

             </RecList>
       
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
            <Form  className="FormStyle11" size={size}
              key={size}>
                  
                  <Form.Group widths='equal'>
                      
                  <Form.Field
                  id='form-input-control-first-name'
                  control={Input}
                  label='Patient Id'
                  placeholder='Write Patient ID {Be Careful}'
                  onChange={handleInputChange}
                  name='Id'
                />
                  </Form.Group>
              <Form.Group widths='equal'>

                <Form.Field
                  id='form-input-control-first-name'
                  control={Input}
                  label='First name'
                  placeholder='First name'
                  onChange={handleInputChange}
                  name='FirstName'
                />
                <Form.Field
                  id='form-input-control-last-name'
                  control={Input}
                  label='Last name'
                  placeholder='Last name'
                  name='LastName'
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
                >
                </Form.Field>
                <Form.Field
                  id='form-input-control-first-name'
                  control={Input}
                  label='Phone Number'
                  placeholder='Patient Phone Number'
                  onChange={handleInputChange}
                  name='Number'
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
                  label='Infected Date'
                  placeholder='YYYY-MM-DD'
                  name='Infected'
                  onChange={handleInputChange}
                >
                </Form.Field>



                <Form.Field widths='equal'
                  id='form-input-control-first-name'
                  control={Input}
                  label='Covid-Free'
                  placeholder='YYYY-MM-DD'
                  name='Recovered'
                  onChange={handleInputChange}
                >

                </Form.Field>





              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Field
                  id='form-input-control-first-name'
                  control={Input}
                  label='Terminated Days'
                  placeholder='Positive Days'
                  name='SickDays'
                  onChange={handleInputChange}
                /> <Form.Field
                  id='form-input-control-first-name'
                  control={Input}
                  label='Quarantined At?'
                  placeholder='House/Apartment'
                  name='QuarantinedPlacee'
                  onChange={handleInputChange}
                /> <Form.Field
                  id='form-input-control-first-name'
                  control={Input}
                  label='Vaccine'
                  placeholder='Which Vaccine Took'
                  name='VaccienName'
                  onChange={handleInputChange}
                />
                
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
              onClick={() => editPatient(RecoveredPatients.Id)}
              
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
              onClick={() => removePatient(RecoveredPatients.Id)}
            />
          </Modal.Actions>
        </Modal>
        </div>
                        
                 
            </div>
         
      
    )
}
export default RecPatientTable;