import React, { Component } from "react";
import DeleteSickness from './DeleteSickness';
import EditSickness from "./EditSickness";
import './sick.css';
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
        <div >
          {
            this.state.diseases.map((elem, index) => {
              return (
                <div className="body-l"  id="d-list"key={index}>
                  <span><img id="s-i1" src={"http://localhost:5000/api/diseases/getphoto/" + elem.PhotoName}/></span>
                  <div id="elem_name">
                    <span id="ss1">{elem.Name}</span>
                    <span id="ss2">{elem.information}</span>
                  </div>
                  <div id="e-d-d">
                    <span id="ed-s" className="fas fa-pencil-alt btn-content"
                      onClick={() => this.setEditValue(elem)}></span>
                    <span id="de-s" className="far fa-trash-alt btn-content"
                      onClick={() => this.setDeleteValue(elem)}></span>
                  </div>

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

