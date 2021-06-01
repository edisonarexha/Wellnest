import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddDepModal} from './AddDepModal';
import {EditDepModal} from './EditDepModal';

export class Covid19Table extends Component{

    constructor(props){
        super(props);
        this.state={emps:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'country')
        .then(response=>response.json())
        .then(data=>{
            this.setState({emps:data});
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
            fetch(process.env.REACT_APP_API+'employee/'+covidID,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render(){
        const {emps, empid,empname,depmt,photofilename,doj}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return(
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>CountryId</th>
                        <th>CountryName</th>
                        <th>Cases</th>
                        <th>Recoveries</th>
                        <th>Deaths</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emps.map(emp=>
                            <tr key={emp.covidID}>
                                <td>{emp.covidID}</td>
                                <td>{emp.CountryName}</td>
                                <td>{emp.Cases}</td>
                                <td>{emp.Recoveries}</td>
                                <td>{emp.deaths}</td>
                                <td>
<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        empid:emp.covidID,empname:emp.CountryName,depmt:emp.Cases,
        photofilename:emp.Recoveries,doj:emp.deaths})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteEmp(emp.covidID)}>
            Delete
        </Button>

        <EditDepModal show={this.state.editModalShow}
        onHide={editModalClose}
        empid={empid}
        empname={empname}
        depmt={depmt}
        photofilename={photofilename}
        doj={doj}
        />
</ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Country</Button>

                    <AddDepModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}
export default Covid19Table