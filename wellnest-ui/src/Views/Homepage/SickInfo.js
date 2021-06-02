import React, { Component } from "react";

import DeleteSickness from './DeleteSickness';
import EditSickness from "./EditSickness";

class SickInfo extends Component {
   

  state = {
    diseases: [],
    showEditSickness: false,
    showDeleteSickness: false
  }
  componentDidMount() {
    this.getDiseases()
  }

  getDiseases() {
    this.state.showEditSickness = false
    this.state.showDeleteSickness = false
    fetch('http://localhost:5000/api/diseases')
        .then(response=> response.json())
        .then(data=>{
            this.setState({diseases:data});
        })
  }


  
  setEditValue(value) {
    this.setState({showEditSickness: value})
  }
  setDeleteValue(value) {
    this.setState({showDeleteSickness: value})
  }

  render() {
    return (
      <div>


        <div className="list-page">
            <div className="header-list">
            <span>Image</span>
            <span>Name</span>
            <span>Information</span>
            <span className="btn-content">Edit</span>
            <span className="btn-content">Remove</span>
          </div>
          {
            this.state.diseases.map((elem, index) => {
                return (
                    <div className="body-list" key={index}>
                      <span><img src={"http://localhost:5000/api/diseases/GetPhoto/"+elem.PhotoName} height="150px"></img></span>
                      <span>{elem.Name}</span>
                      <span>{elem.information}</span>
                      <span className="fas fa-pencil-alt btn-content edit-icon"
                        onClick={() => this.setEditValue(elem)}></span>
                      <span className="far fa-trash-alt btn-content danger-icon"
                          onClick={() => this.setDeleteValue(elem)}></span>
                    </div>
                )
            })
          }
        </div>
        
        {this.state.showEditSickness ?
          <EditSickness model={this.state.showEditSickness}
                   closeEditView={() => this.setEditValue(false)}
                         refreshList={() => this.getDiseases()} /> : 
                          ''} 

        {this.state.showDeleteSickness ?
        <DeleteSickness model={this.state.showDeleteSickness}
                   closeDeleteView={() => this.setDeleteValue(false)}
                   refreshList={() => this.getDiseases()} /> : 
                   ''} 
      </div>
    )
  }
}

export default SickInfo
   
