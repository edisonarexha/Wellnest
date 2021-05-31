import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export class AddDepModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'country',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                covidID:null,
                CountryName:event.target.CountryName.value,
                Cases:event.target.Cases.value,
                Recoveries:event.target.Recoveries.value ,
                 deaths:event.target.deaths.value
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
            Add Country
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="CountryName">
                        <Form.Label>Country Name</Form.Label>
                        <Form.Control type="text" name="CountryName" required 
                        placeholder="CountryName"/>
                    </Form.Group>
                    <Form.Group controlId="Cases">
                        <Form.Label>Cases</Form.Label>
                        <Form.Control type="text" name="Cases" required 
                        placeholder="Cases"/>
                    </Form.Group>
                    <Form.Group controlId="Recoveries">
                        <Form.Label>Recoveries</Form.Label>
                        <Form.Control type="text" name="Recoveries" required 
                        placeholder="Recoveries"/>
                    </Form.Group>  
                    <Form.Group controlId="deaths">
                        <Form.Label>deaths</Form.Label>
                        <Form.Control type="text" name="deaths" required 
                        placeholder="deaths"/>
                    </Form.Group>  
                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Add Country
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
export default AddDepModal