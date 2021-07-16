import React, {Component} from "react";
import './addLabs.css'
import {Grid,Image,Select,genderOptions,TextArea} from 'semantic-ui-react';
import {Form,Input,Button,} from 'semantic-ui-react';
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
  } from 'semantic-ui-calendar-react';

const size=[ 'large']
class addLabs extends Component{
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
                                    <h1 className="rec">Add Laboratory</h1>
                                        <Form.Group widths='equal'>
                                         
                                        <Form.Field
                                            id='form-input-control-first-name'
                                            control={Input}
                                            label='Laboratory Name'
                                            placeholder='Laboratory Name'
                                        />
                                        <Form.Field
                                            id='form-input-control-last-name'
                                            control={Input}
                                            label='Adress'
                                            placeholder='Adress'
                                        />
                                    
                                                            </Form.Group>
                                                            <Form.Group widths='equal'>
                                                            <Form.Field
                                            id='form-input-control-last-name'
                                            control={Input}
                                            label='Bussiness Hours'
                                            placeholder='Bussiness Hours'
                                        />
                                        <Form.Field
                                                            id='form-input-control-first-name'
                                                            control={Input}
                                                            label='Privat/Public'
                                                            placeholder='Privat/Public'
                                                        >
                                                        <select class="ui search dropdown" placeholder="Privat/Public" className="CityColor">
                                                        <option value="" >Choose</option>
                                                        <option value="PR">Private</option>
                                                        <option value="PZ">Public</option>
  
                                                        </select>

                                                        </Form.Field>
                                                         
                                                               
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
export default addLabs;