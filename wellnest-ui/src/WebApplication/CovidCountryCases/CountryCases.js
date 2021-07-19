import React, { Component, useState, useEffect } from "react";

import { Grid } from 'semantic-ui-react';
import { Form, Input, Button, } from 'semantic-ui-react';




const size = ['large']
const CountryCases = () => {
  const [CovidCases, setCovidCases] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/api/Covid19CasesCountry")
      .then((response) => response.json())
      .then((data) => {

        setCovidCases(data);
        console.log(data);
      });
  }, []);


  const handleInputChange = (event) => {
    console.log(event.target.value);
    setCovidCases({ ...CovidCases, [event.target.name]: event.target.value })
   }
  //   const handleCreateActivity =(RecoveredPatinent)=>{
  //     setRecoveredPatinent([...RecoveredPatinent,RecoveredPatinent])
  //   }
 const addNewInfected1 = () => {
    fetch('http://localhost:5000/api/Covid19CasesCountry', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(CovidCases)
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
            <Form onSubmit={addNewInfected1} className="FormStyle" size={size}
              key={size}>
              <h1 className="rec">Positive Covid Infected Patients</h1>
              <Form.Group widths='equal'>

                <Form.Field
                  id='form-input-control-first-name'
                  control={Input}
                  label='Country Name'
                  placeholder='exp. Kosovo'
                  onChange={handleInputChange}
                  name='CountryName'
                />
                <Form.Field
                  id='form-input-control-last-name'
                  control={Input}
                  label='Covid-19 Cases'
                  placeholder='Cases'
                  name='Cases'
                  onChange={handleInputChange}
                />

              </Form.Group>
              <Form.Group widths='equal'>
                <Form.Field
                  id='form-input-control-first-name'
                  control={Input}
                  label='Covid-19 Recoveries'
                  placeholder='Recoveries'
                  name='Recoveries'
                  onChange={handleInputChange}
                />
             
                <Form.Field
                  id='form-input-control-first-name'
                  control={Input}
                  label='Covid-19 Deaths'
                  placeholder='deaths'
                  onChange={handleInputChange}
                  name='deaths'
                />
               


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


export default CountryCases;