import React, { Component, useState, useEffect } from "react";

import { Grid } from 'semantic-ui-react';
import { Form, Input, Button, } from 'semantic-ui-react';




const size = ['large']
const CovidInfected = () => {
  const [CovidInfected, setCovidInfected] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/api/CovidInfected")
      .then((response) => response.json())
      .then((data) => {

        setCovidInfected(data);
        console.log(data);
      });
  }, []);


  const handleInputChange = (event) => {
    console.log(event.target.value);
    setCovidInfected({ ...CovidInfected, [event.target.name]: event.target.value })
   }
  //   const handleCreateActivity =(RecoveredPatinent)=>{
  //     setRecoveredPatinent([...RecoveredPatinent,RecoveredPatinent])
  //   }
 const addNewInfected = () => {
    fetch('http://localhost:5000/api/CovidInfected', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(CovidInfected)
    }).then(() => {
      //this.props.refreshList()
    }
    )
  }




  return (

    <div>

      


      <Grid columns={1} >
        <Grid.Column className="FirstColumn">
          {size.map((size) => (
            <Form onSubmit={addNewInfected} className="FormStyle" size={size}
              key={size}>
              <h1 className="rec">Positive Covid Infected Patients</h1>
              <Form.Group widths='equal'>

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
        
            
              <button id='form-button-control-public' type="submit"  content='Confirm' className="buttoni1">
              Submit
              </button>
            </Form>
          ))}

        </Grid.Column>

      </Grid>

    </div>
  )
}


export default CovidInfected;