import React, { Component } from "react";
import DeleteSickness from './DeleteSickness';
import EditSickness from "./EditSickness";
import NavBar from '../NavBar';

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
      .then(response => response.json())
      .then(data => {
        this.setState({ diseases: data });
      })
  }
  setEditValue(value) {
    this.setState({ showEditSickness: value })
  }
  setDeleteValue(value) {
    this.setState({ showDeleteSickness: value })
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="list-page">
          {
            this.state.diseases.map((elem, index) => {
              return (
                <div className="body-list" key={index}>
                  <span><img src={"http://localhost:5000/api/diseases/getphoto/" + elem.PhotoName} height="220px" /></span>
                  <div id="elem_name">
                    <span>{elem.Name}</span>
                    <span>{elem.information}</span>
                  </div>
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

