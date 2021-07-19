import React,{useState} from 'react';
import './BookAppTable.css';
import { Button, Modal, Form, FormGroup } from "semantic-ui-react";
import {BookList} from './BookList';
import {  Input } from 'semantic-ui-react';


const size = ['large']
const BookAppTable = () =>{
    const[addOpen,setAddOpen]=useState(false);
    const [editOpen,setEditOpen]=useState(false);
    const [deleteOpen,setDeleteOpen]=useState(false);
    const[BookAppTable,setBookAppTable]=useState([]);
    const editAppointment = (Id) => {
        fetch("http://localhost:5000/api/BookAppointment/" + Id, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(BookAppTable),
        }).then(() => setEditOpen(false));
      };
      const removeAppointment = (Id) => {
        fetch("http://localhost:5000/api/BookAppointment/" + Id, {
          method: "DELETE",
          header: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }).then(() => setDeleteOpen(false));
      };
      const handleInputChange = (event) => {
        event.preventDefault();
        setBookAppTable({ ...BookAppTable, [event.target.name]: event.target.value });
        console.log(event.target.value);
      };
      const addNewAppointment = () => {
        fetch("http://localhost:5000/api/BookAppointment", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(BookAppTable),
        }).then(() => setAddOpen(false));
      };
    return(
        <div>
            

         <BookList >

         </BookList>
            <div id="modaldiv">
                <FormGroup widths="equal">
         
          <Button
            basic
            color="lightblue"
            content="Edit"
            onClick={() => setEditOpen(true)}
          />
             <Button
            basic
            color="blue"
            content="Add"
            onClick={() => setAddOpen(true)}
          />
          <Button
            basic
            color="blue"
            content="Delete"
            onClick={() => setDeleteOpen(true)}
          />
          </FormGroup>
         <Modal
          onClose={() => setAddOpen(false)}
          open={addOpen}
          className="modals-diagnose1"
          onSubmit={addNewAppointment}
        >
          <Modal.Header className="diagnose-title">Add New Appointment</Modal.Header>
          <Modal.Content id="add-diagnose">
          {size.map((size) => (
            <Form onSubmit={addNewAppointment} className="FormStyle111" size={size}
              key={size}>
              <h1 className="rec">Book an Appointment</h1>
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
                  name='SecondName'
                  onChange={handleInputChange}
                />

              </Form.Group>
              <Form.Group widths='equal'>
             
               
              
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
                  label='Email'
                  placeholder='Your Email'
                  name='Email'
                  onChange={handleInputChange}
                />
              </Form.Group>


              <Form.Group widths='equal'>
                <Form.Field widths='equals'
                  id='form-input-control-first-name'
                  control={Input}
                  label='Appointment Date'
                  placeholder='YYYY-MM-DD'
                  name='AppointmentDate'
                  onChange={handleInputChange}
                >
                </Form.Field>


                </Form.Group>
            
                 <Form.Field widths='equal'
                  id='form-input-control-first-name'
                  control={Input}
                  label='Comment'
                  placeholder='Your Comment'
                  name='Comment'
                  onChange={handleInputChange}
                >

                </Form.Field> 

            </Form>
          ))}
          </Modal.Content>




         
          <Modal.Actions className="add-appointment-buttons">
            <Button
              icon="trash alternate outline"
              content="Cancel"
              color="lightblue"
              onClick={() => setAddOpen(false)}
            />
            <Button
              icon="save"
              content="Add"
              color="lightblue"
              onClick={() => addNewAppointment()}
              onSubmit={() => setAddOpen(false)}
            />
          </Modal.Actions>
        </Modal>

         {/*------------------------------------------------------------------------------edit0----------------------- */}

        <Modal
          onClose={() => setEditOpen(false)}
          open={editOpen}
          className="modals-diagnose1"
          size="large"
          
        >
          <Modal.Header className="diagnose-title">Edit Appointment</Modal.Header>
          <Modal.Content id="edit-patinet1">
       
          {size.map((size) => (
            <Form size={size}
              key={size}>
              <h1 className="rec">Edit Your Appointment</h1>
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
                  name='FirstName'
                />
              

              </Form.Group>
              <Form.Group widths='equal'>
              <Form.Field
                  id='form-input-control-last-name'
                  control={Input}
                  label='Last name'
                  placeholder='Last name'
                  name='SecondName'
                  onChange={handleInputChange}
                />
               
              
                <Form.Field
                  id='form-input-control-first-name'
                  control={Input}
                  label='Phone Number'
                  placeholder='Patient Phone Number'
                  onChange={handleInputChange}
                  name='Number'
                />
               
              </Form.Group>


              <Form.Group widths='equal'>
              <Form.Field
                  id='form-input-control-first-name'
                  control={Input}
                  label='Email'
                  placeholder='Your Email'
                  name='Email'
                  onChange={handleInputChange}
                />
                <Form.Field widths='equals'
                  id='form-input-control-first-name'
                  control={Input}
                  label='Appointment Date'
                  placeholder='YYYY-MM-DD'
                  name='AppointmentDate'
                  onChange={handleInputChange}
                >
                </Form.Field>


                </Form.Group>
            
                 <Form.Field widths='equal'
                  id='form-input-control-first-name'
                  control={Input}
                  label='Comment'
                  placeholder='Your Comment'
                  name='Comment'
                  onChange={handleInputChange}
                >

                </Form.Field> 

             
            </Form>
          ))}
                   <Modal.Actions className="add-diagnose-buttons122">
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
              onClick={() => editAppointment(BookAppTable.Id)}
              
            />
          </Modal.Actions>
         </Modal.Content>

        </Modal>
        <Modal
          onClose={() => setDeleteOpen(false)}
          open={deleteOpen}
          id="delete-modal-d1"
          size="large"
        >
          <Modal.Header className="diagnose-title">
           Close the Appointment
          </Modal.Header>
          <Modal.Content>
            <p>Closing the Appointment?</p>
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
              onClick={() => removeAppointment(BookAppTable.Id)}
            />
          </Modal.Actions>
        </Modal>
        </div>
        </div>        


        
    )










}
export default BookAppTable;