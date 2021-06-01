import React, { Component } from 'react';
import{Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
export class Covid extends Component{
constructor(props){
        super(props);
        this.state={covidinfected:[],addModalShow: false,editModalShow:false}
}
//full error
            refreshList(){
            fetch(process.env.REACT_APP_API+ 'country')
            .then(response => response.json())
            .then(data => {
                this.setState({covidinfected:data});
            });
        }

        componentDidMount(){
            this.refreshList();

        }
        componentDidUpdate(){
            this.refreshList();
        }
            //delete method
        deleteCovid(covidID){
            if(window.confirm('Are you sure!?')){
                fetch(process.env.REACT_APP_API + 'country/' + covidID,{
                    method:'DELETE',
                    headers:{'Accept':'application/json','Content-Type':'application/json'}
                } )
            }
        }

        render(){
            const{covidinfected,covidID,CountryName,Cases,Recoveries,deaths}=this.state;
            let addModalClose=()=>this.setState({addModalShow:false});
            let editModalClose=()=>this.setState({editModalShow:false});
            return(
                    <div>
                            <Table className="mt-4" striped bordered hover siza="sm">
                                <thead> 
                                   <tr>
                                       <th>CovidID</th>
                                       <th>Country name</th>
                                        <th>Cases</th>
                                        <th>Recoveries</th>
                                        <th>deaths</th>
                                   </tr>
                                 
                                </thead>
                                <tbody>
                                {covidinfected.map(covidinfect=>
                                        <tr key={covidinfect.covidID}>
                                            <td>{covidinfect.covidID}</td>
                                            <td>{covidinfect.CountryName}</td>
                                            <td>{covidinfect.Cases}</td>
                                            <td>{covidinfect.Recoveries}</td>
                                            <td>{covidinfect.deaths}</td>
                                        </tr>)}
                                        <td>
                                            <ButtonToolbar>
                                                <Button className="mr-2" variant="info"
                                                onClick={()=>this.setState({editModalShow:true,covidinfected:covidinfect.covidID,
                                                    covidinfected:covidinfect.CountryName,covidinfected:covidinfect.Cases,covidinfected:covidinfect.Recoveries,
                                                    covidinfected:covidinfect.deaths,
                                                })}>
                                                    Edit

                                                </Button>


                                            </ButtonToolbar>
                                        </td>
                                </tbody>

                            </Table>


                    </div>


            )

        }


    
    
   






 
}

export default Covid
