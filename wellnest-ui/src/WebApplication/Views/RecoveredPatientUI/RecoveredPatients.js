import React, {Component} from "react";
import './RecoveredPatinent.css'
import {Grid,Image,Select,genderOptions,TextArea} from 'semantic-ui-react';
import {Form,Input,Button,} from 'semantic-ui-react';
import {
    DateInput,
    TimeInput,
    DateTimeInput,
    DatesRangeInput
  } from 'semantic-ui-calendar-react';

const size=[ 'large']
class RecoveredPatients extends Component{
    constructor(props) {
        super(props);
     
        this.state = {
          date: '',
         
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
                                    <h1 className="rec">Recovered Patients Form</h1>
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
                                                            id='form-input-control-first-name'
                                                            control={Input}
                                                            label='City'
                                                            placeholder='City'
                                                        >
                                                        <select class="ui search dropdown" placeholder="City" className="CityColor">
                                                        <option value="" >City</option>
                                                        <option value="PR">Prishtine</option>
                                                        <option value="PZ">Prizren</option>
                                                        <option value="PE">Peja</option>
                                                        <option value="MT">Mitrovica</option>
                                                        <option value="ML">Malisheva</option>
                                                        <option value="TH">Theranda</option>
                                                        <option value="GJ">Gjakova</option>
                                                        <option value="DG">Dragashi</option>
                                                        <option value="OB">Obiliqi</option>
                                                        <option value="FK">Fushe Kosove</option>
                                                        <option value="DQ">Deqani</option>
                                                        <option value="GJL">Gjilani</option>
                                                        <option value="PD">Podujeva</option>
                                                        </select>

                                                        </Form.Field>
                                                         <Form.Field
                                                            id='form-input-control-first-name'
                                                            control={Input}
                                                            label='Phone Number'
                                                            placeholder='Patient Phone Number'
                                                                />
                                                                   <Form.Field
                                                            id='form-input-control-first-name'
                                                            control={Input}
                                                            label='Age'
                                                            placeholder='Patient`s Age'
                                                                />
                                                                </Form.Group>
                                                                <Form.Field
                                                            id='form-input-control-error-email'
                                                            control={Input}
                                                            label='Email'
                                                            placeholder='joe@schmoe.com'
                                                            />
                                                               
                                                               <Form.Group widths='equal'>
                                                              <Form.Field widths='equals'
                                                            id='form-input-control-error-email'
                                                            control={Input}
                                                            label='Infected Date'
                                                            placeholder='Registered as Infected Date'
                                                            > 
                                                             <DateInput
                                                              widths='equal'
                                                              className="Dateinput"
                                                            name="date"
                                                            placeholder="Infected Date"
                                                            value={this.state.date}
                                                            iconPosition="right"
                                                            onChange={this.handleChange}
                                                          /></Form.Field>
                                                             <Form.Field  widths='equal'
                                                            id='form-input-control-error-email'
                                                            control={Input}
                                                            label='Covid-Free'
                                                            placeholder='Registered as Clean Date'
                                                            >
                                                                
                                                                 <DateInput widths='equal'
                                                                 className="Dateinput"
                                                            name="date"
                                                            placeholder="Clean Date"
                                                            value={this.state.date}
                                                            iconPosition="left"
                                                            onChange={this.handleChange}/>

                                                         
                                                            </Form.Field>
                                                          
                                                        </Form.Group>
                                                        <Form.Group widths='equal'>
                                                        <Form.Field
                                                            id='form-input-control-error-email'
                                                            control={Input}
                                                            label='Terminated Days'
                                                            placeholder='Positive Days'
                                                            /> <Form.Field
                                                            id='form-input-control-error-email'
                                                            control={Input}
                                                            label='Quarantined At?'
                                                            placeholder='House/Apartment'
                                                            /> <Form.Field
                                                            id='form-input-control-error-email'
                                                            control={Input}
                                                            label='Vaccine'
                                                            placeholder='Which Vaccine Took'
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
export default RecoveredPatients;