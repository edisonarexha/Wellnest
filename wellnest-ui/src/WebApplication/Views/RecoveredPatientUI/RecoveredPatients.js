import React, { Component, useState, useEffect } from "react";
import './RecoveredPatinent.css'
import { Grid, Image, Select, genderOptions, TextArea } from 'semantic-ui-react';
import { Form, Input, Button, } from 'semantic-ui-react';
import MainPage from "../MainPage";
import { Col,Tab,Row,Nav } from 'react-bootstrap';
import logo from '../logo.PNG';
import { Link } from "react-router-dom";

const size = ['large']
const RecoveredPatinent = () => {
  const [RecoveredPatinent, setRecoveredPatinent] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/api/RecoveredPatiensCovid19")
      .then((response) => response.json())
      .then((data) => {

        setRecoveredPatinent(data);
        console.log(data);
      });
  }, []);


  const handleInputChange = (event) => {
    console.log(event.target.value);
    setRecoveredPatinent({ ...RecoveredPatinent, [event.target.name]: event.target.value })
   }
  //   const handleCreateActivity =(RecoveredPatinent)=>{
  //     setRecoveredPatinent([...RecoveredPatinent,RecoveredPatinent])
  //   }
 const addNewRecovered = () => {
    fetch('http://localhost:5000/api/RecoveredPatiensCovid19', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(RecoveredPatinent)
    }).then(() => {
      //this.props.refreshList()
    }
    )
  }




  return (

    <div>
        <div className="Dashboard-left-side">
                  
                  <div className="Covid-19-Profile-cases">
                   
                  <Tab.Container id="left-tabs-example" defaultActiveKey="sixth ">
                      <Row>
                          <Col sm={8}>
                          <Nav variant="pills" className="flex-column" >
                          <Nav.Item>
                                  <img src={logo} className="logopng"></img>
                              </Nav.Item>
                          <Nav.Item>
                              <Nav.Link eventKey="Zero" >Over View</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                              <Nav.Link eventKey="first" >Allergies</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                              <Nav.Link eventKey="second">Illnesses And Conditions</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                              <Nav.Link eventKey="third">Vaccination</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                              <Nav.Link eventKey="fourth">Analysis</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                              <Nav.Link eventKey="fifth">Diagnoses</Nav.Link>
                              </Nav.Item>
                              <Link> <Nav.Item>
                                  <div>
                                      <p></p>
                                  </div>
                            <Nav.Link eventKey="sixth">Add Recovered Patients</Nav.Link>
                              </Nav.Item></Link>  
                              <Nav.Item>


                              <Nav.Link eventKey="seventh">Make An Appointment</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                              <Nav.Link eventKey="eighth">Check Status</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                              <Nav.Link eventKey="ninth">Covid-19</Nav.Link>
                              </Nav.Item>
                          </Nav>
                          </Col>
                       
                      </Row>
                      </Tab.Container>
                    
                        
                  </div>
                 
             </div>
      <Grid columns={1} >
        <Grid.Column className="FirstColumn" style={{border: "1px solid white"}}>
          {size.map((size) => (
            <Form onSubmit={addNewRecovered} className="FormStyle" size={size}
            style={{border:"1px solid white"}}
              key={size}>
              <h1 className="rec">Recovered Patients Form</h1>
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
                />
             
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


export default RecoveredPatinent;