import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export class EditCasesModal extends Component{
    constructor(props){
        super(props);
        this.state={covidCases:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        
    }

   

    componentDidMount(){
        fetch('http://localhost:5000/api/covid/')
        .then(response=>response.json())
        .then(data=>{
            this.setState({covidCases:data});
        });
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:5000/api/covid/',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                covidID:event.target.covidID.value,
                CountryName:event.target.CountryName.value,
                Cases:event.target.Cases.value,
                Recoveries:event.target.Recoveries.value,
                

            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }


    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Edit Country
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={9}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="covidID">
                        <Form.Label>Covid Country ID</Form.Label>
                        <Form.Control type="text" name="countryId" required 
                        placeholder="CovidCountryID"
                        disabled
                        defaultValue={this.props.covidID}/>
                    </Form.Group>

                    <Form.Group controlId="CountryName">
                        <Form.Label>Country Name</Form.Label>
                        <Form.Control type="text" name="Country Name" required 
                        defaultValue={this.props.CountryName}
                        placeholder="CountryName"/>
                    </Form.Group>
                    <Form.Group controlId="Cases">
                        <Form.Label>Cases</Form.Label>
                        <Form.Control type="text" name="Cases " required 
                        defaultValue={this.props.Cases}
                        placeholder="Cases"/>
                    </Form.Group>
                    <Form.Group controlId="Recoveries">
                        <Form.Label>Recoveries</Form.Label>
                        <Form.Control type="text" name="Recoveries " required 
                        defaultValue={this.props.Recoveries}
                        placeholder="Recoveries"/>
                    </Form.Group>
                    <Form.Group controlId="Deaths">
                        <Form.Label>Deaths</Form.Label>
                        <Form.Control type="text" name="Deaths " required 
                        defaultValue={this.props.deaths}
                        placeholder="Deaths"/>
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Update Country
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}
export default EditCasesModal;