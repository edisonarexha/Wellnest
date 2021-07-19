import React, {Component} from "react";
import '../AnalysisAppointment/analysisApp.css';
import {Grid} from 'semantic-ui-react';
import {Form,Input,Button,} from 'semantic-ui-react';
import {
    DateTimeInput  } from 'semantic-ui-calendar-react';

const size=[ 'large']
class analysisAppointment extends Component{
    constructor(props) {
        super(props);
     
        this.state = {
          date: '',
          time: '',
          dateTime: '',
          datesRange: ''
        };
      }
      handleChange = (event, {name, value}) => {
        if (this.state.hasOwnProperty(name)) {
          this.setState({ [name]: value });
        }
      }




    class={
        FirstName :null,
        LastName : null,
        City :null,
        Number:null,
        Age:null,
        Infected:null,
        Recovered:null,
        SickDays:null,
        QuarantinedPlacee:null,
        VaccienName:null,
    };

    setFirstName = (event) =>{
        this.setState({FirstName:event.target.value});
    };
    setLastName =(event)=>{
        this.setState({LastName:event.target.value});
    };
    setCity = (event) =>{
        this.setState({City:event.target.value});
    };
    setNumber = (event) => {
        this.setState({Number:event.target.value});
    };
    setAge = (event) =>{
        this.setAge({Age:event.target.value});
    };
    setInfected =(event) =>{
        this.setInfected({Infected:event.target.value});
    };
    setRecovered =(event) =>{
        this.setRecovered({Recovered:event.target.value});
    };
    setSickDays =(event) =>{
        this.setSickDays({SickDays:event.target.value});
    };
    setQuarantinedPlacee = (event) =>{
        this.setQuarantinedPlacee({QuarantinedPlacee:event.target.value});
    };
    setVaccienName = (event)=>{
        this.setVaccienName({VaccienName:event.target.value});
    };
   
                addNewRecovered = () => {
                    console.log("test");
                    fetch('http://localhost:5000/API/RecoveredPatiensCovid19', {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    body: JSON.stringify(this.state),
                    }).then(() => {
                    //kena me shku npage
                    });
                };

                
                handleFileSelected = (event) => {
                    event.preventDefault();
                };
                render(){
                        return(
                         
                             <div>
                               
                                <Grid columns={1} >
                                <Grid.Column className="FirstColumn">
                                {size.map((size) => (
                                    <Form className="FormStyle" size={size}
                                    key={size}>
                                    <h1 className="rec">Analysis Appointment</h1>
                                        <Form.Group widths='equal'>
                                         
                                        <Form.Field
                                            id='form-input-control-first-name'
                                            control={Input}
                                            label='First name'
                                            placeholder='First name'
                                        />
                                        <Form.Field
                                            id='form-input-control-last-name'
                                            control={Input}
                                            label='Last name'
                                            placeholder='Last name'
                                        />
                                    
                                                            </Form.Group>
                                                            <Form.Group widths='equal'>
                                                            <Form.Field
                                            id='form-input-control-last-name'
                                            control={Input}
                                            label='Laboratory Name'
                                            placeholder='Laboratory Name'
                                        />
                                        <Form.Field
                                            id='form-input-control-last-name'
                                            control={Input}
                                            label='Analysis Type'
                                            placeholder='Analysis Type'
                                        /> 
                                                         
                                                               
                                                                </Form.Group>
                                                                
                                                               
                                                               <Form.Group widths='equal'>
                                                              <Form.Field widths='equals'
                                                            id='form-input-control-error-email'
                                                            control={Input}
                                                            Input={Date}
                                                            label='Appointment Date'
                                                            placeholder='Appointment Date'
                                                            > 
                                                             <DateTimeInput className="Dateinput"
                                                                name="dateTime"
                                                                placeholder="Date Time"
                                                                value={this.state.dateTime}
                                                                iconPosition="left"
                                                                onChange={this.handleChange}
                                                                /></Form.Field>
                                                             
                                                          
                                                        </Form.Group>
                                                        <Form.Group widths='equal'>
                                                        <Form.Field
                                            id='form-input-control-last-name'
                                            control={Input}
                                            label='User ID'
                                            placeholder='Type User ID'
                                        />
                                                        </Form.Group>
                                                        <Form.Field
                                                            id='form-button-control-public'
                                                            control={Button}
                                                        content='Confirm'
                                                        
                                                        />
                                                    </Form>
                                ))}

                                </Grid.Column>
                         
                                </Grid>


                                        </div>


                                    )


                }

}
export default analysisAppointment;