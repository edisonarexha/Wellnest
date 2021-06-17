import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddCasesModal} from './AddCasesModal';
import {EditCasesModal} from './EditCases';

export class CovidCases extends Component{

    constructor(props){
        super(props);
        this.state={CovidCases:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch('http://localhost:5000/api/covid/')
        .then(response=>response.json())
        .then(data=>{
            this.setState({CovidCases:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteEmp(covidID){
        if(window.confirm('Are you sure?')){
            fetch('http://localhost:5000/api/covid/'+covidID,{
                method:'DELETE',
                header:{'Accept':'application/json',
                  'Content-Type':'application/json'}
            })
        }
    }
    
    render(){
        const {CovidCases, covidID,CountryName,Cases,Recoveries,deaths}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div className="table-wrapper" >
                <Table className="mt-4"  bordered hover size="sm" responsive >
                    <thead>
                        <tr>
                        
                        <th>Country Name</th>
                        <th>Cases</th>
                        <th>Recoveries</th>
                        <th>Deaths</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CovidCases.map(CC=>
                            <tr key={CC.country}>
                            
                                <td>{CC.CountryName}</td>
                                <td>{CC.Cases}</td>
                                <td>{CC.Recoveries}</td>
                                <td>{CC.deaths}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="outline-danger"
    onClick={()=>this.setState(
        {editModalShow:true,
        covidID:CC.covidID,
        CountryName:CC.CountryName,
        Cases:CC.Cases,
        Recoveries:CC.Recoveries,
        deaths:CC.deaths}
        )}>
            Edit 
        </Button>

        <Button className="mr-2" variant="danger" size="sm"
    onClick={()=>this.deleteEmp(CC.covidID)}>
            Delete
        </Button>

        <EditCasesModal show={this.state.editModalShow}
        onHide={editModalClose}
        covidID={covidID}
        CountryName={CountryName}
        Cases={Cases}
        Recoveries={Recoveries}
        deaths={deaths}
        />
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='danger'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Country</Button>

                    <AddCasesModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}
export default CovidCases